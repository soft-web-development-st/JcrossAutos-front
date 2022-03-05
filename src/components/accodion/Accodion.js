import React from 'react';
import { Accordion } from "react-bootstrap";
import {BsQuestionSquare} from 'react-icons/bs'
const Accodion = () => {
    
    return (
      <div className="accodion">
        <h1 className="text-center text-success bg-light p-2">
          Frequently Asked Questions <BsQuestionSquare />{" "}
        </h1>
        <Accordion defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header
              style={{ backgroundColor: "lightgreen", color: "green" }}
            >
              Why are you selling the vehicle?
            </Accordion.Header>
            <Accordion.Body>
              If the seller answers, “Because it’s a piece of junk!” then the
              interview may be over (unless junk is your thing). But the seller
              may say something else so odd, or say it so nervously, that you
              can tell he or she thinks it’s a piece of junk and is trying not
              to say so, or doesn’t have the good sense to make up an alternate
              reason ahead of time. If the person doesn’t have the sense to do
              that, he or she probably doesn’t have the sense to keep oil in the
              engine or to roll up the windows when it rains.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              What’s the condition of the vehicle?
            </Accordion.Header>
            <Accordion.Body>
              Note that the wording of the question is neutral. See how the
              seller responds. You know what kind of problems you can live with
              and how they affect your offer. Be sure to follow up by
              specifically asking about both its structural and mechanical
              condition in case the seller didn’t address either one. Again, if
              you see the vehicle and find that the seller could have been more
              honest about its condition, take it as a sign.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Was the vehicle ever involved in an accident?
            </Accordion.Header>
            <Accordion.Body>
              A crucial question. Vehicles that have been in collisions are
              prone to more problems and are worth less. If the seller says “no”
              to this question on the phone and then you determine that it’s
              been damaged and repaired, you’ll know that the seller is
              untrustworthy or, at best, not as familiar with the vehicle as you
              would hope. Whatever their reason for getting it wrong, it may be
              time to walk away
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How much are you asking for it?</Accordion.Header>
            <Accordion.Body>
              Again, the wording is important. It suggests that the price the
              seller quotes should be negotiable.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Do you have service records for it?
            </Accordion.Header>
            <Accordion.Body>
              An owner who was meticulous enough to keep service records was
              probably meticulous enough to take good care of the vehicle.
              Fortunately, you can find out.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
};

export default Accodion;
