import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme.colors.Dark_300};
  color: ${(props) => props.theme.colors.Dark_900};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
`
