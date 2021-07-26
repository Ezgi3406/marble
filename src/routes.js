import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout';
import Auth from './hoc/auth';
import Login from './containers/Admin/login';
import Register from './containers/Admin/register';
import Profile from './components/User/profile';
import Logout from './components/User/logout';
import Home from './components/Home';
import Istanbul from './components/pages/Istanbul'
import About from './components/pages/About'
import Footer from './components/Footer'


const Routes = () => (
    <div>
      <Layout>
        <Switch>
          {/*<Route path="/" exact component={Auth(Home, null)} />*/}
          <Route path="/register" exact component={Auth(Register, null)} />
          <Route path="/login" exact component={Auth(Login, false)} />
          <Route path="/profile" exact component={Auth(Profile, true)} />
          <Route path="/logout" exact component={Auth(Logout, true)} />
          <Route exact path="/" component={Home} />  
      <Route exact path="/Istanbul" component={Istanbul} /> 
      <Route exact path="/About" component={About} />
        </Switch>
        <Footer/>
        </Layout>
    </div>
  );
  
  export default Routes;