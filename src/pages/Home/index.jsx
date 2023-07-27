import Header from "../../components/Header";
import ListCountries from "../../components/ListCountries";
import SearchBar from "../../components/SearchBar";


const Home = () => {

    return (
        <div>
            <Header/>
            <SearchBar/>
            <ListCountries/>
        </div>
    );
}

export default Home;
