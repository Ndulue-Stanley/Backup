

import React, { InputHTMLAttributes } from 'react'
import BaseInput from '../Components/Input/index'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;

}

export default function EmailInput({placeholder,type,label}: InputProps) {
  return (
    <div>

      <label htmlFor={label}>
        {label}
      </label>
      <BaseInput placeholder={placeholder} type="text" label="text"/>
    </div>
  )
}