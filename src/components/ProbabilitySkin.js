import styles from './ProbabilitySkin.module.css'

/**
 * Displays information about a possible outcome
 * @param {Object} props 
 * @param {Object} props.skin - contains info about the outcome
 * @param {String} props.skin.collection - name of the collection the skin is part of
 * @param {String} props.skin.collectionURL - url to image of collection
 * @param {String} props.skin.imageURL - url to image of skin
 * @param {String} props.skin.weaponName - name of the weapon
 * @param {String} props.skin.skinName - name of the skin
 * 
 * @param {Number} props.probability - float number representing the probability of the skin being choosen
 * @param {Number} props.wear - float number that the skin will have if it is choosen
 * @returns {JSX.Element}
 */
const ProbabilitySkin = (props) => {
    let floatGroup
    if (props.wear >= 0.44) {
        floatGroup = 'Battle Scarred'
    }
    else if (props.wear >= 0.37) {
        floatGroup = 'Well Worn'
    }
    else if (props.wear >= 0.15) {
        floatGroup = 'Field Tested'
    }
    else if (props.wear >= 0.07) {
        floatGroup ='Minimal Wear'
    }
    else {
        floatGroup = 'Factory New'
    }

    return (
        <div className={styles.parent}>
            <h6 className={styles.title}>
                {props.skin.weaponName + ' | ' + props.skin.skinName + ' (' + floatGroup + ')'}
            </h6>
            <div className={styles.card}>
                <img className={styles.skin} src={props.skin.imageURL}></img>
                <img className={styles.collection} title={props.skin.collection} src={props.skin.collectionURL}></img>
                <div className={styles.probability}>
                    <h6 className={styles.text}>
                        probability:
                    </h6>
                    <h5>
                        {props.probability + '%'}
                    </h5>
                </div>
                <div className={styles.wear}>
                    <h6 className={styles.text}>
                        wear value:
                    </h6>
                    <h5>
                        {props.wear}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default ProbabilitySkin