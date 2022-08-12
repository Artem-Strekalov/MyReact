import styled from "styled-components"

interface Props {
    status: boolean
}

export const Content = styled.div`
    width: 700px;
    height: 500px;
    padding: 20px 50px;
    border: 1px solid black;
    border-radius: 10px;
    margin: auto;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
`
export const Input = styled.input`
    width: 400px;
    height: 50px;
    background: white;
    border-radius: 5px;
    outline: none;
    padding: 10px;
`
export const Form = styled.form`
    display: flex;
    margin: 0 auto;
`
export const Btn = styled.button`
    width: 70px;
    height: 50px;
    background: yellow;
    border-radius: 5px;
    margin-left: 10px;
    outline: none;
    cursor: pointer;
    transition: background-color ease-in 0.2s;
    &:hover {
        background: #bbbbeb;
    }
`
export const List = styled.ul`
    width: 100%;
    padding: 10px;
    height: 100%;
    margin-top: 40px;
    overflow-y: auto;
`
export const Item = styled.li`
    height: 50px;
    width: 100%;
    margin-bottom: 10px;
    background: white;
    list-style-type: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 20px;
`
export const Text = styled.span<Props>`
    color: black;
    font-size: 18px;
    text-decoration: ${({ status }) => (status ? "line-through" : "none")};
`
export const Checkbox = styled.input`
    margin-right: 20px;
`
export const Remove = styled.span`
    margin-left: auto;
    font-size: 12px;
    color: #fff;
    border-radius: 5px;
    padding: 5px;
    background: red;
    cursor: pointer;
    transition: background-color ease-in 0.2s, color ease-in 0.2s;

    &:hover {
        color: #222;
        border: 1px solid red;
        background: #fff;
        padding: 4px;
    }
`
export const Plug = styled.div`
    border-radius: 5px;
    background: #fff;
    padding: 20px;
    margin: auto;
    font-size: 16px;
`
