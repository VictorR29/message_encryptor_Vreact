import React from 'react';
// Importa los componentes necesarios de la carpeta Components/index
import { Button, CopyButton, RadioButton, Checkbox, Message, InformativeMessage, MessageLoading, TextArea} from "../Components/index"
// Importa los estilos necesarios del archivo styled
import { Container, InputsContainer, InputsRadio, InputCheckbox, MessageContainer, ButtonsContainer } from './styled';
// Importa los hooks personalizado useEncryptLogic y useCopyNotification
import { useEncryptLogic } from '../Hooks/useEncryptionLogic';
import { useCopyNotification } from '../Hooks/useCopyNotification';
// Importa los componentes CopyToClipboard para copiar el resultado y Toaster para mostrar la notificación
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster } from 'react-hot-toast';

function App() {
  // Usa el hook useEncryptLogic para manejar el estado de la aplicación
  const {
    encryptionMode,
    encodingTypes,
    result,
    loading,
    textChange,
    encryptionModeChange,
    checkboxChange,
    btnClick,
  } = useEncryptLogic();

    return (
    <Container>
        {/* Usa el componente TextArea para ingresar el texto a encriptar/desencriptar */}
        <TextArea onChange={textChange}/>

        <InputsContainer>
          {/* Usa el componente RadioButton para seleccionar el modo de encriptación/desencriptación */}
          <InputsRadio>
            <RadioButton label="Encrypt" type="radio" value="encrypt" checked={encryptionMode === "encrypt"} onChange={encryptionModeChange}/>
            <RadioButton label="Decrypt" type="radio" value="decrypt" checked={encryptionMode === "decrypt"} onChange={encryptionModeChange}/>
          </InputsRadio>
          <InputCheckbox>
            {/* Usa el componente Checkbox para seleccionar las opciones de encriptación/desencriptación */}
            <Checkbox label="Inverse" value="inverse" checked={encodingTypes.inverse} onChange={checkboxChange}/>
            <Checkbox label="Ascii" value="ascii" checked={encodingTypes.ascii} onChange={checkboxChange}/>
            <Checkbox label="Binary" value="binary" checked={encodingTypes.binary} onChange={checkboxChange}/>
          </InputCheckbox>

          {/* Muestra un mensaje informativo */}
          <InformativeMessage message="turn on all three options to use extreme encryption"/>

          <ButtonsContainer>
            {/* Usa el componente Button para iniciar la encriptación/desencriptación */}
            <Button label="Start!" onClick={btnClick}/>
            {/* Usa el componente CopyToClipboard para copiar el resultado */}
            <CopyToClipboard text={result}>
              {/* Usa el componente CopyButton para mostrar el botón de copiar */}
              <CopyButton label="Copy Message" onClick={useCopyNotification}/>
            </CopyToClipboard>
          </ButtonsContainer>
        </InputsContainer>

        <MessageContainer>
          {/* Muestra un componente de carga o el resultado en función del estado de carga */}
          {
            loading ? <MessageLoading title={encryptionMode}/> : <Message message={result} />
          }
        </MessageContainer>

        {/* Muestra notificaciones */}
        <Toaster />
    </Container>
  );
}

export default App;
