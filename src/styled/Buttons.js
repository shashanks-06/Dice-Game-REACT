import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  background-color: black;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.4s background ease-out;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  color: black;
  background-color: white;
  border: 1px solid black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
