import { BrowserRouter as Router } from "react-router-dom"
import { CountriesProvider } from "./context/countries.context"
import AppRoutes from "./routes"
import './index.css'


function App() {

  return (
    <CountriesProvider>
      <Router>
        <AppRoutes />
      </Router>
    </CountriesProvider>
  )
}

export default App
