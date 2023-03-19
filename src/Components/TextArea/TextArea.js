import React from 'react';
import { TextMessage } from './styled';

const TextArea = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return(
    <TextMessage onChange={handleChange}></TextMessage>
  );
};

export { TextArea };