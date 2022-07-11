import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';

export default function ProductScreen() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { URL, userToken, setUserToken } = useContext(UserContext);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(`${URL}/product/${productId}`);
    promise
      .then((response) => {
        setIsLoading(false);
        setProduct(response.data);
        axios.post(`${URL}/product/${productId}`);
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error.response.data);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addToCart() {
    if (userToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
      const body = {
        name: product.name,
        oldPrice: product.oldPrice,
        newPrice: product.newPrice,
        image: product.image,
        description: product.description,
      };
      const promise = axios.post(URL + '/cart', body, config);
      promise
        .then((response) => {
          alert(
            'Adicionado ao carrinho, clique no carrinho para ver suas compras!'
          );
        })
        .catch((error) => {
          alert(error.response.data);
        });
    } else {
      setUserToken('');
      navigate('/login');
    }
  }

  return (
    <Body>
      <Main>
        <H2>{isLoading ? '' : product.name}</H2>
        <MainBody>
          <Img>
            {isLoading ? <></> : <img src={product.image} alt="produto" />}
          </Img>
          <Content>
            <Price>
              <h4>
                {isLoading ? '' : product.oldPrice.toFixed(2).replace('.', ',')}
              </h4>
              <h3>
                R$
                {isLoading ? '' : product.newPrice.toFixed(2).replace('.', ',')}
              </h3>
            </Price>
            <AddCart onClick={addToCart}>
              <ion-icon name="cart"></ion-icon>
              <p>Comprar</p>
            </AddCart>
          </Content>
        </MainBody>
      </Main>
      <Description>
        <DescriptionTitle>
          <ion-icon name="document"></ion-icon>
          <H2>Descrição do produto</H2>
        </DescriptionTitle>
        <H2>{isLoading ? '' : product.name}</H2>
        <DescriptionSubTitle>
          {isLoading ? '' : product.description}
        </DescriptionSubTitle>
      </Description>
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f3f4;
  padding: 40px 0;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #ffffff;
  margin: 10px 15px;
  padding: 2rem;
  border-radius: 0.25rem;
  /* width: 100%; */
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  line-height: 2.125rem;
  font-weight: 700;
  color: rgb(66, 70, 77);
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const MainBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: 715px) {
    flex-direction: column;
  }
`;

const Img = styled.div`
  width: 50%;
  height: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 715px) {
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  margin-bottom: 3.5rem;

  @media (max-width: 715px) {
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 420px) {
    flex-direction: column;

    h3 {
      margin-bottom: 15px;
    }
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-right: 10px;

  h4 {
    font-size: 0.875rem;
    line-height: 1.3125rem;
    color: rgb(127, 133, 141);
    text-decoration: line-through;
  }

  h3 {
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: 700;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(255, 101, 0);
  }

  @media (max-width: 420px) {
    align-items: center;

    h4 {
      text-align: left;
    }
  }
`;

const AddCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 101, 0);
  max-width: 248px;
  width: 100%;
  height: 48px;
  margin: 0 auto;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  /* padding: 13px; */
  border: 1px solid rgb(255, 101, 0);
  border-radius: 0.25rem;
  cursor: pointer;

  ion-icon {
    margin-right: 7px;
  }

  @media (max-width: 420px) {
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #ffffff;
  margin: 40px 15px;
  padding: 2rem;
  border-radius: 0.25rem;

  h2 {
    font-size: 1rem;
    padding: 0;
    margin: 32px 0 0 3px;
  }
`;

const DescriptionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ion-icon {
    color: rgb(255, 101, 0);
    font-size: 30px;
    margin-right: 10px;
  }

  h2 {
    padding: 0;
    margin: 0 0 0 15px;
    font-size: 1.5rem;
  }
`;

const DescriptionSubTitle = styled.div`
  padding-left: 3px;
  color: rgb(86, 92, 105);
`;
