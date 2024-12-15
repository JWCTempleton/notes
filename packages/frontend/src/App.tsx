import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Routes from "./Routes.tsx";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3 px-3">
        <Nav.Link>
          <Link to="/">
            <Navbar.Brand className="fw-bold text-muted">Scratch</Navbar.Brand>
          </Link>
        </Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <Nav.Link>
              <Link to="/signup">Signup</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
