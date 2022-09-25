import { Fragment } from "react";

import Card from "../components/accessories/Card";

function AboutMe() {
  return (
    <Fragment>
      <h1>Hello! My name is Gerald Ng!</h1>
      <br />
      <Card>
        <h2>Description</h2>
        <p>
          I am a Prospective Computer Science student at the National University
          of Singapore that will be matriculating in AY2022. Extremely keen and
          passionate in Programming, Innovation and Entrepreneurship. Allow me
          to bring you through my portfolio!
        </p>
      </Card>
      <br />
      <Card>
        <h2>Skills</h2>
        <ul>
          <li>Javascript (ReactJS, NextJS, NodeJS)</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap5</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </Card>
      <br />
      {/* <Card>
        <h2>Achievements</h2>
        <ul>
          <li>Awarded the NUS Global Merit Scholarship for Computer Science</li>
          <li>
            Honourable Mention (4th/5th Placing) in LifeHack 2022 Hackathon
            Organised by NUS Computing Club
          </li>
        </ul>
      </Card>
      <br/> */}
      <Card>
        <h2>Projects</h2>
        <ul>
            <li>ForACause (LifeHack 2022 Hackathon)</li>
            <li>ReactPanda Shopping Cart</li>
            <li>Expense Logger React</li>
        </ul>
      </Card>
    </Fragment>
  );
}

export default AboutMe;
