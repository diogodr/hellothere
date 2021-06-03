import React, { useState } from 'react';

import { Container, Content } from './styles';

function Navbar(props) {
  const [activeMenu, setActiveMenu] = useState("trend");

  function handleActive() {
    if (activeMenu === "trend") {
      setActiveMenu("random")
      props.setMenu("random");
    } else {
      setActiveMenu("trend")
      props.setMenu("trend");
    }
  }

  return (
    <Container>
      <Content>
        <ul>
          <a onClick={handleActive}>
            <li className={activeMenu === "trend" ? "active-navbar-button" : "navbar-button"}>
              <p>Trend gifs</p>
              <div />
            </li>
          </a>
          <a onClick={handleActive}>
            <li className={activeMenu === "random" ? "active-navbar-button" : "navbar-button"}>
              <p>Random</p>
              <div />
            </li>
          </a>
        </ul>
      </Content>
    </Container>
  );
}

export default Navbar;