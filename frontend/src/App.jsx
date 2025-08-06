import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import About from "./components/About";
import ChatArea from "./components/ChatArea";
import ProtectedRoute from "./components/auth/ProtectedRoute";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/chatarea" element={
                        <ProtectedRoute>
                            <ChatArea />
                        </ProtectedRoute>
                    }/>
      
      </Routes>
    </BrowserRouter>
   </>
  );
}