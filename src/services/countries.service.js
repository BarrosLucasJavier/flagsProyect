import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const getAllCountries = async () => {
    try {
        const url = `${apiUrl}all`;
        const { data } = await axios.get(url);
        return data || [];
    } catch (error) {
        console.error(error);
        throw new Error("Hubo un error al obtener paises")
    }
}

export const getRegionCountries = async (region) => {
    try {
        const url = `${apiUrl}region/${region}`;
        const { data } = await axios.get(url);
        return data || [];
    } catch (error) {
        console.error(error)
        throw new Error("Hubo un error al obtener los paises")
    }
}
export const getCountryDetails = async (name) => {
    try {
        const url = `${apiUrl}name/${name}`;
        const {data} = await axios.get(url);
        return data[0] || {};
    } catch (error) {
        console.error(error)
        throw new Error("Hubo un error al obtener el pais")
    }
}
export const getCountryByCode = async (code) => {
    try {
        const url = `${apiUrl}/alpha/${code}`;
        const { data } = await axios.get(url);
        return data || {};
    } catch (error) {
        console.log(error);
        throw new Error("Hubo un error al obtener el pais")
    }
}