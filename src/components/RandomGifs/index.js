import React, { useContext, useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, Content } from './styles';

import sendIcon from "../../assets/send.png"
import { SearchContext } from '../../hooks/useSearch';

function RandomGifs() {

  const [gif, setGif] = useState({});
  const [textSearch] = useContext(SearchContext);

  async function getRandomGifs() {
    const { data } = await api.get("random");
    setGif(data.data);
  }

  async function searchGifs() {
    const { data } = await api.get(`search?q=${textSearch}`);
    setGif(data.data[0]);
  }

  useEffect(() => {
    if (textSearch === "") {
      getRandomGifs();
    } else {
      searchGifs();
    }
  }, [textSearch]);

  return (
    <Container>
      <Content>
        <div>
          <img width="100%" src={gif?.images?.original?.url} alt={gif.title} />
          <div>
            <p>{gif.title}</p>
            <img src={sendIcon} alt="enviar" />
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default RandomGifs;