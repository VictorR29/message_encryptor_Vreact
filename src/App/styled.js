import styled from "styled-components";
import { colors } from "../GlobalStyles/Variables";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #1c1c1c, #222222, #232323);
  opacity: 0.9;

  @media(min-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  max-width: 350px;
  height: auto;
`

const InputsRadio = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
`

const InputCheckbox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 40px;
`
const MessageContainer = styled.div`
  width: 80%;
  max-width: 450px;
  height: 40%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding:10px;
  border: 2px solid ${colors.Text_secundary};
  border-radius: 10px;
  text-align: center;
  word-break: break-word;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

export { Container, InputsContainer, InputsRadio, InputCheckbox, MessageContainer, ButtonsContainer }