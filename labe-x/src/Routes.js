import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ApplicationForm from "./pages/ApplicationForm";
import ListTripsPage from "./pages/ListTripsPage";
import AdminHomePage from "./pages/AdminHomePage";
import TripDetailsPage from "./pages/TripDetailsPage";
import CreateTripPage from "./pages/CreateTripPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/applicationForm" component={ApplicationForm} />
        <Route path="/LoginPage" component={LoginPage} />
        <Route path="/ListTripsPage" component={ListTripsPage} />
        <Route path="/AdminHomePage" component={AdminHomePage} />
        <Route path="/Details/:id" component={TripDetailsPage} />
        <Route path="/CreateTrip" component={CreateTripPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
