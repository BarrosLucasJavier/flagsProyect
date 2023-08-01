import PropTypes from 'prop-types'
import styles from './cardCountry.module.css'
import { useNavigate } from 'react-router-dom';
import { useCountries } from '../../../hooks/useCountries';

const CardCountry = ({ country }) => {

    const navigate = useNavigate()
    const {getCountry} = useCountries()


    const handleDetails = () =>{
        getCountry(country.name.common);
        navigate(`/details/${country.name.common}`)
    }

    return (
        <div className={styles.cardContainer} onClick={() => handleDetails()}>
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