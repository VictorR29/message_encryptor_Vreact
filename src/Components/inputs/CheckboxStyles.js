import styled from "styled-components";
import { colors,size } from "../../GlobalStyles/Variables";

const CheckboxLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.Neon_1};
  border-radius: 10%;
  padding: 10px 16px;
  color: ${colors.Text_primary};
  font-size: ${size.Small};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    border-color: ${colors.Neon_2}
  }
`

const InputCheckbox = styled.input`
  display: none;

  &:checked + ${CheckboxLabel}{
    border-color: ${colors.Neon_2};
    color: ${colors.Text_secundary};
    box-shadow: 0px 0px 20px ${colors.Neon_2};
  }
`

export { CheckboxLabel, InputCheckbox };