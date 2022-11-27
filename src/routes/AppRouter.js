import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Layout from "../Components/Layout"
import Babyshower from "../pages/Babyshower"

import Clientesfelices from "../pages/Clientesfelices"
import Contactanos from "../pages/Contactanos"
import FiestasInfantiles from "../pages/FiestasInfantiles"
import Homepage from "../pages/Homepage"
import NotFountpage from "../pages/NotFountpage"
import PrimerasComuniones from "../pages/PrimerasComuniones"

export default function AppRouter() {
  return (
    <Router>
     <Layout>
        <Switch>
          <Route exact path="/Homepage" component={Homepage} /> 
          <Route exact path="/FiestasInfantiles" component={FiestasInfantiles} /> 
          <Route exact path="/PrimerasComuniones" component={PrimerasComuniones} /> 
          <Route exact path="/Babyshower" component={Babyshower} /> 
          
          <Route exact path="/Clientesfelices" component={Clientesfelices} /> 
          <Route exact path="/Contactanos" component={Contactanos} /> 
          <Route exact path="*" component={NotFountpage} /> 
        </Switch>
        </Layout> 
    </Router>
  )
}
