import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...ortherProps }) => (
   <div className='group'>
      <input className='form-input' onChange={handleChange} {...ortherProps} />
      {
         label ? (
            <label
               className={`${ortherProps.value.length ? 'shrink' : '' 
               } form-input-label`}
            >{label}</label>
         ) : null
      }
   </div>
);

export default FormInput;