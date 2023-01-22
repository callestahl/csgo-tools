import styles from './Input.module.css'

import random from '../assets/random.svg'
import remove from '../assets/xWhite.svg'
import duplicate from '../assets/duplicate.svg'
import { randomizeFloat } from '../api'



/**
 * Displays an input
 * 
 * @param {Object} props 
 * @param {Array} props.floats - floats for the current inputs
 * @param {Object} props.skin - Object containing info about the skin to display
 * @param {Number} props.index - index of the input
 * @param {Function} props.removeInput - function to remove this input
 * @param {Function} props.addInput - function to use when duplicating input
 * @param {Function} props.setFloat - set float of the input
 * @param {Function} props.randomizeFloat - set the float/wear to a random value between floatMin and floatMax
 * @returns {JSX.Element} the input element
 * @returns {JSX.Element} empty if props.skin is null 
 */
const Input = (props) => {


    const checkFloat = (floatMin, floatMax, currentFloat) => {
        if (currentFloat > Number(floatMax) || currentFloat < Number(floatMin)) {
            return false
        }
        return true
    }

    const duplicate = () => {
        const index = props.addInput(props.skin)
        if (index !== -1) {
            props.setFloat(index, props.floats[props.index])
        }
    }

    const handleChange = (event) => {
        const float = event.target.value.replace(',', '.')
        if (float === '') {
            props.setFloat(props.index, null)

            return
        }
        props.setFloat(props.index, Number(float))
    }

    if (props.skin === null) {
        return (
            <div className={styles.container}>
                <h6 className={styles.titleInvisible}>
                    -
                </h6>
                <div className={styles.card}>

                </div>
            </div>
        )
    }
    else {
        return (
            <div className={styles.container}>
                <h6 className={styles.title}>
                    {props.skin.weaponName + ' | ' + props.skin.skinName}
                </h6>
                <div className={styles.cardBorder}>
                    <img className={styles.skin} title={props.skin.weaponName + ' | ' + props.skin.skinName} src={props.skin.imageURL}></img>
                    <img className={styles.collection} title={props.skin.collection} src={props.skin.collectionURL}></img>
                    <div className={styles.wearValueDiv}>
                        <h6 title={props.skin.floatMin + '-' + props.skin.floatMax} className={styles.wearValueText}>wear value:</h6>
                        <input type='number' value={props.floats[props.index]} onChange={handleChange} title={props.skin.floatMin + '-' + props.skin.floatMax} placeholder={props.skin.floatMin + '-' + props.skin.floatMax} className={checkFloat(props.skin.floatMin, props.skin.floatMax, props.floats[props.index]) ? styles.input : styles.inputError}></input>
                    </div>
                    <button className={styles.randomize} onClick={() => props.randomizeFloat(props.index, props.skin.floatMin, props.skin.floatMax)
                    }>
                        <img className={styles.buttonImage} src={random}></img>
                    </button>
                    <button onClick={duplicate} className={styles.duplicate}>
                        <img className={styles.buttonImage} src={duplicate}></img>
                    </button>
                    <button onClick={() => {
                        props.removeInput(props.index)
                    }} className={styles.remove}>
                        <img className={styles.buttonImage} src={remove}></img>
                    </button>
                </div>
            </div>
        )
    }
}

export default Input