import React from "react";
import "./Traits.css";
import { Container } from "react-bootstrap";
import { traitsGridImg, gun } from "../../assets";

export default function Traits() {
  return (
    <section id="traits">
      <Container fluid>
        <div className="content">
          <div className="grid-section">
            <div className="text">
              <h5 className="title">Trait rarity</h5>
              <h3 className="subtitle">Each GOD-SKULL is unique</h3>
              <p className="desc">
              There are many type of traits in this 
              collection some of them are rare like with crown,
               wings, pink gold and some of them are super rare like Game of Thrones edition SKULL,
                DC edition SKULL, king edition SKULL and etc.
              </p>
              {/* <button className="btn btn-trait">
                <div>Discover traits</div>
              </button> */}
            </div>
            <img src={traitsGridImg} alt="img grid" />
          </div>
          <img src={gun} alt="not found" className="gunImg" />
        </div>
      </Container>
    </section>
  );
}
