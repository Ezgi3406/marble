import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout';
import Auth from './hoc/auth';
import Login from './containers/Admin/login';
import Register from './containers/Admin/register';
import Profile from './components/User/profile';
import Logout from './components/User/logout';
import Home from './components/Home';
import Istanbul from './pages/marmara/İstanbul'
import About from './components/pages/About'
import Footer from './components/Footer'
import Marmara from './pages/marmara/Marmara'
import Bursa from './pages/marmara/Bursa Places/Bursa'
import GreatMosque from './pages/marmara/Bursa Places/GreatMosque'
import Canakkale from './pages/marmara/Çanakkale'
import Edirne from './pages/marmara/Edirne'
import Karadeniz from './pages/karadeniz/Karadeniz'
import IcAnadolu from './pages/icAnadolu/icAnadolu'
import Ege from './pages/ege/Ege'
import Izmir from './pages/ege/izmirplaces/Izmir'
import Mugla from './pages/ege/muglaplaces/Mugla'
import Denizli from './pages/ege/denizliplaces/Denizli'
import KeloglanCave from './pages/ege/denizliplaces/KeloglanCave'
import Hierapolis from './pages/ege/denizliplaces/Hierapolis'
import BosphorusMosque from './pages/ege/denizliplaces/BosphorusMosque'
import Pamukkale from './pages/ege/denizliplaces/Pamukkale'
import Alacati from './pages/ege/izmirplaces/Alacati'
import Efes from './pages/ege/izmirplaces/Efes'
import Kemeralti from './pages/ege/izmirplaces/Kemeralti'
import Kordon from './pages/ege/izmirplaces/Kordon'
import Bodrum from './pages/ege/muglaplaces/BodrumKalesi'
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
import Doguanadolu from './pages/doguanadolu/Doguanadolu'
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
import BodrumKalesi from './pages/ege/muglaplaces/BodrumKalesi'
import Iztuzu from './pages/ege/muglaplaces/Iztuzu'
import YassicaAdalari from './pages/ege/muglaplaces/YassicaAdalari'
import Saklikent from './pages/ege/muglaplaces/Saklikent'
import Aydin from './pages/ege/aydinplaces/Aydin'
import BafaGolu from './pages/ege/aydinplaces/BafaGolu'
import DidimMarina from './pages/ege/aydinplaces/DidimMarina'
import Guvercinada from './pages/ege/aydinplaces/Guvercinada'
import Tralleis from './pages/ege/aydinplaces/Tralleis'



// import Header from './components/Header/Header';


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
          <Route exact path="/Bursa" component={Bursa} /> 
          <Route exact path="/GreatMosque" component={GreatMosque} />
          <Route exact path="/Edirne" component={Edirne} /> 
          <Route exact path="/Canakkale" component={Canakkale} /> 
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
          <Route exact path="/Alacati" component={Alacati} />
          <Route exact path="/Efes" component={Efes} />
          <Route exact path="/Kemeralti" component={Kemeralti} />
          <Route exact path="/Kordon" component={Kordon} />
          <Route exact path="/Bodrum" component={Bodrum} />
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