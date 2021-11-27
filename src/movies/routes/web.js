import React, {lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Skeleton } from "antd";
import { helper } from '../helpers/common';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    let auth = helper.checkUserLogged();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

function RouteUserIsLogged({children, ...rest}) {
    let auth = helper.checkUserLogged();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            <Redirect
            to={{
              pathname: "/popular-movie",
              state: { from: location }
            }}
          />
          ) : (
            children
          )
        }
      />
    );
}

const PopularPage  = lazy(() => import('../pages/popular/index'));
const UpcomingPage = lazy(() =>  import('../pages/upcoming/index'));
const SearchPage = lazy(() => import('../pages/search/index'));
const DetailMovie = lazy(() => import('../pages/detail/index'));
const LoginMovies = lazy(() => import ('../pages/Login/index'));
const ProfileUser = lazy(() => import ('../pages/user/index'));
const RouteMovie = () => {
    return (
        <Router>
            <Suspense fallback={<Skeleton/>}>
                <Switch>
                    <PrivateRoute path="/" exact>
                        <PopularPage/>
                    </PrivateRoute>
                    <PrivateRoute path="/popular-movie">
                        <PopularPage/>
                    </PrivateRoute>
                    <PrivateRoute path="/upcoming-movie">
                        <UpcomingPage/>
                    </PrivateRoute>
                    <PrivateRoute path="/search-movie">
                        <SearchPage/>
                    </PrivateRoute>
                    {/* /detail/nguoi-phan-xu~1*/}
                    <PrivateRoute path="/:slug~:id">
                        <DetailMovie />
                    </PrivateRoute>
                    <PrivateRoute path="/profile-user">
                        <ProfileUser/>
                    </PrivateRoute>
                    <RouteUserIsLogged path="/login">
                        <LoginMovies/>
                    </RouteUserIsLogged>
                </Switch>
            </Suspense>
        </Router>
        
    )
}
export default React.memo(RouteMovie);