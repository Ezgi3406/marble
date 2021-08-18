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
import Marmara from './components/pages/Marmara'
import Karadeniz from './components/pages/Karadeniz'
import Ege from './pages/ege/Ege'
import Izmir from './pages/ege/Izmir'
import Mugla from './pages/ege/Mugla'
import Denizli from './pages/ege/Denizli'
import KeloglanCave from './pages/ege/denizliplaces/KeloglanCave'
import Hierapolis from './pages/ege/denizliplaces/Hierapolis'
import BosphorusMosque from './pages/ege/denizliplaces/BosphorusMosque'
import Pamukkale from './pages/ege/denizliplaces/Pamukkale'
import Alacati from './pages/ege/izmirplaces/Alacati'
import Efes from './pages/ege/izmirplaces/Efes'
import Kemeralti from './pages/ege/izmirplaces/Kemeralti'
import Kordon from './pages/ege/izmirplaces/Kordon'
import Bodrum from './pages/ege/muglaplaces/Bodrum'
import Datca from './pages/ege/muglaplaces/Datca'
import Fethiye from './pages/ege/muglaplaces/Fethiye'
import Marmaris from './pages/ege/muglaplaces/Marmaris'
import Doguanadolu from './components/pages/Doguanadolu'
import Elazig from './pages/doguanadolu/elazig'
import Erzurum from './pages/doguanadolu/erzurum'
import Agri from './pages/doguanadolu/agri'
import Van from './pages/doguanadolu/van'
import BodrumKalesi from './pages/ege/muglaplaces/BodrumKalesi'
import Iztuzu from './pages/ege/muglaplaces/Iztuzu'
import YassicaAdalari from './pages/ege/muglaplaces/YassicaAdalari'
import Saklikent from './pages/ege/muglaplaces/Saklikent'
import Aydin from './pages/ege/Aydin'
import BafaGolu from './pages/ege/aydinplaces/BafaGolu'
import DidimMarina from './pages/ege/aydinplaces/DidimMarina'
import Guvercinada from './pages/ege/aydinplaces/Guvercinada'
import Tralleis from './pages/ege/aydinplaces/Tralleis'

// import Header from './components/Header/Header';

const Routes = () => (

    <div>
      <Layout>
         {/* <Header/> */}
        <Switch>
         
          {/*<Route path="/" exact component={Auth(Home, null)} />*/}
          <Route path="/register" exact component={Auth(Register, null)} />
          <Route path="/login" exact component={Auth(Login, false)} />
          <Route path="/profile" exact component={Auth(Profile, true)} />
          <Route path="/logout" exact component={Auth(Logout, true)} />
          <Route exact path="/" component={Home} />  
          <Route exact path="/Istanbul" component={Istanbul} /> 
          <Route exact path="/About" component={About} />
          <Route exact path="/Marmara" component={Marmara} />
          <Route exact path="/Karadeniz" component={Karadeniz} />
          <Route exact path="/Ege" component={Ege} />
          <Route exact path="/Izmir" component={Izmir} />
          <Route exact path="/Mugla" component={Mugla} />
          <Route exact path="/Denizli" component={Denizli} />
          <Route exact path="/KeloglanCave" component={KeloglanCave} />
          <Route exact path="/Hierapolis" component={Hierapolis} />
          <Route exact path="/BosphorusMosque" component={BosphorusMosque} />
          <Route exact path="/Pamukkale" component={Pamukkale} />
          <Route exact path="/Alacati" component={Alacati} />
          <Route exact path="/Efes" component={Efes} />
          <Route exact path="/Kemeralti" component={Kemeralti} />
          <Route exact path="Kordon" component={Kordon} />
          <Route exact path="/Bodrum" component={Bodrum} />
          <Route exact path="/Datca" component={Datca} />
          <Route exact path="/Fethiye" component={Fethiye} />
          <Route exact path="/Marmaris" component={Marmaris} />
          <Route exact path="/Doguanadolu" component={Doguanadolu}/>
          <Route exact path="/Doguanadolu/Elazig" component={Elazig}/>
          <Route exact path="/Doguanadolu/Erzurum" component={Erzurum}/>
          <Route exact path="/Doguanadolu/Van" component={Van}/>
          <Route exact path="/Doguanadolu/Agri" component={Agri}/>
          <Route exact path="/BodrumKalesi" component={BodrumKalesi} />
          <Route exact path="/Iztuzu" component={Iztuzu} />
          <Route exact path="/YassicaAdalari" component={YassicaAdalari} />
          <Route exact path="/Saklikent" component={Saklikent} />
          <Route exact path="/Aydin" component={Aydin} />
          <Route exact path="/BafaGolu" component={BafaGolu} />
          <Route exact path="/Tralleis" component={Tralleis} />
          <Route exact path="/DidimMarina" component={DidimMarina} />
          <Route exact path="/Guvercinada" component={Guvercinada} />
        </Switch>
        <Footer/>
        </Layout>
    </div>
  );

  
  export default Routes;