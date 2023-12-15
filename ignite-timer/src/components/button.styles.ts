import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const ButtonVariants = {
    primary: 'purple',
    secondary: 'blue',
    danger: 'aqua',
    success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
        width: 80px;

    ${props => {
        return `background-color: ${ButtonVariants[props.variant]}`
    }}
`