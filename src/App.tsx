import styled from "styled-components"
import Todo from "./Components/Todo/Todo"
import GlobalStyle from "./globalStyle"
const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #f1f1f1;
    display: flex;
`
const App = () => {
    return (
        <>
            <Wrapper>
                <Todo />
            </Wrapper>
            <GlobalStyle />
        </>
    )
}

export default App
