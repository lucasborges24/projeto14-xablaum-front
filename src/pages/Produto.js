import styled from "styled-components";

function Produto() {
  const product = {
    name: "Monitor Brazilpc 21.5 LED Full HD, 75Hz, HDMI/VGA, VESA, Preto - 22W-75KAN",
    oldPrice: 888.78,
    newPrice: 699.9,
    image:
      "https://images.kabum.com.br/produtos/fotos/328743/monitor-brazilpc-21-5-led-full-hd-75hz-hdmi-vga-vesa-preto-22w-75kan_1650400899_gg.jpg",
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
    <>
        <Main></Main>
        <Description></Description>
    </>
  );
}

const Main = styled.main` 

`

const Description = styled.div` 
    
`

export default Produto;
