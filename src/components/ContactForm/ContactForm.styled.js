import styled from 'styled-components';
import { Form as FormikForm, Field, ErrorMessage as FormikErrorMessage } from 'formik';

export const FormContact = styled(FormikForm)`
  padding: 15px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* додано тінь */
  background-color: #1d1d1d; /* темний фон */
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const ErrorText = styled(FormikErrorMessage)`
  color: tomato;
`;

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
  color: #dcdcdc; /* темний колір тексту */
`;

export const Input = styled(Field)`
  all: unset;
  display: flex;
  border: 2px solid black;
  margin: 10px 0;
  padding: 15px;
  font-size: 20px;
  color: #dcdcdc; /* темний колір тексту */

  &:focus-visible {
    border-radius: 4px;
    border: 3px solid lightblue;
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
  padding: 16px 37px;
  text-decoration: none;
  margin: 10px 0;

  &:hover {
    background: linear-gradient(to bottom, #212121 5%, #ededed 100%);
    background-color: #212121;
    color: #ffffff;
  }
`;
