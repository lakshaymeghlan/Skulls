import React from "react";
import "./Origin.css";
import { Container } from "react-bootstrap";
import { video } from "../../assets";

export default function Origin() {
  return (
    <section id="origin">
      <Container>
        <div className="content">
          <div className="text">
            <h1 className="title">Ideology</h1>
            <h3 className="desc">
            There is something in us, as storytellers and as listeners to stories, 
            that demands the redemptive act, that demands that what falls at least be offered
             the chance to be restored. The reader of today looks for this motion, and rightly so, 
             but what he has forgotten is the cost of it. His sense of evil is diluted or lacking altogether, 
             and so he has forgotten the price of restoration. When he reads a novel, he wants either his sense 
             tormented or his spirits raised. He wants to be transported, instantly, either to mock damnation or a 
             mock innocence.{" "}
            </h3>
          </div>
          <div className="image">
            <img src={video} alt="video" />
          </div>
        </div>
      </Container>
    </section>
  );
}
