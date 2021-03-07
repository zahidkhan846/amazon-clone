import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Auth/Login";
import Payment from "./components/Payment/Payment";
import CreateAccount from "./components/Auth/CreateAccount";
import { useAuth } from "./context/AuthContext";
import { useUserData } from "./context/UserContext";

function App() {
  const { currentUser } = useAuth();
  const { getUserData } = useUserData();

  useEffect(() => {
    if (currentUser) {
      getUserData(currentUser.uid);
    }
  }, [currentUser]);

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Header /> <HomePage />
            </>
          )}
        />
        <Route path="/login" component={Login} />
        <Route
          path="/payment"
          render={() => (
            <>
              <Header />
              <Payment />
            </>
          )}
        />
        <Route path="/signup" component={CreateAccount} />
        <Route
          path="/checkout"
          render={() => (
            <>
              <Header /> <Checkout />
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
