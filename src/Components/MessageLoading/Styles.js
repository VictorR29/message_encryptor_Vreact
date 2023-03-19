import styled, { keyframes } from "styled-components";
import { colors, size } from "../../GlobalStyles/Variables"

const loading = keyframes`
  0% {
    color: ${colors.Text_primary};
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    color: ${colors.Neon_1};
    opacity: 0.2;
  }
`

const LoadingText = styled.p`
  font-size: ${size.Large};
  color: ${colors.Text_secundary};
  text-transform: uppercase;
  animation: ${loading} 1s ease-in-out infinite;
`

export { LoadingText };