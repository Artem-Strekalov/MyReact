import styled from "styled-components"
export const Content = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    background: #fef9ef;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
`
export const Result = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 5px;
    margin: 20px;
    padding: 20px;
    a {
        text-decoration: none;
        color: #fe6d73;
    }
`
export const ItemResult = styled.p`
    padding: 10px 0;
    display: flex;
    font-size: 14px;
`
export const Form = styled.form`
    padding: 20px;
    width: 400px;
    box-sizing: border-box;
    margin: 20px;
`
export const WrapperInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
export const Input = styled.input`
    width: 100%;
    outline: none;
    height: 50px;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    padding: 5px 10px;
`
export const Label = styled.label`
    color: #999;
    font-size: 12px;
    margin-bottom: 3px;
`
export const Error = styled.div`
    font-size: 12px;
    color: #fe6d73;
    margin-top: 2px;
`
export const Btn = styled.button`
    width: 100%;
    height: 50px;
    background: #fe6d73;
    border-radius: 5px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    border: none;
    transition: background-color ease-in 0.2s, color ease-in 0.2s;
    &:hover {
        color: #fe6d73;
        border: 1px solid #fe6d73;
        background: #fef9ef;
    }
`
