import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class GreatMosque extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://media.istockphoto.com/photos/bafa-lake-landscape-and-castle-island-soke-aydin-turkey-picture-id1276505148?k=20&m=1276505148&s=612x612&w=0&h=3b-pJqO-zE7tnwq7mDD4bsfRoBS5RJHddj77dxtokzU="
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Bafa Gölü</h3>
              Söke ovası 2000 yıl kadar önce denizdi, burada büyük bir körfez vardı. Büyük Menderes ırmağının getirdiği alüvyonlar körfezi duldurdu ve ova haline getirdi. Bugünkü Bafa Gölü denizden bir parça olarak arada kaldı. Gölün üzerinde iki ada bulunmaktadır. İkiz adalardan biri aslında tam ada değil, bir kumulla karaya bağlıdır. Bafa Gölü’nde kefal, levrek, yılan balığı tutulmaktadır.  Gölde gezmek isterseniz dolmuş usulü motorlara binebilirsiniz. Bu sayede Adalar, Heraklia antik kentini de gezilebilirsiniz. Göldeki adalarda manastırlar, kiliseler kurulmuş. Bunlardan "Yediler Manastırı" en eskisidir. Gölün çevresi zeytinliklerle çevrili. Bu nedenle gölün çevresindeki lokantalar da yapılan yemeklerin hepsi zeytinyağı ile yapılmaktadır.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/fisher-boats-at-bafa-lake-mugla-turkey-picture-id1285514821?k=20&m=1285514821&s=612x612&w=0&h=12flzuI8wp56XuOX3ocIsspXzNqhGq-imoiqc9X__FQ=" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/bafa-lake-aydin-picture-id1045655032?k=20&m=1045655032&s=612x612&w=0&h=Xss2YPaLHjscktNqdvdanrwZbNaLF6anha10J6MlCoc="style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/bafa-lake-cove-algal-bloom-lake-pollution-aegean-region-bushes-small-picture-id1141718025?k=20&m=1141718025&s=612x612&w=0&h=pYmcinUK2kSlMllH6g9po_McuTJT9BvTQpP68-9EpV0=" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/bafa-laketurkey-picture-id1271106100?k=20&m=1271106100&s=612x612&w=0&h=VdT1-33sESISfHcGXIDooemg5-7I8ZkxTZ3WSmG_gDc=" style={{height:"274px" ,width:"250px"}}
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
