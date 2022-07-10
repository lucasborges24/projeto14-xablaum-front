import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';

import Product from './Product';

export default function HomeScreen() {
  const [promoProducts, setPromoProducts] = useState([]);
  const { URL } = useContext(UserContext);

  useEffect(() => {
    const promise = axios.get(URL + '/promo-products');
    promise
      .then((response) => {
        setPromoProducts(response.data);
      })
      .catch((error) => {
        alert(error.response.text);
      });
  }, [URL]);

  return (
    <Main>
      <Banner
        src="https://themes.kabum.com.br/conteudo/layout/2657/banner_img.jpg"
        alt="Banner principal"
      />
      <Products>
        <div>JULHO GAMER</div>
        <div>
          <Row>
            {promoProducts.map((prod) => (
              <Product product={prod} />
            ))}
          </Row>
        </div>
      </Products>
    </Main>
  );
}

const Banner = styled.img`
  width: 100%;
  aspect-ratio: 4.2;
`;

const Main = styled.div`
  background-color: rgb(1, 11, 20);
`;

const Products = styled.div`
  margin: 0 30px;
  background-color: white;

  > div:first-child {
    background-color: rgb(255, 101, 0);
    color: white;
    font-size: 20px;
    font-weight: 800;
    padding: 24px 32px;
  }

  > div {
    background-color: rgb(250, 250, 250);
    padding: 32px;
  }
`;

const Row = styled.div`
  display: flex;
  overflow-x: hidden;
  padding: 14px;
`;
