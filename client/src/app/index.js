import {BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';
import '../assets/css/Styles.css';
import ScrollToTop from '../components/ScrollToTop';
import RouteWithLayout from '../components/RouteWithLayout';
import Layout from '../components/WebPage/Layout';
import WebAppLayout from '../components/WebApp/WebAppLayout';
import {UserRegister, Login, Dashboard} from '../pages'
import api from '../api'
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <RouteWithLayout path="/registro" exact layout={Layout} component={UserRegister} />
        <RouteWithLayout path="/login" exact layout={Layout} component={Login} />
        <RouteWithLayout path="/dashboard" render={() => (api.getSession() ? (<App to="/dashboard" />) : (<Redirect to="/login" />))} exact layout={WebAppLayout} component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
