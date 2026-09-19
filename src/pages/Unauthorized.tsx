import { useNavigate } from "react-router-dom";

export default function Unauthorized() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Access Denied</h1>

      <p>
        You don't have permission to access this page.
      </p>

      <button onClick={() => navigate("/login")}>
        Go to Login
      </button>
    </div>
  );
}