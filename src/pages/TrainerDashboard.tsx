import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function TrainerDashboard() {

  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div>
      <h1>Trainer Dashboard</h1>

      <p>Welcome Trainer</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}