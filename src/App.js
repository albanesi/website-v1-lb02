import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import PersonalPage from './components/pages/PersonalPage';
import BlogDetails from './components/pages/BlogDetails';

function App() {
  return (
    <>
    {/*The Router of the App}*/}
      <Router>
        {/*Navbar of each Site*/}
        <Navbar />
        {/*The Switch where every link is in*/}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/personal' component={SignUp}/>
          <Route path='/profile' component={PersonalPage}/>
          <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
