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
                <h1 className={styles.h1}>
                    What is a trade up contract?
                </h1>
                <p className={styles.p}>
                    In the video game Counter-Strike: Global Offensive (CS:GO), a trade up contract is a feature that allows players to trade in 10 weapon skins of the same quality in exchange for one skin of the next highest quality.
                </p>
                <h1 className={styles.h1}>
                    How are trade up contract outcomes calculated?
                </h1>
                <p  className={styles.p}>
                    There are two main theories:

                </p>
                <h3 className={styles.h3}>
                    The old theory:
                </h3>
                <p className={styles.p}> Outcome is decided by the collection of the inputs, which means that each input adds 10% probability that the outcome will be from that collection. Here is an example:
                <br /><br />Inputs:
                </p>
                <ul className={styles.list}>
                    <li>
                        5 Restricted skins from the Snakebite collection
                    </li>
                    <li>
                        2 Restricted skins from the Recoil collection
                    </li>
                    <li>
                        3 Restricted skins from the Norse collection
                    </li>
                </ul>
                <p className={styles.p}>Output probability:</p>
                <ul className={styles.list}>
                    <li>
                        50% Classified skin from the Snakebite collection
                    </li>
                    <li>
                        20% Classified skin from the Recoil collection
                    </li>
                    <li>
                        30 % Classified skin from the Norse collection
                    </li>
                </ul>
                <h3 className={styles.h3}>The new Theory: </h3>
                <p className={styles.p}>
                    Outcome is decided by the possible outcome skins. If the collection of an input has 3 skins of the quality above the input, that input will add one ticket for each possible skin, 3 in total. If the collection instead only had one skin of the next quality only one ticket would be added for that input. Let’s se how that changes the example:
                    <br /><br />Inputs:

                </p>
                <ul className={styles.list}>
                    <li>
                        5 Restricted skins from the Snakebite collection (3 possible outcome skins multiplied by inputs from the collection = 3 · 5 = 15)
                    </li>
                    <li>
                        2 Restricted skins from the Recoil collection (3 possible outcome skins multiplied by inputs from the collection = 3 · 2 = 6)
                    </li>
                    <li>
                        3 Restricted skins from the Norse collection (1 possible outcome skin multiplied by inputs from the collection = 1 · 3 = 3)
                    </li>
                </ul>
                <p className={styles.p}>
                    Output probability:
                </p>
                <ul className={styles.list}>
                    <li>
                        62,5% Classified skin from the Snakebite collection (tickets for this collection / total tickets = 15/24)
                    </li>
                    <li>
                        25% Classified skin from the Recoil collection (tickets for this collection / total tickets = 6/24)
                    </li>
                    <li>
                        12,5 % Classified skin from the Norse collection (tickets for this collection / total tickets = 3/24)
                    </li>
                </ul>
                <p className={styles.p}>
                    Nobody except the CS:GO developers knows exactly how the trade up contract outcomes are calculated, but these are the most popular theories that people have come up with. Based on tests made by members of the community it is more likely that the new theory is better at predicting outcomes. The new theory is used to calculate trade up contracts on this website.
                </p>
                <h1 className={styles.h1}>
                    How are wear values(floats) calculated?
                </h1>
                <p className={styles.p}>
                    The outcome skin will have a wear value based on this formula: <i>x · z - y · z + y</i><br/>
                    x: Maximum possible wear value of the chosen outcome skin<br/>
                    y: Minimum possible wear value of the chosen outcome skin<br/>
                    z: Average wear value of inputs<br/>

                </p>
                <h1 className={styles.h1}></h1>
               
            </div>
        </>
    )
}

export default InfoPopUp