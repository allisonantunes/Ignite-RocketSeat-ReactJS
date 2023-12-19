import styled, {css} from "styled-components";

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

        background-color: ${props => props.theme.primary};

/*     ${props => {
        return css`
        background-color: ${ButtonVariants[props.variant]}
        `
    }} */
`