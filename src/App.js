import { Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<UserList />}
        />
        <Route
          path="/user/:userId"
          element={<UserDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
