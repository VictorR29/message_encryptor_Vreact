import styled from "styled-components";
import { colors, size } from "../../GlobalStyles/Variables";

const MessageText = styled.span`
  font-size: ${size.Small};
  color: ${colors.Text_primary};
  text-shadow: 2px 2px 2px rgba(0, 255, 159, 0.4);
`

const InfoMessage = styled(MessageText)`
  margin-top: 8px;
  color: #bbb7;
  text-align: center;
  text-shadow: 1px 2px 2px rgb(194, 0, 255, 0.4);
`

export { MessageText, InfoMessage };