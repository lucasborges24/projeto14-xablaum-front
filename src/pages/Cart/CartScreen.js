import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { ButtonWhite, ButtonOrange } from '../../shared/Button';

import Product from './Product';

import UserContext from '../../contexts/UserContext';

export default function CartScreen() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let sum = 0;
    for (const product of products) {
      sum += product.newPrice * product.qtd;
    }
    setTotal(sum);
  }, [products]);
  const navigate = useNavigate();
  const { URL, userToken } = useContext(UserContext);
  useEffect(() => {
    if (userToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
      const promise = axios.get(URL + '/cart', config);
      promise
        .then((response) => {
          setProducts(response.data.products);
        })
        .catch((error) => {
          alert(error.response.data);
          if (error.response.status === 401) {
            navigate('/login');
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CheckoutBody>
      <CheckoutStyle>
        <Info>
          <AddressInfo>
            <AddressBox>
              <Icon>
                <ion-icon name="map"></ion-icon>
                <h2>Selecione o endereço</h2>
              </Icon>
              <AddressTitle>
                <h2>Endereço de entrega</h2>
                <h3>Este é o endereço onde seu pedido será enviado</h3>
              </AddressTitle>
            </AddressBox>
            <AddressData>
              <h4>
                Não se preocupe com o endereço, tio Mark sabe exatamente onde
                você mora :&#41;
              </h4>
            </AddressData>
          </AddressInfo>
          <ProductsInfo>
            <ProductsBox>
              <Icon>
                <ion-icon name="basket"></ion-icon>
                <h2>Lista de produtos</h2>
              </Icon>

              {products.map((i, ind) => (
                <Product
                  key={i._id}
                  productInfo={i}
                  index={ind}
                  products={products}
                  setProducts={setProducts}
                />
              ))}
            </ProductsBox>
          </ProductsInfo>
        </Info>
        <Resumo>
          <ResumoBody>
            <ResumoTitle>
              <Icon>
                <ion-icon name="document-text"></ion-icon>
              </Icon>
              <h2>resumo</h2>
            </ResumoTitle>
            <ResumoDescription>
              <p>Valor dos Produtos:</p>
              <h4>R$&nbsp;{total.toFixed(2).replace('.', ',')}</h4>
            </ResumoDescription>
            <Border></Border>
            <ResumoDescription>
              <p>Frete:</p>
              <h4>R$&nbsp;0,00</h4>
            </ResumoDescription>
            <ResumoTotal>
              <h4>R$&nbsp;{total.toFixed(2).replace('.', ',')}</h4>
            </ResumoTotal>
            <ButtonOrange>Ir para o pagamento</ButtonOrange>
            <ButtonWhite onClick={() => navigate('/')}>Voltar</ButtonWhite>
          </ResumoBody>
        </Resumo>
      </CheckoutStyle>
    </CheckoutBody>
  );
}

const CheckoutBody = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #f2f3f4;
`;

const CheckoutStyle = styled.main`
  display: flex;
  justify-content: space-between;
  max-width: 1500px;
  width: 100%;
  padding: 15px;
  margin: 0 auto;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 63.5rem;
  width: 100%;
  background-color: rgb(242, 243, 244);
`;

const AddressInfo = styled.div`
  padding: 2rem;
  border-radius: 0.25rem;
  max-width: 58.5rem;
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 0.25rem;
`;

const AddressBox = styled.div`
  width: 100%;
  align-items: flex-end;
  padding: 2rem;
  border-radius: 0.25rem;
`;

const Icon = styled.div`
  display: flex;

  ion-icon {
    font-size: 24px;
    color: rgb(255, 101, 0);
  }

  h2 {
    text-transform: uppercase;
    padding-left: 1.0625rem;
    color: rgb(66, 70, 77);
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 700;
  }
`;

const AddressTitle = styled.div`
  margin-top: 27px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: rgb(66, 70, 77);
    margin-bottom: 5px;
  }

  h3 {
    font-size: 14px;
    color: rgb(127, 133, 141);
    font-weight: 400;
  }
`;

const AddressData = styled.div`
  padding: 1rem;
  background-color: rgb(250, 250, 251);
  border-radius: 0.25rem;
  padding: 2rem;

  h4 {
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 700;
    color: rgb(66, 70, 77);
  }
`;

const ProductsInfo = styled.div`
  padding: 2rem;
  border-radius: 0.25rem;
  max-width: 58.5rem;
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 0.25rem;
  margin-top: 40px;
`;

const ProductsBox = styled.div`
  width: 100%;
  align-items: flex-end;
  padding: 2rem;
  border-radius: 0.25rem;
`;

const Resumo = styled.aside`
  display: flex;
  padding: 2rem;
  background-color: rgb(255, 255, 255);
  margin-left: 2rem;
  position: sticky;
  top: 2rem;
  width: 100%;
  max-width: 19.5rem;
  height: 100%;
  border-radius: 0.25rem;
`;

const ResumoBody = styled.div`
  min-width: 15.5rem;

  button {
    margin-bottom: 15px;
  }
`;

const ResumoTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    font-size: 1.5rem;
    line-height: 2.125rem;
    font-weight: 700;
    margin-left: 1rem;
    color: rgb(66, 70, 77);
    text-transform: uppercase;
  }
`;

const ResumoDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  word-break: break-all;
  color: rgb(127, 133, 141);
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1.125rem;

  h4 {
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 700;
    color: rgb(66, 70, 77);
  }
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background: rgb(222, 224, 228);
`;

const ResumoTotal = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(229, 255, 241);
  padding: 1rem;
  margin: 2rem 0px;

  h4 {
    font-size: 1.875rem;
    line-height: 2.375rem;
    font-weight: 700;
    color: rgb(31, 144, 80);
    text-align: center;
  }
`;
