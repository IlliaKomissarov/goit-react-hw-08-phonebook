import styled from 'styled-components';

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
`;

export const FindInput = styled.input`
  width: 95%;
  display: flex;
  border: 2px solid black;
  margin: 10px auto;
  padding: 15px;
  font-size: 20px;
  color: #dcdcdc; 

  &:focus-visible {
    border-radius: 4px;
    border: 3px solid lightblue;
  }
`;
