import React, { FC } from "react"
import styled from "styled-components"

interface props {
    children: React.ReactNode
    type?: "submit" | "reset" | "button"
    disabled?: boolean
}

const Button = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    background: #fe6d73;
    cursor: pointer;
    color: #fff;
    transition: color ease-in 0.2s, background-color ease-in 0.2s;
    border-radius: 5px;
    &:hover {
        background: inherit;
        border: 1px solid #fe6d73;
        color: #fe6d73;
    }
    &:disabled{
        background: #f1f1f1;
        
    }
`

const RButton: FC<props> = ({ children, type, disabled }) => {
    return (
        <Button disabled={disabled} type={type}>
            {children}
        </Button>
    )
}
export default RButton
