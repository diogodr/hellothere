import React, { useContext, useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, Content } from './styles';

import sendIcon from "../../assets/send.png"
import { SearchContext } from '../../hooks/useSearch';

import saveIcon from "../../assets/save.svg"
import editIcon from "../../assets/edit.svg"
import deleteIcon from "../../assets/delete.svg"

function RandomGifs() {

  const [gif, setGif] = useState({});
  const [textSearch] = useContext(SearchContext);

  async function getRandomGifs() {
    const { data } = await api.get("random");
    setGif(data.data);
  }

  async function saveGif() {
    // const response = await api.post('/saveGif', {

    // })
    alert("Gif salvo no servidor com sucesso!")
  }

  async function changeGif() {
    // const response = await api.put('/changeGif', {

    // })
    alert("Gif salvo com sucesso!")
  }

  async function deleteGif() {
    // const response = await api.delete('/deleteGif', {

    // })
    alert("Gif deletado do servidor com sucesso!")
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
            <div>
              <a onClick={saveGif}>
                <img src={saveIcon} alt="enviar" />
              </a>
              <a onClick={changeGif}>
                <img src={editIcon} alt="enviar" />
              </a>
              <a onClick={deleteGif}>
                <img src={deleteIcon} alt="enviar" />
              </a>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default RandomGifs;