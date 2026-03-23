import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md border w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Create User ID"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create Password"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-2 mb-6 rounded"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          className="w-full bg-green-600 text-white py-2 rounded"
          onClick={() => {
            if (!id || !password || !confirmPassword) {
              alert("Please fill all fields");
              return;
            }

            if (password !== confirmPassword) {
              alert("Passwords do not match");
              return;
            }

            // for now just allow signup
            navigate("/main");
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}