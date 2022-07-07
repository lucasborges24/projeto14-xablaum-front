import styled from "styled-components"
import { useState } from "react"

function Input({
    type,
    placeholder,
    value,
    functionOnChange,
    id,
    autocomplete,
    children,
    errorMessage,
    pattern
}) {

    const [focused, setFocused] = useState(false)

    return (
        <>
            <Form focused={focused}>
                <InputStyle
                    type={type}
                    placeholder={placeholder}
                    id={id}
                    required
                    value={value}
                    onChange={functionOnChange}
                    onBlur={() => setFocused(true)}
                    autocomplete={autocomplete}
                    pattern={pattern}
                />
                <LabelStyle
                    htmlFor={id}
                >
                    {children}
                </LabelStyle>
                {errorMessage}
            </Form>
        </>
    )
}

const Form = styled.div` 
    position: relative;
    /* margin-top: 200px; */
    max-width: 472px;
    width: 100%;
    min-height: 48px;
    height: 100%;
    margin: 10px 0;

    p {
        font-size: 16px;
        padding: 3px;
        margin-top: 50px;
        color: rgb(231, 38, 38);
        display: none;
    }

    input:invalid ~ p {
        display: ${({ focused }) => focused ? 'block' : 'none'};
    }
`

const InputStyle = styled.input` 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 48px;
    border: 1px solid #565c69;
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    padding: 10px;
    background: none;
    color: rgb(86, 92, 105);
    font-weight: 500;    
    
    ::placeholder {
        color: transparent;
        transition: 50ms ease-out;
    }

    :focus::placeholder {
        color: #8b8b91;
        font-weight: 400;
    }
    :hover {
    }

    :focus {
        border-color: #f26532;
        color: rgb(86, 92, 105);
        font-weight: 500;
    }

    :focus ~ label,
    :not([value=""]) ~ label {
        top: -0.4rem;
        font-size: 0.8rem;
        left: 0.8rem;
        background-color: #ffffff;
    }


`

const LabelStyle = styled.label`
    /* margin-top: 200px; */
    position: absolute;
    top: 1rem;
    left: 1rem;
    padding: 0 0.5rem;
    color: #8b8b91;
    cursor: text;
    transition:top 200ms ease-in,
        left 200ms ease-in,
        font-size 200ms ease-in,
        background-color 200ms ease-in;
`

export {
    Input
}