import { Fragment } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import NestedRoute from "../components/NestedRoute";
import RouteP2Page from "./RouteP2Page";

const RouteP1Page = () => {
  const { url, path } = useRouteMatch();
  return (
    <Fragment>
      <h1>Page 1</h1>
      {/* <Route path={`${path}/test`} component={RouteP2Page}></Route> */}
      <NestedRoute path="/test" component={RouteP2Page}></NestedRoute>
    </Fragment>
  );
};
export default RouteP1Page;
