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
    let number = offSet;
    number++;
    const { data } = await api.get(`trending?offset=${offSet}`);
    setGifList([...gifList, ...data.data]);
    setOffSet(number);
    console.log("OffSet: ", offSet);
    setIsFetching(false);
  }

  async function searchGifs() {
    const { data } = await api.get(`search?q=${textSearch}`);
    setGifList(data.data);
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
                <a>
                  <img src={saveIcon} alt="enviar" />
                </a>
                <a>
                  <img src={editIcon} alt="enviar" />
                </a>
                <a>
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