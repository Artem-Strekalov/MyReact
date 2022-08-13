import { useForm } from "react-hook-form"
import styled from "styled-components"
const Content = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    background: #fef9ef;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
`
const Form = styled.form`
    padding: 20px;
    width: 400px;
    margin: auto;
    box-sizing: border-box;
`
const WrapperInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
const Input = styled.input`
    width: 100%;
    outline: none;
    height: 50px;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    padding: 5px 10px;
`
const Label = styled.label`
    color: #999;
    font-size: 12px;
    margin-bottom: 3px;
`
const Error = styled.div`
    font-size: 12px;
    color: #fe6d73;
    margin-top: 2px;
`
const Btn = styled.button`
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
const Forms = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }
    return (
        <Content>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <WrapperInput>
                    <Label>Name</Label>
                    <Input
                        {...register("firstName", {
                            required: "Поле обязательно для заполнения",
                            minLength: {
                                value: 5,
                                message: "Минимум 5 символов",
                            },
                        })}
                    />
                    <Error>{errors?.firstName?.message}</Error>
                </WrapperInput>

                <WrapperInput>
                    <Label>Email</Label>
                    <Input
                        {...register("email", {
                            required: "Поле обязательно для заполнения",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Неверный формат email",
                            },
                        })}
                    />
                    <Error>{errors?.email?.message}</Error>
                </WrapperInput>

                <WrapperInput>
                    <Label>Phone</Label>
                    <Input />
                    <Error></Error>
                </WrapperInput>

                <WrapperInput>
                    <Label>Password</Label>
                    <Input />
                    <Error></Error>
                </WrapperInput>

                <WrapperInput>
                    <Label>Password repeat</Label>
                    <Input />
                    <Error></Error>
                </WrapperInput>

                <Btn type="submit">Отправить</Btn>
            </Form>
        </Content>
    )
}
export default Forms
