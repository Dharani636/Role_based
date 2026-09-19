import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function AdminDashboard() {

  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <p>Welcome Admin</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}