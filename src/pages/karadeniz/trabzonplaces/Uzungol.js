import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Uzungol extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://iadsb.tmgrup.com.tr/bcbae9/0/0/0/0/1000/562?u=https://idsb.tmgrup.com.tr/2017/07/04/1499201191857.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Uzungol</h3>
              Nearly half the residents of the mountainous district of Uzungöl in the Black Sea province of Trabzon, which has become a major destination for Arab tourists, are facing jail time after illegally converting their houses into hotels in the protected region, daily Habertürk has reported. 

Çaykara Municipality said a total of 862 residents of Uzungöl, a verdant highland area that looks out onto the lake of the same name, “violated the construction law” by converting their houses into apart-hotels and hostels without obtaining mandatory licenses. A public prosecutor has demanded two to five years each for the defendants. 

In a separate case, the Environment and Urban Planning Ministry has demanded a year to two years of imprisonment each for the same suspects for contravening the law on the protection of cultural and natural property, as Uzungöl was declared a “special environmental protection area” in 2004, six years after being recognized as a protected area.

Over 700 locals have been charged so far, with decisions expected from the Court of Cassation. 

The residents in the cases have protested the practice, claiming they either did not know their actions constituted a crime or that it was impossible to obtain the necessary licenses due to a construction ban in the region. 

“I wouldn’t have done it if I knew it was against the law. No one gave a warning,” said 73-year-old Mustafa İnan, who was sentenced to 20 months in prison. His wife, Emine İnan, 73, is reportedly facing an ongoing trial for constructing an additional building behind their house.  

Another local, however, said the construction ban made it impossible to undertake any kind of action. “Can’t we change the house on our own property, enlarge it or make it a place of business?”

Çaykara Mayor Hanefi Tok stressed the current discontent was a consequence of the actions of the previous mayor, who “turned a blind eye” to illegal constructions amid a flock of Arab tourists in the district, prompting locals to cash in. 

“The problem grew out of hand as Uzungöl’s former mayor turned a blind eye to illegal construction and granted licenses to those [who built illegal hotels]. We do what the laws stipulate,” he said, adding that the process would continue in accordance with the law. 

The head of Trabzon’s Chamber of Architects, Gürol Ustaömeroğlu, supported moves to protect the district from destruction.

“We do not see a bright future for Uzungöl. What is being carried out there in the name of tourism and income are not signs of good things to come,” he said, adding that a regional protection plan must be prepared and implemented immediately to preserve the town’s natural beauty. 

Meanwhile, the head of the Tourism Associations in Uzungöl, Zeki Soylu, said they were “surprised” by the recent developments, criticizing the discrepancies in the application of the law over the years.

“The owners of these establishments are almost entirely locals. For years, no one followed construction plans here, which is why people built houses and businesses on their properties,” he said, slamming the state for providing water and electricity to all these buildings which are now subject to trials. 

Amid nascent efforts to preserve Uzungöl’s nature, the Forestry and Water Affairs Ministry has also recently announced a plan to clean up Lake Uzungöl by the end of 2016.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/264292812.jpg?k=e57ab8a4afa7b0cb09ad592cf9559faaf415fbaa4fbd3993e075b4eda16f8187&o=" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/8d/5d/81.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://pix8.agoda.net/hotelImages/11024075/-1/0cfa0bd9e3359e4970c1e2bed5ec1437.jpg?s=1024x768" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://pix8.agoda.net/hotelImages/11024075/-1/6cf5ae12fe14fea9a23538f4d2db4c46.jpg?s=1024x768" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>
          </Row>
        </Container>
       </div>
    );
  }
}
