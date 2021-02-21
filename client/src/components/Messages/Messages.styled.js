import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  height: 100px;
`;

export const Row = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr) 170px;
  border-radius: 5px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
  margin-bottom: 10px;
`;

export const Header = styled(Row)`
  padding: 10px;
  margin-bottom: 20px;
`;

export const TextItem = styled.p`
  font-family: sans-serif;
  text-align: center;
  margin: 0px 6px;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;

  & > button:first-child {
    margin-right: 20px;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: #ffffff;

  &:disabled {
    background-color: #cccccc;
    color: #000000;
  }
`;

export const BlueButton = styled(Button)`
  background-color: #0072c3;
`;

export const RedButton = styled(Button)`
  background-color: #ff8c8c;
`;
