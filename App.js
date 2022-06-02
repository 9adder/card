import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadWordFB} from "./redux/modules/store";

import WordList from "./CardList";
import WordUpdate from "./ModifyCard";
import WordAdd from "./AddCard";
import NotFound from "./NotFound";
import Header from "./Nav";


function App() {

  const dispatch = useDispatch();

  React.useEffect( () => {
    dispatch(loadWordFB());
  });

  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact>
            <WordList />
          </Route>
          <Route path="/update/:index">
            <WordUpdate />
          </Route>
          <Route path="/add/">
            <WordAdd/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
  // max-width: 100%;
  // height: 100%;
  padding: 0 30px;
  margin-top: 100px;
  // overflow: auto;
`;


export default App;