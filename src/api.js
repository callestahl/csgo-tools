import weapons from './weapons.json'

/**
 * @returns array with names of all collections
 */
export const getCollections = () => {
    return Object.keys(weapons[0]).reverse()
}

/**
 * Returns an array with skin objects based on the parameters the user has selected
 * @param {String} searchWord - content of the text input
 * @param {String} collection - name of the currently selected collection or empty string if nothing is selected
 * @param {String} quality - the current selected quality or empty string if nothing is selected
 * @returns array of objects with matching skins
 */
export const getSearchResults = (searchWord, collection, quality) => {
    let result = []

    //collection
    if (collection === '') {
        for (const key in weapons[0]) {
            if (Object.hasOwnProperty.call(weapons[0], key)) {
                const element = weapons[0][key]
                result = result.concat(element)
            }
        }
    }
    else {
        result = weapons[0][collection]
    }

    //Quality

    //remove skins that cant be used as tradeup input
    result = result.filter(skin => skin.tradupInput)

    if (quality !== '') {
        result = result.filter(skin => skin.quality === quality)
    }

    //filter search terms
    if (searchWord !== '') {
        const pattern = new RegExp(searchWord, 'ig')
        result = result.filter(skin => pattern.test(skin.skinName))
    }


    return result.reverse()
}
export const calculateOutcomes = (inputs, inputFloats) => {
    let collections = []
    let collectionsURL = []
    let pointsByCollection = []
    let collectionsProbabiliy = []
    let skins = []
    let skinsProbability = []
    let skinsFloat = []

    //check that inputs are valid
    if (inputs.includes(null)) {
        return 'Too few inputs. You need to use 10 inputs'

    }
    if (inputFloats.includes(null)) {
        return 'Some inputs are missing a wear value'
    }

    const isOutOfRange = inputs.some((skin, index) => {
        return (Number(skin.floatMin) > inputFloats[index]) || (Number(skin.floatMax) < inputFloats[index]);
    })
    
    if(isOutOfRange) {
        return ('One or more of the input skins have wear values outside of their range');
    }

    //find all possible outcome collections and URLs
    inputs.forEach(skin => {
        if (!collections.includes(skin.collection)) {
            collections.push(skin.collection)
            collectionsURL.push(skin.collectionURL)
        }
    })

    //find all possible skin outcomes
    const quality = ['Consumer', 'Industrial', 'Mil-Spec', 'Restricted', 'Classified', 'Covert']
    const outputQuality = quality[quality.indexOf(inputs[0].quality) + 1]
    for (const collection in weapons[0]) {
        if (collections.includes(collection)) {
            weapons[0][collection].forEach(skin => {
                if (skin.quality === outputQuality) {
                    skins.push(skin)
                }
            })

        }

    }

    //calculate avg float of inputs
    let totalFloat = 0
    inputFloats.forEach(float => {
        totalFloat += Number(float)
    })
    const avgFloat = totalFloat / 10

    //calculate skin output floats
    for (let i = 0; i < skins.length; i++) {
        skinsFloat.push((((Number(skins[i].floatMax) - Number(skins[i].floatMin)) * avgFloat) + Number(skins[i].floatMin)).toFixed(9))
    }

    //calculate probability by collection
    for (let i = 0; i < collections.length; i++) {
        pointsByCollection.push(0)
    }
    inputs.forEach(inputSkin => {
        let outcomeCount = 0
        skins.forEach(outputSkin => {
            if (inputSkin.collection === outputSkin.collection) {
                outcomeCount += 1
            }
        })
        pointsByCollection[collections.indexOf(inputSkin.collection)] += outcomeCount
    })

    const pointsByCollectionSum = pointsByCollection.reduce((sum, current) => sum + current, 0)
    pointsByCollection.forEach(points => {
        collectionsProbabiliy.push(((points / pointsByCollectionSum) * 100).toFixed(2))
    })

    //calculate probability by skin
    let outcomesPerCollection = []
    collections.forEach(collection => {
        let count = 0
        skins.forEach(skin => {
            if (skin.collection === collection) {
                count += 1
            }
        })
        outcomesPerCollection.push(count)
    })
    outcomesPerCollection.forEach((outcomes, index) => {
        for (let i = 0; i < outcomes; i++) {
            skinsProbability.push((collectionsProbabiliy[index] / outcomes).toFixed(2))
        }
    })

    return {
        "collections": collections,
        "collectionsURL": collectionsURL,
        "collectionsProbabiliy": collectionsProbabiliy,
        "skins": skins,
        "skinsProbability": skinsProbability,
        "skinsFloat": skinsFloat
    }
}

export const getRandomSkins = (currentInputs, currentInputFloats, inputQuality = null, searchResults) => {
    if (searchResults.length === 0) {
        return null
    }
    let newInputsState = [...currentInputs]
    let newInputFloatsState = [...currentInputFloats]
    
    
    //if quality is '' then randomize it
    let outputQuality
    if (inputQuality === '') {
        let qualities = []
        searchResults.forEach(skin => {
            if (!qualities.includes(skin.quality)) {
                qualities.push(skin.quality)
            }
        })
        outputQuality = qualities[Math.floor(Math.random() * (qualities.length))]
    }
    else {
        outputQuality = inputQuality
    }

    const newSearchResult = searchResults.filter(skin => skin.quality === outputQuality)

    newInputsState.forEach((input, index) => {
        if (input === null) {
            const randomSkin = getRandomSkin(outputQuality, newSearchResult)
            newInputsState.splice(index, 1, randomSkin)
        }
    })

    newInputFloatsState.forEach((float, index) => {
        if (float === null || Number(float) < Number(newInputsState[index].floatMin) || Number(float) > Number(newInputsState[index].floatMax)) {
            newInputFloatsState.splice(index, 1, (Math.random() * (Number(newInputsState[index].floatMax) - Number(newInputsState[index].floatMin)) + Number(newInputsState[index].floatMin)).toFixed(5))
        }
    })

    return [newInputsState, newInputFloatsState]
}

const getRandomSkin = (quality, searchResults) => {
    const allSkinsFiltered = searchResults.filter(skin => skin.quality === quality)
    const res = allSkinsFiltered[Math.floor(Math.random() * (allSkinsFiltered.length))]
    return (allSkinsFiltered[Math.floor(Math.random() * (allSkinsFiltered.length))])
}

