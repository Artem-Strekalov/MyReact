import { ChangeEvent, useState } from "react"
import { Btn, Checkbox, Content, Form, Input, Item, List, Plug, Remove, Text } from "./style"

const Todo = () => {
    const [tasks, setTasks] = useState([] as any[])
    const [text, setText] = useState("")

    const inputHeandler = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)
    const addTask = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!text) return
        const task = {
            id: Math.random(),
            text: text,
            completed: false,
        }

        const newTasks = [...tasks, task]
        setTasks(newTasks)
        setText("")
    }

    const removeTask = (id: Number) => setTasks(tasks.filter((item) => item.id != id))

    const toggleStatus = (id: Number) => setTasks(tasks.map((task) => (task.id !== id ? task : { ...task, completed: !task.completed })))

    return (
        <>
            <Content>
                <Form onSubmit={addTask}>
                    <Input onChange={inputHeandler} value={text} />
                    <Btn type="submit">Add</Btn>
                </Form>
                <List>
                    {tasks.length ? (
                        tasks.map((item) => {
                            return (
                                <Item key={item.id}>
                                    <Checkbox type="checkbox" checked={item.completed} onChange={() => toggleStatus(item.id)} />
                                    <Text status={item.completed}>{item.text}</Text>
                                    <Remove onClick={() => removeTask(item.id)}>del</Remove>
                                </Item>
                            )
                        })
                    ) : (
                        <Plug>
                            Todo List <br />
                            <br />
                            Стек: React, TypeScript, Styled Components <br />
                            <a target="_blank" href="https://github.com/Artem-Strekalov/MyReact/tree/master/src/Components/Todo">
                                Код
                            </a>
                        </Plug>
                    )}
                </List>
            </Content>
        </>
    )
}
export default Todo
