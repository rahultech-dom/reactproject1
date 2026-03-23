import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // ✅ hooks INSIDE function
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md border w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="text"
          placeholder="Enter User ID"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white py-2 rounded"
          onClick={() => {
            if (!id || !password) {
              alert("Please fill all fields");
              return;
            }

            // for now just allow login
            navigate("/main");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}