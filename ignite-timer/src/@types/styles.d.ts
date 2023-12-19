// esse arquivo usa para quando for usar os themas de variavel, aparecer onde esta usando. ctrl + espaço
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

// guardando o defaulttheme no themeType.
type ThemeType = typeof defaultTheme;

// tipagem no styled components
declare module 'styled-components' {
    export interface defaultTheme extends ThemeType {}
}
