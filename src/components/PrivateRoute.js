import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  useEffect(() => {
    if (!getEmail && !getPassword) {
      navigate("/login");
    }
  }, [getEmail, getPassword, navigate]);

  return children;
}
