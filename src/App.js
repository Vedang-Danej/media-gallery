import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/Navigation/NavigationBar";
import { Route, Switch } from "react-router-dom";
import Animals from "./Components/Animals/Animals";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/animals" component={Animals} />
        <Route path="/family" render={() => <p>This is family</p>} />
        <Route path="/friends" render={() => <p>This is friends</p>} />
        <Route path="/" render={() => <p>This is Home</p>} />
      </Switch>
    </div>
  );
}

export default App;
