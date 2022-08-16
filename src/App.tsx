import { Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import GlobalStyle from "./globalStyle"
import Form from "./Pages/Form"
import TodoPage from "./Pages/TodoPage"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="forms" element={<Form />} />
                    <Route path="todo" element={<TodoPage />} />
                </Route>
            </Routes>

            <GlobalStyle />
        </>
    )
}

export default App
