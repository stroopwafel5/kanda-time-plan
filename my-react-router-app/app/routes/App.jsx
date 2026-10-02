import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router";
import "./app.css";
import Create from "./crud/Create.jsx";
import Home from "./crud/Home.jsx";


function App() {
    return (
      <div className="crud">
        <h3>CRUD App</h3>

            <Router>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                    
                </Routes>
            </Router>

       
        </div>
    );
}

export default App
