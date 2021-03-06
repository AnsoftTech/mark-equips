import {
  BrowserRouter,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";
import Login from "./Pages/Login";
import Collaborator from "./Pages/Collaborator";
import Schedule from "./Pages/Schedule";
import Equipment from "./Pages/Equipments";
import Home from "./Pages/Home";
import { IsAuthenticated } from "./auth"
import { useEffect, useState } from "react";
import LoadingPage from "./Components/Loading";
import Reservations from "./Pages/Reservations";

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
}
const PrivateRoute = (props: PrivateRouteProps) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        const result = await IsAuthenticated();
        setIsAuthenticated(result);
        setLoading(false);
    };
    fetchData();
}, [isAuthenticated]);

  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(RouteProps) => 
        isAuthenticated? (
          <Component {...props} />
        ) : loading ? (
          <LoadingPage/>
        ) : (
          <Redirect to={{ pathname: "/", state: { from: RouteProps.location } }} />
        )
      }/>
  );
};


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <PrivateRoute path="/inicio" exact component={Home}/>
        <PrivateRoute path="/colaboradores" exact component={Collaborator} />
        <PrivateRoute path="/equipamentos"  exact component={Equipment}/>
        <PrivateRoute path="/horarios" exact component={Schedule}/>
        <PrivateRoute path="/reservas" exact component={Reservations}/>
      </Switch>
    </BrowserRouter>
  );
}
