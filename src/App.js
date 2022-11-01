import "./App.css";
import Sidenav from "./Sidenav/Sidenav";
import Pagination from "./Component/Pagination";
import Headnav from "./Headnav/Headnav";
import SearchBar from "./SearchBar/SearchBar";
import Table from "./Table/Table";
import styled from "styled-components";
import TableTab from "./Component/TableTab";

const MainContent = styled.div`
  display: flex;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  box-sizing:border-box;
  padding: 0 16px ;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
`;
const Tabs = styled.div`
  display:flex;
  border-bottom: 2px solid #CCCCCC;
  margin-bottom:20px;
`
function App() {
  return (
    <MainContent className="App">
      <Sidenav />
      <Content>
        <Headnav />
        <SearchBar />
        <Tabs>
          <TableTab>All orders</TableTab>
          <TableTab>Pickups</TableTab>
          <TableTab>Returns</TableTab>
        </Tabs>
        <Pagination />
        <Table />
        <Pagination />
      </Content>
    </MainContent>
  );
}

export default App;
