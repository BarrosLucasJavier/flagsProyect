import { Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/404';
import Details from '../pages/Details';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details'>
                <Route path=":country" element={<Details/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>     
        </Routes>
    );
}

export default AppRoutes;
