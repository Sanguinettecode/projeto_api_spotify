import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body, input, button {
  font: 14px Roboto, sans-serif;
}

html,body,#root {
height: auto;
 min-height: 100%;
}
#root>div{
  height: 100%
}
button {
  cursor: pointer;
}
body {
  -webkit-font-smoothing: antialiased !important;
  background: #f7f7f7;
}
`;
