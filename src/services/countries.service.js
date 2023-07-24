import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const getAllCountries = async () => {
    try {
        const url = `${apiUrl}all`;
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.error(error);
        throw new Error("Hubo un error al obtener paises")
    }
}