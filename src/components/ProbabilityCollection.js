import styles from './ProbabilityCollection.module.css'

/**
 * Displays the probability that the outcome is from the collection 
 * 
 * @param {Object} props
 * @param {String} props.collection - name of collection
 * @param {String} props.collectionURL - collection image
 * @param {Number} props.probability - probability that the outcome is from the collection 
 * @returns {JSX.Element}
 */
const ProbabilityCollection = (props) => {
    return (
        <div className={styles.parent}>
            <h6 className={styles.title}>{props.collection}</h6>
            <div className={styles.card}>
            <img className={styles.collection} src={props.collectionURL}></img>
            <div className={styles.probability}>
                <h6>probability:</h6>
                <h4>{props.probability + '%'}</h4>
            </div>
        </div>
        </div>
    )
}

export default ProbabilityCollection