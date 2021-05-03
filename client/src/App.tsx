import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';

import SignIn from './components/SignIn';
import SignUp from './components/SingUp';


function App() {
    return (
        <BrowserRouter>
            
            <div>
                <h1>React Typescript from scratch</h1>
                <Link to="/">Sing In</Link>
                <Link to="/signup">Sing Up</Link>
            </div>
            <Route exact path="/"  component={ SignIn }></Route>
            <Route exact path="/signup"  component={ SignUp }></Route>
            
            <Footer></Footer>
            
        </BrowserRouter>
    );
}

export default App;