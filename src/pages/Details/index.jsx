import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "../../hooks/useCountries";
import styles from './details.module.css'
import Header from "../../components/Header";
import { useEffect } from "react";


const Details = () => {

    const { countryDetails, getCountry } = useCountries();
    const { country } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            getCountry(country);
        }
        let unMounted = false;
        if (!unMounted) {
            getData();
        }
        return () => unMounted = true;
    }, []);

    const handleBorder = (aux) => {
        getCountry(aux);
        navigate(`/details/${aux}`)
    }

    return (
        <>
            <Header />
            <main className={styles.detailsContainer}>
                <button className={styles.btnBack} onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} />Back</button>
                <section>
                    <div>
                        <img className={styles.detailsImg} src={countryDetails.flags} />
                    </div>
                    <div className={styles.detailsInfo}>
                        <div>
                            <h2>{countryDetails.name}</h2>
                            <div className={styles.infoBlock}>
                                <p><span>Native Name: </span>{countryDetails.native}</p>
                                <p><span>Population: </span>{countryDetails.population}</p>
                                <p><span>Region: </span>{countryDetails.region}</p>
                                <p><span>Sub Region: </span>{countryDetails.subregion}</p>
                                <p><span>Capital: </span>{countryDetails.capital}</p>
                            </div>
                        </div>
                        <div className={styles.infoBlock}>
                            <p><span>Top Level Domain: </span>{countryDetails.tld}</p>
                            <p><span>Currencies: </span>{countryDetails.currencies}</p>
                            <p><span>Lenguages: </span>{countryDetails.language}</p>
                        </div>
                        <div className={styles.bordersContainer}>
                            <p>Border Countries:</p>
                            <div className={styles.btnContainer}>
                                {
                                    countryDetails.borders ? countryDetails.borders.map(aux => {
                                        return (<button onClick={() => handleBorder(aux)} className={styles.btnBack} key={aux}>{aux}</button>)
                                    }) : null
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );

}

export default Details;
