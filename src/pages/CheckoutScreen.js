import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ButtonWhite, ButtonOrange } from "../shared/Button";

export default function CheckoutScreen() {
  const products = {
    product: [
      {
        name: "monitor foda",
        newPrice: 1000.5,
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages5.memedroid.com%2Fimages%2FUPLOADED10%2F50ca6ce737cc4.png&f=1&nofb=1",
        qtd: 2,
      },
      {
        name: "mouse gamer foda",
        newPrice: 230,
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.extra-imagens.com.br%2FInformatica%2FAcessoriosePerifericos%2FMouses%2F6033608%2F283191085%2FMouse-Optico-Multilaser-Classic-MO179-Preto-6033608.jpg&f=1&nofb=1",
        qtd: 3,
      },
    ],
  };

  const navigate = useNavigate()

  function total() {
    let sum = 0;
    for (let i = 0; i < products.product.length; i ++) {
        sum += products.product[i].newPrice
    }
    console.log(sum)
    return sum;
  }

  return (
    <CheckoutBody>
      <CheckoutStyle>
        <Info>
          <AddressInfo>
            <AddressBox>
              <Icon>
                <ion-icon name="train"></ion-icon>
                <h2>informações da sua entrega</h2>
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

              {products.product.map((i) => 
                <>
                  <Product>
                    <ProductLeft>
                      <img
                        src={i.image}
                        alt=""
                      />
                      <p>{i.name}</p>
                    </ProductLeft>
                    <ProductRight>
                      <Qtd>
                        <h2>Quant:</h2>
                        <p>{i.qtd}</p>
                      </Qtd>
                      <Price>
                        <h2>Preço:</h2>
                        <p>R$&nbsp;{i.newPrice.toFixed(2).replace('.',',')}</p>
                      </Price>
                    </ProductRight>
                  </Product>
                  <Border></Border>
                </>
              )}
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
              <h4>R$&nbsp;{total().toFixed(2).replace('.',',')}</h4>
            </ResumoDescription>
            <Border></Border>
            <ResumoDescription>
              <p>Frete:</p>
              <h4>R$&nbsp;0,00</h4>
            </ResumoDescription>
            <ResumoTotal>
              <h4>R$&nbsp;{total().toFixed(2).replace('.',',')}</h4>
            </ResumoTotal>
            <ButtonOrange>Finalizar</ButtonOrange>
            <ButtonWhite onClick={navigate('/cart')}>Voltar</ButtonWhite>
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
