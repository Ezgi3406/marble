import React, { Component } from "react";
import {Container, Col, Image, Button, Row } from "react-bootstrap";
export default class harputCastle extends Component {
  render() {
    return (
      <div>
        <div class="absolute-lazyload-wrapper ">
          <div class="partial-backdrop show-sm hide-xs">
            <Image src="https://cdn.goadventureturkey.com/elazig/48hours-desktop-kapak.jpg"
              style={{
                "width":"50%",
                "height":"50%",
                "display":"grid",
                "placeItems":"center",
                "margin-top": "30px",
                "margin-bottom":"30px",
                "margin-left":"30px",
                "margin-right":"30px",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
