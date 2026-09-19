import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function StudentDashboard() {

  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div>
      <h1>Student Dashboard</h1>

      <p>Welcome Student</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}