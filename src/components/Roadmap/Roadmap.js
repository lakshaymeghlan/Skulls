import React from "react";
import "./Roadmap.css";
import { Container } from "react-bootstrap";
import Accordian from "../Accordian/Accordian";

export default function Roadmap() {
  return (
    <section id="roadmap">
      <Container>
        <div className="content">
          <h4 className="sm-title">Roadmap & Utility</h4>
          <div className="top-text">
            <h1 className="lg-title">The future is bright</h1>
            <h2 className="desc">
              In future I decide to make a God and Skull Coin and everyone who holds GOD-SKULLS NFT can participate in several event and also he/she can get 5 Coins of each every week.
            </h2>
          </div>
        </div>
      </Container>
      <div className="customContainer">
        <Accordian />
      </div>
    </section>
  );
}
