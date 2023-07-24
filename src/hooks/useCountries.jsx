import { useContext } from "react";
import { CountriesContext } from "../context/countries.context";


export function useCountries () {
    return useContext(CountriesContext)
}