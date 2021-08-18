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
import Cesme from './pages/ege/izmirplaces/Cesme'
import Efes from './pages/ege/izmirplaces/Efes'
import Kemeralti from './pages/ege/izmirplaces/Kemeralti'
import Kordon from './pages/ege/izmirplaces/Kordon'
import Bodrum from './pages/ege/muglaplaces/Bodrum'
import Datca from './pages/ege/muglaplaces/Datca'
import Fethiye from './pages/ege/muglaplaces/Fethiye'
import Marmaris from './pages/ege/muglaplaces/Marmaris'
import Doguanadolu from './components/pages/Doguanadolu'
import Elazig from './pages/doguanadolu/elazig'
import HarputCastle from './pages/doguanadolu/Elazig-yerler/harputCastle'
import KebanDam from './pages/doguanadolu/Elazig-yerler/kebanDam'
import SaklikapiCanyon from './pages/doguanadolu/Elazig-yerler/saklikapiCanyon'
import SefikGulCultureHouse from './pages/doguanadolu/Elazig-yerler/sefikGulCultureHouse'
import Erzurum from './pages/doguanadolu/erzurum'
import AtaturkMuseum from './pages/doguanadolu/Erzurum-yerler/ataturkMuseum'
import LakeTortum from './pages/doguanadolu/Erzurum-yerler/lakeTortum'
import Palandoken from './pages/doguanadolu/Erzurum-yerler/palandoken'
import TwinMinaretMedrese from './pages/doguanadolu/Erzurum-yerler/twinMinaretMedrese'
import Agri from './pages/doguanadolu/agri'
import AgriMountain from './pages/doguanadolu/Agri-yerler/agriMountain'
import IshakPasaPalace from './pages/doguanadolu/Agri-yerler/ishakPasaPalace'
import MeyaCaves from './pages/doguanadolu/Agri-yerler/meyaCaves'
import TrailNoahsArk from './pages/doguanadolu/Agri-yerler/trailNoahsArk'
import Van from './pages/doguanadolu/van'
import AkdamarIsland from './pages/doguanadolu/Van-yerler/akdamarIsland'
import HosapCastle from './pages/doguanadolu/Van-yerler/hosapCastle'
import Travertines from './pages/doguanadolu/Van-yerler/travertines'
import VanMuseum from './pages/doguanadolu/Van-yerler/vanMuseum'

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
          <Route exact path="/Cesme" component={Cesme} />
          <Route exact path="/Efes" component={Efes} />
          <Route exact path="/Kemeralti" component={Kemeralti} />
          <Route exact path="Kordon" component={Kordon} />
          <Route exact path="/Bodrum" component={Bodrum} />
          <Route exact path="/Datca" component={Datca} />
          <Route exact path="/Fethiye" component={Fethiye} />
          <Route exact path="/Marmaris" component={Marmaris} />
          <Route exact path="/Doguanadolu" component={Doguanadolu}/>
          <Route exact path="/Doguanadolu/Elazig" component={Elazig}/>
          <Route exact path="/Doguanadolu/Elazig/Harput-Castle" component={HarputCastle}/>
          <Route exact path="/Doguanadolu/Elazig/Keban-Dam" component={KebanDam}/>
          <Route exact path="/Doguanadolu/Elazig/Saklikapi-Canyon" component={SaklikapiCanyon}/>
          <Route exact path="/Doguanadolu/Elazig/Sefik-Gul-Culture-House" component={SefikGulCultureHouse}/>
          <Route exact path="/Doguanadolu/Erzurum" component={Erzurum}/>
          <Route exact path="/Doguanadolu/Erzurum/Ataturk-Museum" component={AtaturkMuseum}/>
          <Route exact path="/Doguanadolu/Erzurum/Lake-Tortum" component={LakeTortum}/>
          <Route exact path="/Doguanadolu/Erzurum/Palandoken" component={Palandoken}/>
          <Route exact path="/Doguanadolu/Erzurum/Twin-Minaret-Medrese" component={TwinMinaretMedrese}/>
          <Route exact path="/Doguanadolu/Van" component={Van}/>
          <Route exact path="/Doguanadolu/Van/Akdamar-Island" component={AkdamarIsland}/>
          <Route exact path="/Doguanadolu/Van/Hosap-Castle" component={HosapCastle}/>
          <Route exact path="/Doguanadolu/Van/Travertines" component={Travertines}/>
          <Route exact path="/Doguanadolu/Van/Van-Museum" component={VanMuseum}/>
          <Route exact path="/Doguanadolu/Agri" component={Agri}/>
          <Route exact path="/Doguanadolu/Agri/Agri-Mountain" component={AgriMountain}/>
          <Route exact path="/Doguanadolu/Agri/Ishak-Pasa-Palace" component={IshakPasaPalace}/>
          <Route exact path="/Doguanadolu/Agri/Meya-Cayes" component={MeyaCaves}/>
          <Route exact path="/Doguanadolu/Agri/Trail-Noahs-Ark" component={TrailNoahsArk}/>
        </Switch>
        <Footer/>
        </Layout>
    </div>
  );

  
  export default Routes;