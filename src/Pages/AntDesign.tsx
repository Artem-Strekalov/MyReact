import RTable from "../Components/Table/RTable"
import { Button, Divider, Table } from "antd"
import styled from "styled-components"
import { FC, useState } from "react"
import axios from "axios"

const Content = styled.div`
    max-width: 1024px;
    width: 100%;
    padding: 50px 0;
`

const AntDesing: FC = () => {
    const [users, setUsers] = useState<object[]>([])
    const getData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response.data)

                setUsers(response.data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <Content>
            <Button type="primary" onClick={() => getData()}>
                Получить данные
            </Button>
            <Divider />
            {(users.length && <RTable data={users} />) || ""}
        </Content>
    )
}

export default AntDesing
