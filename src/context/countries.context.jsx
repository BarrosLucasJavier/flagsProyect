import { createContext, useEffect, useState } from "react";
import { getAllCountries, getCountryByCode, getCountryDetails, getRegionCountries } from "../services/countries.service";
import PropTypes from 'prop-types'


export const CountriesContext = createContext();

export const CountriesProvider = ({children}) => {

    const [countries, setCountries] = useState([]);
    const [countryDetails, setCountryDetails] = useState({});

    const getCountries = async () => {
        try {
            const countriesData = await getAllCountries()
            setCountries(countriesData)
        } catch (error) {
            console.log(error);
        }
    }
    const getContriesByRegion = async (region) => {
        try {
            const countriesRegion = await getRegionCountries(region);
            setCountries(countriesRegion);
            return
        } catch (error) {
            console.log(error)
        }
    }

    const getCountry = async (name) => {
        try {
            const country = await getCountryDetails(name)
            let bordersCountry=[];
            if(country.borders){
                    bordersCountry = await Promise.all(
                        country.borders.map(async border =>{
                        const temp  =  await getCountryByCode(border)
                        return temp[0].name.common
                    })
                )
            }
            return setCountryDetails({
                name: country.name.common,
                native: Object.values(country.name.nativeName)[0].official,
                population:country.population,
                region:country.region,
                capital:country.capital[0],
                subregion:country.subregion,
                tld:country.tld[0],
                currencies:Object.values(country.currencies)[0].name,
                language:Object.values(country.languages).join(", "),
                borders:bordersCountry,
                flags:country.flags.svg
            })
        } catch (error) {
            console.log(error);
        }
    }
    const getCountryCode = async (code) =>{
        const country = await getCountryByCode(code)
        return country;
    }

    useEffect(() => {
        getCountries();
    }, []);

    const countriesValues = {
        setCountries,
        countries,
        getContriesByRegion,
        getCountries,
        getCountry,
        getCountryCode,
        countryDetails
    }

    return (
        <CountriesContext.Provider value={countriesValues}>
            {children}
        </CountriesContext.Provider>
    )

}

CountriesProvider.propTypes = {
    children : PropTypes.node.isRequired,
}