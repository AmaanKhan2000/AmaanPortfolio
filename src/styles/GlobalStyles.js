import { createGlobalStyle } from "styled-components";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      background-color: #fff;
      font-family: serif;
      scroll-behavior: smooth;
   }

   ::-webkit-scrollbar {
      width: 5px;
   }

   ::-webkit-scrollbar-track {
      background: #f1f1f1; 
   }
   
   ::-webkit-scrollbar-thumb {
      background: #9d9d9d;
      border-radius: 50px;
   }

   ::-webkit-scrollbar-thumb:hover {
      background: #8D8D8D; 
   }
`;

export default GlobalStyles;
