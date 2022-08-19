import { Btn, Content, Error, Form, Input, ItemResult, Label, Result, WrapperInput } from "./style"
import { useForm } from "react-hook-form"
import { useState } from "react"

const Forms = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ mode: "onChange" })

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        setName("")
        setEmail("")
        setPhone("")
        setPassword("")
        reset()
    }

    return (
        <Content>
            <Form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
                <WrapperInput>
                    <Label>Name</Label>
                    <Input
                        {...register("firstName", {
                            onChange: (e) => setName(e.target.value),
                            required: "Укажите свое имя",
                        })}
                    />
                    <Error>{errors?.firstName?.message}</Error>
                </WrapperInput>

                <WrapperInput>
                    <Label>Email</Label>
                    <Input
                        {...register("email", {
                            required: "Укажите совой email",
                            onChange: (e) => setEmail(e.target.value),
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
                    <Input
                        {...register("phone", {
                            required: "Номер необходим для связи с вами",
                            onChange: (e) => setPhone(e.target.value),
                            pattern: {
                                value: /^\d+$/,
                                message: "Только цифры",
                            },
                            maxLength: {
                                value: 11,
                                message: "Не больше 11 цифр",
                            },
                        })}
                    />
                    <Error>{errors?.phone?.message}</Error>
                </WrapperInput>

                <WrapperInput>
                    <Label>Password</Label>
                    <Input
                        ref={password}
                        type="password"
                        {...register("password", {
                            onChange: (e) => setPassword(e.target.value),
                            required: "Необходимо указать пароль",
                            minLength: {
                                value: 8,
                                message: "Минимум 8 символов",
                            },
                        })}
                    />
                    <Error>{errors?.password?.message}</Error>
                </WrapperInput>

                <WrapperInput>
                    <Label>Password repeat</Label>
                    <Input
                        type="password"
                        {...register("passwordRepeat", {
                            required: "Необходимо повторить пароль",
                            validate: (value) => value === password || "Пароли не совпадают",
                        })}
                    />
                    <Error>{errors?.passwordRepeat?.message}</Error>
                </WrapperInput>

                <Btn type="submit">Отправить</Btn>
            </Form>
            <Result>
                {name && (
                    <ItemResult>
                        Name: &nbsp; <p>{name}</p>
                    </ItemResult>
                )}
                {email && (
                    <ItemResult>
                        Email: &nbsp; <p>{email}</p>
                    </ItemResult>
                )}
                {phone && (
                    <ItemResult>
                        Phone: &nbsp; <p>{phone}</p>
                    </ItemResult>
                )}
                {password && (
                    <ItemResult>
                        Password: &nbsp; <p>{password}</p>
                    </ItemResult>
                )}

                <br />
                <br />
                <br />
                <br />
                <ItemResult>
                    <p>Валидация формы:</p>
                    <br />
                    <br />
                    - react
                    <br />
                    - styled Components
                    <br />- useForm
                </ItemResult>
                <a href="https://github.com/Artem-Strekalov/MyReact/tree/master/src/Components/Forms" target="_blank">
                    Код
                </a>
            </Result>
        </Content>
    )
}
export default Forms
