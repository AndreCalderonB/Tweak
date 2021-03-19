import {BrowserRouter as Router, Switch} from 'react-router-dom';
import '../assets/css/Styles.css';
import ScrollToTop from '../components/ScrollToTop';
import RouteWithLayout from '../components/RouteWithLayout';
import Layout from '../components/WebPage/Layout';
import WebAppLayout from '../components/WebApp/WebAppLayout';
import {UserRegister, Login, Dashboard, Home, AboutUsPage, ContactPage} from '../pages'
import ProtectedRouteWithLayout from '../components/ProtectedRouteWithLayout';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <RouteWithLayout path="/" exact layout={Layout} component={Home} />
        <RouteWithLayout path="/about-us" exact layout={Layout} component={AboutUsPage} />
        <RouteWithLayout path="/contact" exact layout={Layout} component={ContactPage} />
        <RouteWithLayout path="/register" exact layout={Layout} component={UserRegister} />
        <RouteWithLayout path="/login" exact layout={Layout} component={Login} />
        <ProtectedRouteWithLayout path="/dashboard" exact layout={WebAppLayout} component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
