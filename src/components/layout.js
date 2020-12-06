import * as React from "react";
import styled from "styled-components";

const Main = styled.main`
  background-color: blanchedalmond;
  color: #232129;
  padding: 96px;
`;

const Layout = ({ children }) => <Main>{children}</Main>;

export default Layout;
