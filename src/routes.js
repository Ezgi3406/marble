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
import Bolu from './pages/karadeniz/Bolu'
import Abant from './pages/karadeniz/boluplaces/Abant'
import Mudurnu from './pages/karadeniz/boluplaces/Mudurnu'
import Seben from './pages/karadeniz/boluplaces/Seben'
import Yedigoller from './pages/karadeniz/boluplaces/Yedigoller'
import Giresun from './pages/karadeniz/Giresun'
import Giresunadasi from './pages/karadeniz/giresunplaces/Giresunadasi'
import Kumbet from './pages/karadeniz/giresunplaces/Kumbet'
import Mavigol from './pages/karadeniz/giresunplaces/Mavigol'
import Zeytinlik from './pages/karadeniz/giresunplaces/Zeytinlik'
import Kastamonu from './pages/karadeniz/Kastamonu'
import Carsi from './pages/karadeniz/kastamonuplaces/Carsi'
import Etnografya from './pages/karadeniz/kastamonuplaces/Etnografya'
import Ilgaz from './pages/karadeniz/kastamonuplaces/Ilgaz'
import Kale from './pages/karadeniz/kastamonuplaces/Kale'
import Trabzon from './pages/karadeniz/Trabzon'
import Ataturk from './pages/karadeniz/trabzonplaces/Ataturk'
import Gulbahar from './pages/karadeniz/trabzonplaces/Gulbahar'
import Sumela from './pages/karadeniz/trabzonplaces/Sumela'
import Uzungol from './pages/karadeniz/trabzonplaces/Uzungol'



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
          <Route exact path="/Karadeniz/Bolu" component={Bolu} />
          <Route exact path="/Karadeniz/Bolu/Abant" component={Abant} />
          <Route exact path="/Karadeniz/Bolu/Mudurnu" component={Mudurnu} />
          <Route exact path="/Karadeniz/Bolu/Seben" component={Seben} />
          <Route exact path="/Karadeniz/Bolu/Yedigoller" component={Yedigoller} />
          <Route exact path="/Karadeniz/Giresun" component={Giresun} />
          <Route exact path="/Karadeniz/Giresun/Giresunadasi" component={Giresunadasi} />
          <Route exact path="/Karadeniz/Giresun/Kumbet" component={Kumbet} />
          <Route exact path="/Karadeniz/Giresun/Mavigol" component={Mavigol} />
          <Route exact path="/Karadeniz/Giresun/Zeytinlik" component={Zeytinlik} />
          <Route exact path="/Karadeniz/Kastamonu" component={Kastamonu} />
          <Route exact path="/Karadeniz/Kastamonu/Carsi" component={Carsi} />
          <Route exact path="/Karadeniz/Kastamonu/Etnografya" component={Etnografya} />
          <Route exact path="/Karadeniz/Kastamonu/Ilgaz" component={Ilgaz} />
          <Route exact path="/Karadeniz/Kastamonu/Kale" component={Kale} />
          <Route exact path="/Karadeniz/Trabzon" component={Trabzon} />
          <Route exact path="/Karadeniz/Trabzon/Ataturk" component={Ataturk} />
          <Route exact path="/Karadeniz/Trabzon/Gulbahar" component={Gulbahar} />
          <Route exact path="/Karadeniz/Trabzon/Sumela" component={Sumela} />
          <Route exact path="/Karadeniz/Trabzon/Uzungol" component={Uzungol} />
        </Switch>
        <Footer/>
        </Layout>
    </div>
  );

  
  export default Routes;