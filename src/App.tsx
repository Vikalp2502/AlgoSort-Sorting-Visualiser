import * as React from "react";

import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Playground from "./components/Playground";

const AppWrapper = styled.div`
  width:100%;
  height: 100%;
  display: block;
  margin: 0;
  padding: 0;
`;

const App: React.FC = () => (
  <AppWrapper>
    <Sidebar />
    <Playground />
  </AppWrapper>
);

export default App;
