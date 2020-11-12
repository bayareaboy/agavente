import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import ScrollIntoView from "./ScrollIntoView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// pages
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import AccountRecover from "./components/pages/AccountRecover";

// Private Routes
import PrivateRoute from "./components/routing/PrivateRoute";
import Dashboard from "./components/pages/private/Dashboard";
import D from "./components/pages/private/D";
import Questions from "./components/pages/private/services/questions/pages/Questions";
import Exercise from './components/pages/private/services/exercises/Excercise'

// Exercises
import LowerBack from './components/pages/private/services/exercises/layout/LowerBack'
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import AskQuestion from "./components/pages/private/services/questions/pages/AskQuestion";
import Privacy from "./components/pages/Privacy";
import Contact from "./components/pages/Contact";
import Thanks from "./components/pages/Thanks";

if(localStorage.token){
  setAuthToken(localStorage.token)
}


const App = () => {

  useEffect(()=> {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <ScrollIntoView>
            <Header />
            <Route exact path="/" component={Landing} />
          
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/account-recover" component={AccountRecover} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/test" component={D} />
              <PrivateRoute exact path="/private-my-exercices" component={Exercise} />
              {
                //<PrivateRoute exact path="/d" component={D} />
              }
              <PrivateRoute exact path="/excercises-lower-back-pain" component={LowerBack} />
              <PrivateRoute exact path="/ask-question" component={AskQuestion} />
              <Route exact path="/questions" component={Questions} />
              <Route exact path="/privacy-policy" component={Privacy} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/thankyou" component={Thanks} />
              
            </Switch>
            <Footer />
          </ScrollIntoView>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
