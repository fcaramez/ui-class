import { Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./pages/UserDetails";
import LandingPage from "./pages/LandingPage";
import { Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Stack h="100vh">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<UserDetails />} />
      </Routes>
    </Stack>
  );
}

export default App;
