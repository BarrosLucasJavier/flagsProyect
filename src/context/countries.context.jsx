import { createContext, useEffect, useState } from "react";
import { getAllCountries, getRegionCountries } from "../services/countries.service";
import PropTypes from 'prop-types'


export const CountriesContext = createContext();

export const CountriesProvider = ({children}) => {

    const [countries, setCountries] = useState([]);

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
            return countriesRegion;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCountries();
    }, []);

    const countriesValues = {
        countries,
        getContriesByRegion
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