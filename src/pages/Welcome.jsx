import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  const handleExit = () => {
    window.close();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#CCD5AE] gap-20">
      <h1 className="text-8xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Welcome to SearchVehicle
      </h1> 
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-2 bg-green-600 text-white rounded-xl"
        >
          Sign Up
        </button>

        <button
          onClick={handleExit}
          className="px-6 py-2 bg-red-600 text-white rounded-xl"
        >
          Exit
        </button>
      </div>
    </div>
  );
}