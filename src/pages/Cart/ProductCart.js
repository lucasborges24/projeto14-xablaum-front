import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function Product({ productInfo, products, setProducts, index }) {
  const [quantity, setQuantity] = useState(productInfo.qtd);
  useEffect(() => {
    const updatedProduts = [...products];
    updatedProduts[index].qtd = quantity;
    setProducts(updatedProduts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  return (
    <>
      <ProductPart>
        <ProductLeft>
          <img src={productInfo.image} alt="foto top compre meu produto" />
          <p>{productInfo.name}</p>
        </ProductLeft>
        <ProductRight>
          <Qtd>
            <h2>Quant:</h2>
            <input
              type="number"
              step="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Qtd>
          <Price>
            <h2>Preço:</h2>
            <p>R$&nbsp;{productInfo.newPrice.toFixed(2).replace('.', ',')}</p>
          </Price>
        </ProductRight>
      </ProductPart>
      <Border></Border>
    </>
  );
}

const ProductPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 50px;
`;

const ProductLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    object-fit: contain;
    width: 88px;
    height: 88px;
    margin: auto;
  }

  p {
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 700;
    overflow: hidden;
    max-height: 3.375rem;
    color: rgb(66, 70, 77);
  }
`;

const ProductRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Qtd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;

  h2 {
    margin-top: -2rem;
    margin-bottom: 1.5rem;
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-weight: 400;
    color: rgb(66, 70, 77);
  }

  input {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 2.2rem;
    text-align: center;
    min-width: 1.5rem;
    border: none;
    font-size: 14px;
    font-family: Poppins, sans-serif;
  }

  input:focus {
    font-size: 16px;
    font-family: Poppins, sans-serif;
    outline: none;
    border-color: #ffffff;
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;

  h2 {
    margin-top: -2rem;
    margin-bottom: 1.5rem;
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-weight: 400;
    color: rgb(66, 70, 77);
  }

  p {
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 700;
    color: rgb(252, 107, 15);
    text-align: right;
  }
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background: rgb(222, 224, 228);
`;
