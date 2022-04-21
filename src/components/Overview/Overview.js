import React from "react";
import "./Overview.css";
import { Container } from "react-bootstrap";
import overviewGridImg from "../../assets/overviewGridImg.png";
import Carousel from "../Carousel/Carousel";

export default function Overview() {
  return (
    <section id="overview">
      <Container fluid>
        <div className="content">
          <div className="top-text">
            <h1 className="title">Overview</h1>
            <div className="desc">
              The GOD-SKULLS is a collection of 1000+ algorithmically
              generated pieces of art, featuring the Hell oldest living (and
              most bad-ass) species: Devils.
            </div>
          </div>
          <div className="grid-section">
            <div className="text">
              <h5 className="title">our mission</h5>
              <h3 className="subtitle">More than just an NFT project</h3>
              <p className="desc">
                In this NFT project I decided to do something different. It's not just a collection with Similar type of traids, everyone is different and everyone represent something different. Every skull have some deep meaning and sad story behind it.{" "}
              </p>
            </div>
            <img src={overviewGridImg} alt="img grid" />
          </div>
        </div>
      </Container>
      <Carousel />
    </section>
  );
}
