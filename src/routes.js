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
import IcAnadolu from './pages/icAnadolu/icAnadolu'
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
import Ankara from './pages/icAnadolu/ankara/ankara'
import Nevşehir from './pages/icAnadolu/nevşehir/nevşehir'
import Eskişehir from './pages/icAnadolu/eskişehir/eskişehir'
import Konya from './pages/icAnadolu/konya/konya'
import Anıtkabir from './pages/icAnadolu/ankara/anıtkabir'
import AnkaraKalesi from './pages/icAnadolu/ankara/ankaraKalesi'
import IlkMeclis from './pages/icAnadolu/ankara/ilkMeclis';
import Nallıhan from './pages/icAnadolu/ankara/nallıhan';
import Odunpazarı from './pages/icAnadolu/eskişehir/odunpazarı';
import Porsuk from './pages/icAnadolu/eskişehir/porsuk';
import Atlıhan from './pages/icAnadolu/eskişehir/atlıhan';
import Yazılıkaya from './pages/icAnadolu/eskişehir/yazılıkaya';

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
          <Route exact path="/IcAnadolu" component={IcAnadolu} />
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
          <Route exact path="/IcAnadolu/Ankara" component={Ankara} />
          <Route exact path="/IcAnadolu/Eskişehir" component={Eskişehir} />
          <Route exact path="/IcAnadolu/Konya" component={Konya} />
          <Route exact path="/IcAnadolu/Nevşehir" component={Nevşehir} />
          <Route exact path="/IcAnadolu/Ankara/Anıtkabir" component={Anıtkabir}/>
          <Route exact path="/IcAnadolu/Ankara/AnkaraKalesi" component={AnkaraKalesi}/>
          <Route exact path="/IcAnadolu/Ankara/IlkMeclis" component={IlkMeclis}/>
          <Route exact path="/IcAnadolu/Ankara/Nallıhan" component={Nallıhan}/>
          <Route exact path="/IcAnadolu/Eskişehir/Odunpazarı" component={Odunpazarı}/>
          <Route exact path="/IcAnadolu/Eskişehir/Porsuk" component={Porsuk}/>
          <Route exact path="/IcAnadolu/Eskişehir/Atlıhan" component={Atlıhan}/>
          <Route exact path="/IcAnadolu/Eskişehir/Yazılıkaya" component={Yazılıkaya}/>
        </Switch>
        <Footer/>
        </Layout>
    </div>
  );

  
  export default Routes;