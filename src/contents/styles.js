import { createGlobalStyle } from "styled-components";

/* npm i styles-reset */
import reset from "styles-reset";

// 전역으로 css reset 만들어줄 변수 만들기
export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🎡</text></svg>") 16 0, auto;
  }
  input {
    all: unset;
  }
  button {
    all: unset;
  }
  li {
    list-style: none;
  }
  #root {
    white-space: pre-line;
  }
  body {
    font-family: "NexonLv2Gothic", "Montserrat", "sans-serig
  };
`;
