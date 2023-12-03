import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import Trends from './components/pages/Trends';
import Search from './components/pages/SearchBar';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import UserHome from './components/pages/UserHome';
import SearchResultsList from './components/pages/SearchResultsList';
import 'bootstrap/dist/css/bootstrap.min.css';

 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trends" element={<Trends />} />
                <Route path="/Search" element={<Search />}/>
                <Route path="/sign-up" element={<Signup />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/results" element={<SearchResultsList/>}/>
                <Route path="/user-homepage" element={<UserHome/>}/>
            </Routes>
        </Router>
    );
}
 
export default App;