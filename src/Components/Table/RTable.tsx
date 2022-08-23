import { Divider, Slider, Table, Typography } from "antd"
import styled from "styled-components"
import { FC, useState } from "react"
import "./RTable.less"

interface props {
    data: object[]
}

const RTable: FC<props> = ({ data }) => {
    const Name = styled.div`
        background: #2cc185;
        display: flex;
        justify-content: center;
        padding: 2px;
        border-radius: 5px;
        cursor: pointer;
        transition: color ease-in 0.2s, background-color ease-in 0.2s;
        &:hover {
            color: #fff;
            background: #fe6d73;
        }
    `
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text: any) => <Name>{text}</Name>,
        },
        {
            title: "User Name",
            dataIndex: "username",
            key: "UserName",
        },

        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Website",
            dataIndex: "website",
            key: "website",
        },
    ]
    const [rows, setRows] = useState(5)
    const test = (item: any) => {
        alert("Name:" + " " + item.name)
    }
    return (
        <>
            <Typography.Paragraph>Я меняю количество строк в таблице</Typography.Paragraph>
            <Slider
                max={5}
                min={1}
                defaultValue={rows}
                onChange={setRows}
                trackStyle={{ background: "#227c9d", height: "7px" }}
                handleStyle={{ background: "#fe6d73", height: "15px", width: "15px" }}
            />
            <Divider />
            <Table
                columns={columns}
                dataSource={data}
                rowKey="id"
                pagination={{ pageSize: rows }}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: () => {
                            test(record)
                        }, // click row
                    }
                }}
            />
        </>
    )
}
export default RTable
