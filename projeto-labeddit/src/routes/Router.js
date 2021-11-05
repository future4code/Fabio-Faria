import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/LoginPage/Login";
import Signup from "../pages/SignupPage/Signup";
import FeedPage from "../pages/FeedPage/FeedPage";
import PostPage from "../pages/PostPage/PostPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/feed" component={FeedPage} />
        <Route exact path="/posts/:post/comments" component={PostPage} />
        <Route exact path="/" component={FeedPage} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
