import styles from './ProbabilityCollection.module.css'

/**
 * Displays the probability that the outcome is from the collection 
 * 
 * @param {Object} props
 * @param {Object} props.collection - info about colloection
 * @param {String} props.collection.collection - collection name
 * @param {String} props.collection.collectionURL - collection image
 * @param {Number} props.collection.probability - probability that the outcome is from the collection 
 * @returns {JSX.Element}
 */
const ProbabilityCollection = (props) => {
    return (
        <div className={styles.parent}>
            <h6 className={styles.title}>{props.collection.collection}</h6>
            <div className={styles.card}>
            <img className={styles.collection} src={props.collection.collectionURL}></img>
            <div className={styles.probability}>
                <h6>probability:</h6>
                <h4>{props.collection.probability + '%'}</h4>
            </div>
        </div>
        </div>
    )
}

export default ProbabilityCollection