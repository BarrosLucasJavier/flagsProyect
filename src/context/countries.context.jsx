import { createContext, useEffect, useState } from "react";
import { getAllCountries } from "../services/countries.service";
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

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <CountriesContext.Provider value={{countries}}>
            {children}
        </CountriesContext.Provider>
    )

}

CountriesProvider.propTypes = {
    children : PropTypes.node.isRequired,
}