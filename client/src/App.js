import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import NewRecipe from "./components/newRecipe";
import RecipeId from "./components/recipeID";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/recipe" component={NewRecipe} />
          <Route exact path="/recipes/:id" component={RecipeId} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
