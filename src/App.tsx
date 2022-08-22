import { Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import AntDesing from "./Pages/AntDesign"
import GlobalStyle from "./globalStyle"
import TodoPage from "./Pages/TodoPage"
import Form from "./Pages/Form"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="forms" element={<Form />} />
                    <Route path="todo" element={<TodoPage />} />
                    <Route path="antd" element={<AntDesing />} />
                </Route>
            </Routes>
            <GlobalStyle />
        </>
    )
}

export default App
