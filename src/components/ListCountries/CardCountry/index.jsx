import PropTypes from 'prop-types'
import styles from './cardCountry.module.css'

const CardCountry = ({ country }) => {
    return (
        <div className={styles.cardContainer}>
            <div>
                <img src={country.flags.png}/>
            </div>
            <div className={styles.cardInfo}>
                <h5>{country.name.common}</h5>
                <div className={styles.cardData}>
                    <p><span>Population:</span> {country.population}</p>
                    <p><span>Region:</span> {country.region}</p>
                    <p><span>Capital:</span> {country.capital}</p>
                </div>
            </div>
        </div>
    );
}

export default CardCountry;

CardCountry.propTypes = {
    country: PropTypes.object.isRequired
}