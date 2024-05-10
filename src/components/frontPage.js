import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FAQ from "./faqPage";
import UserPage from "./userPage";


const FrontPage = () => {
    const [user, setUser] = useState({ loggedIn: false }); 

  return (
    <Router>
      <div className="mera-dabba">
      <h1>Welcome to Front Page</h1>
        <nav>
          <ul>
          <li>
              <Link to="/faqPage">FAQ</Link>
            </li>
            <li>
              <Link to="/userPage">Profile</Link>
            </li>
            {user.loggedIn && (
              <li>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/faqPage" element={<FAQ/>} />
          <Route path="/userPage" element={<UserPage setUser={setUser} />} />        
        </Routes>
      </div>
    </Router>
  );
};

export default FrontPage;