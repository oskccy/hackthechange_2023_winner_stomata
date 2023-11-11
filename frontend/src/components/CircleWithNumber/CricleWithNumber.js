import styled from 'styled-components';

export const getColor = (number) => {
  const red = Math.floor(255 - (number * 25.5));
  const green = Math.floor(number * 25.5);
  return `rgb(${red}, ${green}, 0)`;
};

const StyledCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  font-size: 20px;
  background-color: ${({ number }) => getColor(number)};
`;

const CircleWithNumber = ({ number }) => {
  return <StyledCircle number={number}>{number}</StyledCircle>;
};

export default CircleWithNumber;

