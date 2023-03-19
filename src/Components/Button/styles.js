import styled from "styled-components";
import { colors, size } from "../../GlobalStyles/Variables";

const StyledButton = styled.button`
  width: 100px;
  padding: 6px 8px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.Neon_1};
  font-size: ${size.Small};
  font-weight: bold;
  color: ${colors.Black};
  box-shadow: 0px 0px 20px ${colors.Neon_1};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.Neon_2};
    box-shadow: 0px 0px 20px ${colors.Neon_2};
    color: ${colors.Text_primary};
    cursor: pointer;
  }
`

const CopyBtn = styled(StyledButton)`
  background-color: ${colors.Neon_2};
  box-shadow: 0px 0px 20px ${colors.Neon_2};
  color: ${colors.Text_primary};

  &:hover {
    background-color: ${colors.Neon_1};
    box-shadow: 0px 0px 20px ${colors.Neon_1};
    color: ${colors.Black};
    cursor: pointer;
  }
`

export { StyledButton, CopyBtn }