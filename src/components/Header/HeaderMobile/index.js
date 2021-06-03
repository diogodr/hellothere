import React from 'react';

import { Container, Content } from './styles';

import logoImg from '../../../assets/logo.svg';
import searchIconImg from '../../../assets/searchIcon.svg';
import starImg from '../../../assets/star.svg';
import addImg from '../../../assets/add.svg';

function HeaderMobile() {
  return (
    <Container>
      <Content>
        <div className="logo">
          <img src={logoImg} alt="Hello There." />
          <div>
            <button>
              <img src={starImg} alt="Favoritos" />
            </button>
            <button>
              <img src={addImg} alt="Favoritos" />
            </button>
          </div>
        </div>
        <div className="input-search">
          <input type="text" placeholder="O que está procurando?" />

          <img src={searchIconImg} alt="corebiz" />

        </div>
      </Content>
    </Container>
  );
}

export default HeaderMobile;