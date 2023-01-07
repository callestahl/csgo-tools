import styles from './Input.module.css'

import random from '../assets/random.svg'
import remove from '../assets/xWhite.svg'
import duplicate from '../assets/duplicate.svg'



/**
 * Displays an input
 * 
 * @param {Object} props 
 * @param {Object} props.skin - Object containing info about the skin to display
 * @returns {JSX.Element} the input element
 * @returns {JSX.Element} empty if props.skin is null 
 */
const Input = (props) => {
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
                        <h6 className={styles.wearValueText}>wear value:</h6>
                        <input className={styles.input}></input>
                    </div>
                    <button className={styles.randomize}>
                        <img className={styles.buttonImage} src={random}></img>
                    </button>
                    <button className={styles.duplicate}>
                        <img className={styles.buttonImage} src={duplicate}></img>
                    </button>
                    <button className={styles.remove}>
                        <img className={styles.buttonImage} src={remove}></img>
                    </button>
                </div>
            </div>
        )
    }
}

export default Input