import { useState } from "react";
import { vehicles } from "../data/vehicles";

export default function Main() {
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");
  const [need, setNeed] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredVehicles = vehicles.filter((vehicle) => {
      return (
        vehicle.type === type &&
        vehicle.price <= Number(budget) &&
        vehicle.need === need
      );
    });

    setResults(filteredVehicles.slice(0, 5));
  };

  return (
    <div className="min-h-screen  bg-[#3C4323] p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        SearchVehicle
      </h1>

      <div className="max-w-3xl mx-auto bg-[#CCD5AE] shadow-md rounded-xl p-8 border-2 border-gray-200">
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-lg font-semibold mb-2">
              Select Vehicle Type
            </label>
            <select
              className="w-full border p-3 rounded-lg"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">
              Enter Your Budget
            </label>
            <input
              type="number"
              placeholder="Enter budget"
              className="w-full border p-3 rounded-lg"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">
              Select Your Need
            </label>
            <select
              className="w-full border p-3 rounded-lg"
              value={need}
              onChange={(e) => setNeed(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Daily Use">Daily Use</option>
              <option value="Family">Family</option>
              <option value="Performance">Performance</option>
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold"
          >
            Search
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Top Results</h2>

        {results.length === 0 ? (
          <p className="text-gray-600">No vehicles found yet.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {results.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-sm"
              >
                <h3 className="text-xl font-bold text-blue-600">
                  {vehicle.name}
                </h3>
                <p className="mt-2">Type: {vehicle.type}</p>
                <p>Price: ₹{vehicle.price}</p>
                <p>Best For: {vehicle.need}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}