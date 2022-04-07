import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Login />} />
        <Route path={process.env.PUBLIC_URL + "/survey"} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
