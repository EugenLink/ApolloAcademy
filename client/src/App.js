import React from 'react';
import '../node_modules/normalize.css/normalize.css'
import './App.css';
import AppHeader from "./Components/AppHeader/AppHeader";
import MainPage from "./Components/MainPage/MainPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import TeacherPage from "./Components/TeacherPage/TeacherPage";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import LoginPage from "./Components/Auth/LoginPage/LoginPage";
import RegisterPage from "./Components/Auth/RegisterPage/RegisterPage";

const App = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <div className="app-wrapper">
                  <AppHeader />
                  <ErrorBoundary >
                      <div className="app-body">
                          <Switch>
                              <Route path='/' exact component={MainPage}/>
                              <Route path='/teachers' component={TeacherPage}/>
                              <Route path='/auth/register' component={RegisterPage}/>
                              <Route path='/auth/login' component={LoginPage}/>
                              <Route render={() => <h1 className='not-found'><span>404</span> Page Not Found</h1>} />
                          </Switch>
                      </div>
                  </ErrorBoundary>
              </div>
          </div>
      </BrowserRouter>

  );
}



export default App;
