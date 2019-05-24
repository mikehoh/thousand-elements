import React from 'react';

const TextareaField = ({data}) => {
  return (
    <div>
      <h3>Textarea component { data.id }</h3>
      <textarea value={ data.value } onChange={ () => null }></textarea>
    </div>
  );

}

export default TextareaField;