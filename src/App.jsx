import { BrowserRouter as Router } from "react-router-dom"
import { CountriesProvider } from "./context/countries.context"
import AppRoutes from "./routes"


function App() {
  
  return (
    <Router>
      <CountriesProvider>
        <AppRoutes/>
      </CountriesProvider>
    </Router>
  )
}

export default App
