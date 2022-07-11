import styled from 'styled-components';

export default function ProductResume({ productInfo }) {
  return (
    <>
      <Product>
        <ProductLeft>
          <img src={productInfo.image} alt="foto top compre meu produto" />
          <p>{productInfo.name}</p>
        </ProductLeft>
        <ProductRight>
          <Qtd>
            <h2>Quant:</h2>
            <p>{productInfo.qtd}</p>
          </Qtd>
          <Price>
            <h2>Preço:</h2>
            <p>R$&nbsp;{productInfo.newPrice.toFixed(2).replace('.', ',')}</p>
          </Price>
        </ProductRight>
      </Product>
      <Border></Border>
    </>
  );
}

const Product = styled.div`
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
