import styles from './Alert.module.css'

/**
 * 
 * @param {Object} props 
 * @param {"Error"|"Message"|"Success"|"Warning"} props.type - determines the color of the message
 * @param {String} props.message - the message to obe displayed
 * @returns 
 */
const Alert = (props) => {
    return (
        <div className={styles.container}>
            <div className={
                props.type === "Error" ? styles.error : 
                props.type === "Message" ? styles.message :
                props.type === "Success" ? styles.success :
                props.type === "Warning" ? styles.warning :
                styles.message
        }>
                {props.message}
            </div>
        </div>
    )
}

export default Alert