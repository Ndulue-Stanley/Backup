import { InputHTMLAttributes } from "react"
import styled from "styled-components"


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    type: string;
    label: string;
}
export default function BaseInput({placeholder, type,label}: InputProps){
  return (
    <div>
    
    <Input type={type} placeholder={placeholder}/>

    </div>
   )}


const Input = styled.input`
width: 100%;
padding: 10px 12px;
margin-bottom: 20px;

`