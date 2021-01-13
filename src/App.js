import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      {/* 전역 스타일 지정 */}
      <GlobalStyle />

      {/* UI */}
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
