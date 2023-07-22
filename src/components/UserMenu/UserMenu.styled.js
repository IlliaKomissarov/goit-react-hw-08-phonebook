import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 15px;
  box-shadow: inset 0px 0px 12px 3px #ffffff;
  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
  background-color: #ededed;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  color: #212121;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 12px;
  text-decoration: none;
  margin: 15px 0;
  color: #dcdcdc;

  &:hover {
    background: linear-gradient(to bottom, #212121 5%, #ededed 100%);
    background-color: #212121;
    color: #ffffff;
  }
`;
