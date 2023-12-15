import { ButtonContainer, ButtonVariant } from "./button.styles";

interface ButtonProps {
    variant?: ButtonVariant
    // ? no color para colocar essa props como opcional... 
    // para nao precisar passar o color em todos os botoes
}

export function Button({variant = 'primary'} : ButtonProps) {
    return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}