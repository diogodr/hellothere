import React, { useContext, useState } from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg'
import searchIconImg from '../../assets/searchIcon.svg'
import HeaderMobile from './HeaderMobile';
import { SearchContext } from '../../hooks/useSearch';

function Header() {
  const widthScreem = window.innerWidth;
  const isMobile = useState(widthScreem < 700);
  const [setTextSearch] = useContext(SearchContext);

  function handleSearch(event) {
    setTextSearch(event.target.value);
  }

  return (
    <>
      {isMobile ? (
        <HeaderMobile />
      ) : (
        <Container>
          <Content>
            <img src={logoImg} alt="Hello There." />
            <div>
              <div className="input-search">
                <input onChange={handleSearch} type="text" placeholder="O que está procurando?" />
                <img src={searchIconImg} alt="corebiz" />
              </div>
              <button>Favorites</button>
              <button>Add GIF</button>
            </div>
          </Content>
        </Container >
      )
      }
    </>
  );
}

export default Header;