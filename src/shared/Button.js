import styled from 'styled-components';

function ButtonOrange({ children, width }) {
  return (
    <>
      <ButtonOrangeStyle width={width}>{children}</ButtonOrangeStyle>
    </>
  );
}

function ButtonWhite({ children, width }) {
  return (
    <>
      <ButtonWhiteStyle width={width}>{children}</ButtonWhiteStyle>
    </>
  );
}

const ButtonOrangeStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ width }) => width};
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: rgb(255, 101, 0);
  border: 1px solid #ff6500;
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.3s ease 0s, border-width 0.1s ease;
  border-radius: 0.25rem;
  cursor: pointer;

  ion-icon {
    font-size: 30px;
    margin-right: 7px;
  }

  :hover {
    background-color: #ff8b1f;
  }

  :focus {
    border-width: 2px;
    border-radius: 0.3rem;
    outline: currentColor;
  }
`;

const ButtonWhiteStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ width }) => width};
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid #ff6500;
  color: #ff6500;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.3s ease 0s, border-width 0.1s ease;
  border-radius: 0.25rem;
  cursor: pointer;

  ion-icon {
    font-size: 30px;
    margin-right: 7px;
    fill: none;
  }

  :hover {
    color: #ff8b1f;
  }

  :focus {
    border-width: 2px;
    outline: currentColor;
    border-radius: 0.35rem;
  }
`;

export { ButtonOrange, ButtonWhite };
