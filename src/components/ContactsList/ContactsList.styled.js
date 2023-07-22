import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  line-height: 1.15;
  padding: 10px 0;
  letter-spacing: 0.05em;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 32px;
    padding-right: 32px;
    font-size: 25px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 40px;
    padding-right: 40px;
    font-size: 32px;
  }
`;

export const Button = styled.button`
  box-shadow: inset 0px 0px 12px 3px #ffffff;
  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
  background-color: #ededed;
  border-radius: 4px;
  border: 2px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #212121;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 16px 16px;
  text-decoration: none;

  &:hover {
    background: linear-gradient(to bottom, #212121 5%, #ededed 100%);
    background-color: #212121;
    color: #ffffff;
  }
`;

