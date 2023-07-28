import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "../../hooks/useCountries";


const Details = () => {

    const{ countries } = useCountries();
    const { country } = useParams();
    const navigate = useNavigate();

    const countrySelected = countries.filter(item => item.name.common === country)
    const languages = Object.values(countrySelected[0].languages).join(", ")
    
    return (
        <main>
            <button onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft}/>Back</button>
            <section>
                <div>
                    <img src={countrySelected[0].flags.svg}/>
                </div>
                <div>
                    <div>
                        <h2>{countrySelected[0].name.common}</h2>
                        <div>
                            <p><span>Native Name: </span>{Object.values(countrySelected[0].name.nativeName)[0].official}</p>
                            <p><span>Population: </span>{countrySelected[0].population}</p>
                            <p><span>Region: </span>{countrySelected[0].region}</p>
                            <p><span>Sub Region: </span>{countrySelected[0].subregion}</p>
                            <p><span>Capital: </span>{countrySelected[0].capital}</p>
                        </div>
                    </div>
                    <div>
                        <p><span>Top Level Domain: </span>{countrySelected[0].tld}</p>
                        <p><span>Currencies: </span>{Object.values(countrySelected[0].currencies)[0].name}</p>
                        <p><span>Lenguages: </span>{languages}</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Details;
