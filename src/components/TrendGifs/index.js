import React, { useContext, useEffect, useState } from 'react';

import api from '../../services/api';
import { Container, Content } from './styles';
import { SearchContext } from '../../hooks/useSearch';

import saveIcon from "../../assets/save.svg"
import editIcon from "../../assets/edit.svg"
import deleteIcon from "../../assets/delete.svg"


function TrendGifs() {

  const [gifList, setGifList] = useState([]);
  const [textSearch] = useContext(SearchContext);
  const [isFetching, setIsFetching] = useState(false);
  const [offSet, setOffSet] = useState(0);

  async function getTrendGifs() {
    const { data } = await api.get(`trending?offset=${offSet}`);
    setGifList([...gifList, ...data.data]);
    setOffSet(offSet + 1);
    setIsFetching(false);
  }

  async function searchGifs() {
    const { data } = await api.get(`search?q=${textSearch}`);
    setGifList(data.data);
  }

  async function saveGif() {
    // const response = await api.post('/saveGif', {

    // })
    alert("Gif salvo no servidor com sucesso!")
  }

  async function changeGif() {
    // const response = await api.put('/changeGif', {

    // })
    alert("Gif editado com sucesso!")
  }

  async function deleteGif() {
    // const response = await api.delete('/deleteGif', {

    // })
    alert("Gif deletado do servidor com sucesso!")
  }

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  };

  useEffect(() => {
    if (!isFetching) return;
    getTrendGifs();
  }, [isFetching]);

  useEffect(() => {
    if (textSearch === "") {
      getTrendGifs();
    } else {
      searchGifs();
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [textSearch]);

  return (
    <Container>
      <Content>
        {gifList.map(gif => (
          <div key={gif.id}>
            <img width="100%" src={gif.images.original.url} alt={gif.title} />
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
        ))}
      </Content>
    </Container>
  );
}

export default TrendGifs;