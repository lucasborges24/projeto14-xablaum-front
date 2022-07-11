import styled from "styled-components";

function Produto() {
  const product = {
    name: "Monitor Brazilpc 21.5 LED Full HD, 75Hz, HDMI/VGA, VESA, Preto - 22W-75KAN",
    oldPrice: 888.78,
    newPrice: 699.9,
    image:
      "https://images.kabum.com.br/produtos/fotos/328743/monitor-brazilpc-21-5-led-full-hd-75hz-hdmi-vga-vesa-preto-22w-75kan_1650400898_gg.jpg",
    description: [
      {
        title: "VESA 100x100",
        text: "O Monitor conta com VESA que é um padrão de quatro furos localizado na parte traseira das TVs e Monitores. Esse padrão VESA determina a compatibilidade entre a TV e o suporte de fixação.",
      },
      {
        title: "Resolução Full HD",
        text: "Full HD, também conhecido como 1080p ou FHD (alta definição total), é uma resolução de tela muito comum de 1920 x 1080 pixels. Esse monitor passa exibe uma imagem de 1080i e 1080p e mapear os pixels 1: 1 sem a necessidade de redefinir a amostra do conteúdo de vídeo para exibir na tela.",
      },
      {
        title: "Operacional",
        text: "Esse Monitor traz conexão Bivolt garantindo que você possa utilizar em qualquer lugar. Ele também traz tecnologia de conexão VGA e HDMI, suportando diferentes tipos de de compatibilidade para você.",
      },
      {
        title: "Tecnologia de Tela",
        text: "O monitor 22W-75KAN da Brazil PC conta com tecnologia de painel TN que garante rápido tempo de resposta, traz também um display que possui 16.7 Milhões de cores para maior fidelidade de cores para suas atividades do dia-a-dia como Netflix, trabalhos de faculdade e para seu Home Office.",
      },
      {
        title: "Garanta já o seu Monitor Brazil PC de 21.5 LED no KaBuM!",
        text: "",
      },
    ],
  };

  return (
    <Body>
      <Main>
        <H2>{product.name}</H2>
        <MainBody>
          <Img>
            <img src={product.image} alt="produto" />
          </Img>
          <Content>
            <Price>
              <h4>{product.oldPrice}</h4>
              <h3>R${product.newPrice.toFixed(2).replace(".", ",")}</h3>
            </Price>
            <AddCart>
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
        <H2>{product.name}</H2>
        <DescriptionSubTitle>
          {product.description.map((i) => {
            return (
              <>
                <h5>{i.title}</h5>
                <h6>{i.text}</h6>
              </>
            );
          })}
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

    h5 {
        font-size: 16px;
        font-weight: bold;
        margin: 10px 0;
    }

    h6 {
        margin-bottom: 25px;
    }
`;

export default Produto;
