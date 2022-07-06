import styled from "styled-components"

function Input({
    type,
    placeholder,
    value,
    functionOnChange,
    id,
    autocomplete,
    children
}) {
    return (
        <Form>
            <InputStyle
                type={type}
                placeholder={placeholder}
                id={id}
                required
                value={value}
                onChange={functionOnChange}
                autocomplete={autocomplete}
            />
            <LabelStyle
                htmlFor={id}
            >
                {children}
            </LabelStyle>
        </Form>
    )
}

const Form = styled.div` 
    position: relative;
    /* margin-top: 200px; */
    max-width: 472px;
    width: 100%; 
    height: 48px;
`

const InputStyle = styled.input` 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #565c69;
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    padding: 10px;
    background: none;

    :hover {
    }

    :focus {
        border-color: #f26532;
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
    color: red;
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