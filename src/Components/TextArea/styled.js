import styled from "styled-components";
import { colors, size } from "../../GlobalStyles/Variables";

export const TextMessage = styled.textarea`
  padding: 10px;
  width: 80%;
  max-width: 350px;
  height: 150px;
  margin: 20px 0 20px 0;
  border: none;
  background-color: transparent;
  color: ${colors.Text_primary};
  font-size: ${size.Medium};
  font-family: "Open Sans", sans-serif;
  border-radius: 10px;
  border: 2px solid ${colors.Neon_1};
  box-shadow: 0px 0px 10px ${colors.Neon_1};
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    border: 2px solid ${colors.Neon_2};
    box-shadow: 0px 0px 20px ${colors.Neon_2};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`