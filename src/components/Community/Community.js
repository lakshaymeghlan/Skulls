import React from "react";
import "./Community.css";
import { Container } from "react-bootstrap";
import { communityImg } from "../../assets";

export default function Community() {
  return (
    <section id="community">
      <Container>
        <div className="content">
          <div className="grid-section">
            <img src={communityImg} alt="img grid" />
            <div className="text">
              <h1 className="title">Join the GOD-SKULL community</h1>
              <h2 className="desc">
                Join our Discord community to be the first to know when we go
                live…
              </h2>
              <div className="btns">
                <a href="https://discord.gg/Z2SGY5js"> <button className="btn btn-join">Discord</button></a>
                {/* <button className="btn btn-follow">Connect Wallet</button> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
