import { MagnifyingGlass } from "phosphor-react";
import { ButtonForm, SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações" />

            <ButtonForm type="submit">
                Buscar
                <MagnifyingGlass size={20}/>
            </ButtonForm>
        </SearchFormContainer>
    )
}