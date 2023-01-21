import styles from './SearchResult.module.css'
import plus from '../assets/plus.svg'


/**
 * Displays a skin in the 'add inputs column'
 * @param {Object} props 
 * @param {Object} props.skin - Object with info about the skin to display 
 * @param {Object} props.addInput - function for adding the skin to inputs
 * @returns {JSX.Element}
 */
const SearchResult = (props) => {

    return (
        <div className={styles.container}>
            <h6 className={styles.title}>
                {props.skin.weaponName + ' | ' + props.skin.skinName}
            </h6>
            <div className={styles.card}>
                <img className={styles.weapon} title={props.skin.weaponName + ' | ' + props.skin.skinName} src={props.skin.imageURL}></img>
                <img className={styles.collection} title={props.skin.collection} src={props.skin.collectionURL}></img>
                <div className={styles.buttondiv}>
                    <button onClick={() => {
                        props.addInput(props.skin)
                    }}>
                        <img src={plus}></img>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchResult