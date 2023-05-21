import React from "react";
import { GlobalStyle } from "./components/globalstyle";
import Header from "./components/header";
import Example from "./components/example";
import Album from "./components/album";

// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Example/>
      <Album/>
    </>
  );
  
}

export default App;