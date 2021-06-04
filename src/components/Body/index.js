import React, { useState } from 'react';
import Navbar from '../Navbar';
import TrendGifs from '../TrendGifs';
import RandomGifs from '../RandomGifs';

function Body() {
  const [menu, setMenu] = useState("trend");

  return (
    <>
      <Navbar setMenu={setMenu} />
      {menu === "trend" ? <TrendGifs /> : <RandomGifs />}
    </>
  );
}

export default Body;