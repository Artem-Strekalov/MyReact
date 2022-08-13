import styled from "styled-components"
import Forms from "./Components/Forms/Forms"
import Todo from "./Components/Todo/Todo"
import GlobalStyle from "./globalStyle"
const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #fef9ef;
    display: flex;
    flex-direction: column;
`
const Header = styled.div`
    width: 100%;
    height: 80px;
    background: #227c9d;
    padding: 0 30px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
`
const App = () => {
    return (
        <>
            <Wrapper>
                <Header>
                    <Logo>My skills</Logo>
                </Header>
                {/*    <Todo /> */}
                <Forms />
            </Wrapper>
            <GlobalStyle />
        </>
    )
}

export default App
