import React from 'react';

import "./form-input.styles.scss";

const FormInput = ({handleChange, id, label, ...props}) => (
    <div className='form-group group'>
       
        {label ? 
            <label htmlFor={id} className={`${
                props.value.length ? 'shrink' : ''
              } form-input-label`} >
                {label}
            </label>
            : null
        }
        <input className='form-control form-input' id={id} {...props} onChange={handleChange}/>
    </div>
)

export default FormInput;
