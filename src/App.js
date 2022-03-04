import "./App.css";
import { Routes, Route, NavLink} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";
import NotFound from "./components/NotFound";

// import User from "./components/User";

function App() {
  let activeStyle = {
    backgroundColor: "blue",
    color: "white"
  };

  let activeClassName = "underline"
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>About</NavLink>
          </li>
          <li>
            <NavLink to="/users" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Users</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="/" element={<User />}>
          <Route path="user/:id" element={<User />} />
        </Route>
        <Route path="*" element={<NotFound />} />

         

        {/* <Route path="user/:id" element={<User />} /> */}
      </Routes>
    </div>
  );
}

export default App;
