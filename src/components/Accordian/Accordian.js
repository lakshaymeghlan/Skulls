import React from "react";
import "./Accordian.css";
import { Accordion } from "react-bootstrap";

export default function Accordian({ theme }) {
  return (
    <>
      {theme ? (
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0" className="faq-accordian-item">
            <Accordion.Header>
              How much will it cost to mint a GOD-SKULL?
            </Accordion.Header>
            <Accordion.Body className="white-body">
              The floor price is 0.03 ETH which is approx $92.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="faq-accordian-item">
            <Accordion.Header>Example of some rare traits?</Accordion.Header>
            <Accordion.Body>
              There are many type of traits in this collection some of them are rare like with crown, wings, gold and many more.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="faq-accordian-item">
            <Accordion.Header>Why should I invest in GOD-SKULLS?</Accordion.Header>
            <Accordion.Body>
              GOD-SKULLS is not just an average collection it has something different feel and every skull have some deep meaning and sad story behind it. You can also participate in several event and he/she can get 5 Coins of each every week.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="faq-accordian-item">
            <Accordion.Header>What software you used ?</Accordion.Header>
            <Accordion.Body>
              Adobe photoshop, Blender and Adobe Lightroom.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Why GOD-SKULLS ?
            </Accordion.Header>
            <Accordion.Body>
              I bet you never seen this type of art before. My goal is to build something real something that you could say after 5-6 years "yeah man that's worth it".
            </Accordion.Body>
        
         
            
          </Accordion.Item>
        </Accordion>
      )}
    </>
  );
}
