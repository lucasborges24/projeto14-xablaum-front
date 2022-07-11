import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import UserContext from '../../contexts/UserContext';

import Product from './ProductCard';

export default function HomeScreen() {
  const [promoProducts, setPromoProducts] = useState([]);
  const [mostPurchased, setMostPurchased] = useState([]);
  const [mostViewed, setMostViewed] = useState([]);
  const { URL } = useContext(UserContext);

  useEffect(() => {
    const promoPromise = axios.get(URL + '/promo-products');
    promoPromise
      .then((response) => {
        setPromoProducts(response.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });

    const purchasedPromise = axios.get(URL + '/purchased-products');
    purchasedPromise
      .then((response) => {
        const firstTen = response.data.slice(-10).reverse();
        setMostPurchased(firstTen);
      })
      .catch((error) => {
        alert(error.response.data);
      });

    const viewedPromise = axios.get(URL + '/viewed-products');
    viewedPromise
      .then((response) => {
        const firstTen = response.data.slice(-10).reverse();
        setMostViewed(firstTen);
      })
      .catch((error) => {
        alert(error.response.data);
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
              <Product key={prod._id} product={prod} />
            ))}
          </Row>
          <Title>MAIS COMPRADOS</Title>
          <Row>
            {mostPurchased.map((prod) => (
              <Product key={prod._id} product={prod} />
            ))}
          </Row>
          <Title>MAIS VISTOS</Title>
          <Row>
            {mostViewed.map((prod) => (
              <Product key={prod._id} product={prod} />
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
  overflow-x: scroll;
  padding: 14px;
`;

const Title = styled.div`
  color: darkslategray;
  font-size: 20px;
  font-weight: 800;
  margin: 50px 0;
`;
