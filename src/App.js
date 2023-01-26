import './App.css'
import { useState, useEffect } from 'react'
import { getCollections, getSearchResults, calculateOutcomes, getRandomSkins } from './api'

//asset imports
import info from './assets/info.svg'
import x from './assets/x.svg'
import xWhite from './assets/xWhite.svg'
import random from './assets/random.svg'


//components
import InfoPopUp from './components/InfoPopUp'
import SearchResult from './components/SearchResult'
import Input from './components/Input'
import ProbabilityCollection from './components/ProbabilityCollection'
import ProbabilitySkin from './components/ProbabilitySkin'
import Alert from './components/Alert'
import { isDisabled } from '@testing-library/user-event/dist/utils'

function App() {

  const [currentSearchWord, setCurrentSearchWord] = useState('')
  const [currentCollection, setCurrentCollection] = useState('')
  const [currentQuality, setCurrentQuality] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [currentInputs, setCurrentInputs] = useState([
    null, null, null, null, null, null, null, null, null, null,
  ])
  const [currentInputsFloats, setCurrentInputsFloats] = useState([
    null, null, null, null, null, null, null, null, null, null,
  ])
  const [outcome, setOutcome] = useState(null)
  const [showInfo, setShowInfo] = useState(false)
  const [qualityIsDisabled, setQualityIsDisabled] = useState(false);
  const [alert, setAlert] = useState({
    "type": "message",
    "isVisible": false,
    "message": ""
  })
  const [alertTimeoutId, setAlertTimeoutId] = useState(null);
  
  const showAlert = (message, type) => {
    if (alertTimeoutId !== null) {
      clearTimeout(alertTimeoutId)
    }

    setAlert({
      "type": type,
      "isVisible": true,
      "message": message
    })

    setAlertTimeoutId(setTimeout(() => {
      setAlert({"isVisible": false})
    }, 5000))
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  const changeSearchWord = (event) => {
    setCurrentSearchWord(event.target.value)
  }

  const changeCollection = (event) => {
    setCurrentCollection(event.target.value)
  }

  const changeQuality = (event) => {
    setCurrentQuality(event.target.value)
  }

  const calculate = () => {
    const result = calculateOutcomes(currentInputs, currentInputsFloats)
    //if calculation fails the function will return a string with error message
    if (typeof result === "string") {
      showAlert(result, 'Error')
    }
    else {
      setOutcome(result)
    }
  }

  const randomizeFloat = (index, floatMin, floatMax) => {
    const currentState = [...currentInputsFloats]
    currentState.splice(index, 1, (Math.random() * (Number(floatMax) - Number(floatMin)) + Number(floatMin)).toFixed(5))
    setCurrentInputsFloats(currentState)
  }

  const randomizeInputs = (quality) => {
    const InputSAndFloats = getRandomSkins(currentInputs, currentInputsFloats, quality, searchResults)
    if (InputSAndFloats === null) {
      showAlert('No skins match your search filters. Change the add inputs filters and try again')
      return
    }
    setCurrentInputs(InputSAndFloats[0])
    setCurrentInputsFloats(InputSAndFloats[1])
  }

  const clearFilters = () => {
    setCurrentCollection('')
    setCurrentSearchWord('')
    //only reset quality if inputs is empty
    if (currentInputs[0] === null) {
      setCurrentQuality('')
    }
    else {
      showAlert('Input filters cleared. To reset quality you first need to clear the inputs.', 'Message')
    }
  }

  //returns the index of the inserted skin or -1 if not inserted
  const addInput = (skin) => {
    let newInputsState = [...currentInputs]
    let newInputsFloatsState = [...currentInputsFloats]
    for (let i = 0; i < newInputsState.length; i++) {
      if (newInputsState[i] === null) {
        newInputsState[i] = skin
        setCurrentInputs(newInputsState)
        //set initial wear value to lowest possible
        newInputsFloatsState[i] = Number(skin.floatMin)
        setCurrentInputsFloats(newInputsFloatsState)
        return i
      }
    }
    return -1
  }

  const clearInputs = () => {
    setCurrentInputs([
      null, null, null, null, null, null, null, null, null, null,
    ])
    setCurrentInputsFloats([
      null, null, null, null, null, null, null, null, null, null,
    ])
    setOutcome(null)
  }

  const setFloat = (index, value) => {
    const currentState = [...currentInputsFloats]
    currentState.splice(index, 1, value)
    setCurrentInputsFloats(currentState)
  }

  //removes the current input and float at given index
  const removeInput = (index) => {
    let currentInputState = [...currentInputs]
    let currentInputFloatsState = [...currentInputsFloats]
    currentInputState.splice(index, 1)
    currentInputFloatsState.splice(index, 1)
    currentInputState.push(null)
    currentInputFloatsState.push(null)
    setCurrentInputs(currentInputState)
    setCurrentInputsFloats(currentInputFloatsState)
    setOutcome(null)
  }

  //Updates searchresults when when any of the search parameters change
  useEffect(() => {
    setSearchResults(getSearchResults(currentSearchWord, currentCollection, currentQuality))

  }, [currentSearchWord, currentCollection, currentQuality]);

  //disables the quality select element if current inputs contains something else than null
  useEffect(() => {
    let disabled = false
    currentInputs.forEach(element => {
      if (element !== null) {
        setCurrentQuality(element.quality)
        disabled = true
      }
    })
    setQualityIsDisabled(disabled)
  }, [currentInputs]);

  return (
    <div className="App">
      {
        showInfo &&
        <InfoPopUp toggleInfo={toggleInfo} />
      }
      {
        alert.isVisible &&
        <Alert type={alert.type} message={alert.message} />
      }
      <nav>
        <h3>
          tradeup calculator
        </h3>
      </nav>
      <main>
        <div className='big-card-container'>
          <h1>
            Add inputs
          </h1>
          <div className='search-filters'>
            <div className='search-filters-dropdowns-div'>
              <select value={currentQuality} disabled={qualityIsDisabled} onChange={changeQuality} id='quality-select'>
                <option value=''>Select Quality</option>
                <option value='Consumer'>Consumer (Gray)</option>
                <option value='Industrial'>Industrial (Light Blue)</option>
                <option value='Mil-Spec'>Mil-Spec (Blue)</option>
                <option value='Restricted'>Restricted (Purple)</option>
                <option value='Classified'>Classified (Pink)</option>
              </select>
              <select id='collection-select' value={currentCollection} onChange={changeCollection} >
                <option value=''>Select Collection</option>
                {getCollections().map((collectionName) => (
                  <option key={collectionName} value={collectionName}>{collectionName}</option>
                ))}

              </select>
              <button className='clear-input-filters-button' onClick={clearFilters}>
                <img src={x}></img>
              </button>
            </div>
            <input onChange={changeSearchWord} value={currentSearchWord} placeholder='Search Skin...' type='text'></input>
          </div>
          <div className='big-card'>
            {
              searchResults.map((skin) => (
                <SearchResult addInput={addInput} skin={skin} />
              ))
            }
          </div>
        </div>
        <div className='big-card-container'>
          <h1>
            Inputs
          </h1>
          <div className='big-card'>
            <div className='inputs'>
              {
                currentInputs.map((skin, index) =>
                  <Input randomizeFloat={randomizeFloat} floats={currentInputsFloats} setFloat={setFloat} addInput={addInput} removeInput={removeInput} index={index} skin={skin} />
                )
              }
            </div>
            <div className='inputs-buttons'>
              <button className='button-clear-inputs' onClick={clearInputs} >
                <img src={xWhite}></img>
              </button>
              <button className='button-radomize-inputs' onClick={() => randomizeInputs(currentQuality)}>
                <img src={random}></img>
              </button>
              <button className='button-calculate-inputs' onClick={() => calculate(currentInputs, currentInputsFloats)} ><h3>calculate</h3></button>
            </div>
          </div>
        </div>
        <div className='big-card-container'>
          <h1>
            Outcomes
          </h1>
          <div className='big-card outcomes'>
            {outcome &&
              <>
                <h2 className='outcomes-titles'>probability by collections:</h2>
                <div className='collections'>
                  {
                    outcome.collections.map((collection, index) =>
                      <ProbabilityCollection collection={collection} probability={outcome.collectionsProbabiliy[index]} collectionURL={outcome.collectionsURL[index]} />
                    )
                  }
                </div>
                <h2 className='outcomes-titles'>probability by skins:</h2>
                <div className='skins'>
                  {
                    outcome.skins.map((skin, index) =>
                      <ProbabilitySkin skin={skin} probability={outcome.skinsProbability[index]} wear={outcome.skinsFloat[index]} />
                    )

                  }
                </div>
              </>}
          </div>
        </div>
      </main>
      <footer>Copyright © 2023 Carl Ståhl. Not affiliated with Steam or Valve Corp.</footer>
      <div className='info-button-container'>
        <button id='info-button' onClick={toggleInfo}>
          <img src={info}>
          </img>
        </button>
      </div>
    </div>
  );
}

export default App;
