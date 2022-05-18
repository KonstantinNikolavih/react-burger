import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const RedirectRoute = ({ children }) => {
  const { userProfile } = useSelector(state => state.userProfil);

  return (
    <Route render={({ location }) =>
      userProfile ? children : (<Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    />
  )
}

export default RedirectRoute;
