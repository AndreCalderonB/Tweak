import {useState} from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import '../assets/css/Styles.css';
import ScrollToTop from '../components/ScrollToTop';
import RouteWithLayout from '../components/RouteWithLayout';
import Layout from '../components/WebPage/Layout';
import WebAppLayout from '../components/WebApp/WebAppLayout';
import {UserRegister, Login, Dashboard, Home, AboutUsPage, ContactPage, Profile, Users} from '../pages'
import ProtectedRouteWithLayout from '../components/ProtectedRouteWithLayout';
import UserContext from '../providers/userContext'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userSearchID, setUserSearchID] = useState("");
 
  //----- TO DO: VERIFICAR JWT EN RELOAD -------

  return (
    <UserContext.Provider 
    value={{  loginState: [loggedIn, setLoggedIn], userState: [user, setUser] ,searchState: [userSearchID, setUserSearchID] }}>
    <Router>
      <ScrollToTop/>
      <Switch>
          <RouteWithLayout path="/" exact layout={Layout} component={Home} />
          <RouteWithLayout path="/about-us" exact layout={Layout} component={AboutUsPage} />
          <RouteWithLayout path="/contact" exact layout={Layout} component={ContactPage} />
          <RouteWithLayout path="/register" exact layout={Layout} component={UserRegister} />
          <RouteWithLayout path="/login" exact layout={Layout} component={Login} />

          {/*     RUTAS WEB APP              */}
          <ProtectedRouteWithLayout path="/dashboard" exact layout={WebAppLayout} component={Dashboard} />
          <ProtectedRouteWithLayout path="/profile" exact layout={WebAppLayout} component={()=> <Profile id={userSearchID} />} />
          <ProtectedRouteWithLayout path="/users" exact layout={WebAppLayout} component={Users} />
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
