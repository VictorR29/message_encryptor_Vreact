import styled from "styled-components";
import { colors, size } from "../../GlobalStyles/Variables";

const RadioLabel = styled.label`
  color: ${colors.Text_primary};
  font-size: ${size.Medium};
  font-weight: bold;
  transition: .4s;

  &:hover {
    cursor: pointer;
  }
`

const InputRadio = styled.input`
  appearance: none; //Quitar estilos por defecto del radioButton
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.Neon_1};
  border-radius: 50%;
  box-shadow: 0px 0px 10px ${colors.Neon_1};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:checked {
    background-image: radial-gradient(${colors.Neon_2} 0%, ${colors.Neon_2} 40%, transparent 50%, transparent);
    border-color: ${colors.Neon_2};
    box-shadow: 0px 0px 20px ${colors.Neon_2};
  }

  &:checked + ${RadioLabel} {
    color: ${colors.Text_secundary};
  }
`

export { RadioLabel, InputRadio };