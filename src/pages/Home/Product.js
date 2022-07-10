import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonOrange } from '../../shared/Button';

export default function Product({ product }) {
  const noPromo = product.oldPrice <= product.newPrice;
  const color = noPromo ? 'white' : 'lightgray';

  return (
    <Link to={'/produto/' + product._id}>
      <Card>
        <img src={product.image} alt="Foto do produto" />
        <Name>{product.name}</Name>
        <OldPrice color={color}>
          {product.oldPrice.toFixed(2).replace('.', ',')}
        </OldPrice>
        <NewPrice>{product.newPrice.toFixed(2).replace('.', ',')}</NewPrice>
        <ButtonOrange>
          <ion-icon name="cart"></ion-icon>
          Comprar
        </ButtonOrange>
      </Card>
    </Link>
  );
}

const Card = styled.div`
  background-color: white;
  box-shadow: rgba(40, 41, 61, 0.04) 0px 4px 8px;
  min-width: 214px;
  box-sizing: border-box;
  padding: 16px;
  margin-right: 12px;

  :hover {
    box-shadow: rgba(96, 97, 112, 0.16) 0px 8px 16px;
  }

  img {
    width: 100%;
    aspect-ratio: 1.32;
    object-fit: cover;
  }

  button {
    ion-icon {
      color: white;
    }
  }
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: darkslategray;
  margin: 8px 0;
`;

const OldPrice = styled.div`
  color: ${(props) => props.color};
  text-decoration: line-through;
  font-size: 12px;
  margin: 4px 0;

  ::before {
    content: 'R$ ';
  }
`;

const NewPrice = styled.div`
  color: rgb(255, 101, 0);
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;

  ::before {
    content: 'R$ ';
  }
`;
