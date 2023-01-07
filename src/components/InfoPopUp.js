import x from '../assets/x.svg'
import styles from './InfoPopUp.module.css';

/**
 * Displays the popup with info
 * @param {Object} props 
 * @param {Function} props.toggleInfo - Function to be called to close popup
 * @returns {JSX.Element}
 */
const InfoPopUp = (props) => {
    return (
        <>
            <div className={styles.background} onClick={props.toggleInfo}></div>
            <div className={styles.popup}>
                <div className={styles.buttonDiv}>
                    <button className={styles.close} onClick={props.toggleInfo}>
                        <img src={x}>
                        </img>
                    </button>
                </div>
                <h1>
                    What is a "trade up contract"?
                </h1>
                <p>
                    Occaecat commodo aliqua mollit aliquip. Aute sit quis velit incididunt veniam dolor sunt magna. Ipsum velit incididunt laborum excepteur enim laboris in qui mollit adipisicing. Ullamco consectetur voluptate laboris enim reprehenderit excepteur.

                    Fugiat do magna irure tempor reprehenderit ut ad adipisicing laborum ad commodo. Et nostrud occaecat exercitation sit mollit voluptate amet id. Laboris ea culpa sunt magna mollit nisi laborum pariatur veniam labore sunt exercitation qui.
                </p>
                <h1>
                    How are trade up contract outcomes calculated?
                </h1>
                <p>
                    Magna minim aliquip aliquip ullamco. Nostrud sit ad ex Lorem esse proident ut veniam nostrud reprehenderit eu. Proident non ea adipisicing laboris. Magna enim culpa non cupidatat ullamco do mollit proident eiusmod est cupidatat quis officia elit. Laborum et aute pariatur adipisicing occaecat.

                    Sint ipsum velit laboris ullamco aliqua commodo non veniam reprehenderit occaecat Lorem irure. Fugiat veniam anim magna eiusmod. Ullamco aliquip aliquip duis incididunt. Dolor irure enim adipisicing veniam ipsum pariatur Lorem consequat. Excepteur cupidatat pariatur enim exercitation.

                    Eiusmod ad tempor cillum ut consectetur laboris et adipisicing adipisicing eiusmod consectetur nisi est. Consectetur adipisicing exercitation exercitation sit. Esse adipisicing qui nisi sint esse quis reprehenderit anim. Ea eu enim est Lorem in exercitation est consectetur ullamco.
                </p>

            </div>
        </>
    )
}

export default InfoPopUp