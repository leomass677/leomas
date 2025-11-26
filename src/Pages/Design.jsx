import React, { useState, useEffect } from "react";

const Design = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dogapi.dog/api/v2/breeds");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBreeds(data.data);
        setPagination(data.meta || {});
      } catch (err) {
        setError(err.message);
        console.error("Error fetching dog breeds:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-lg">Loading dog breeds...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dog Breeds Information</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {breeds.slice(0, 12).map((breed) => (
          <div
            key={breed.id}
            className="flex flex-col gap-3 border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {breed.attributes.name}
            </h3>

            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <strong>Description:</strong> {breed.attributes.description}
              </p>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  <strong>Life Span:</strong> {breed.attributes.life.min}-
                  {breed.attributes.life.max} years
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  <strong>Male Weight:</strong>{" "}
                  {breed.attributes.male_weight.min}-
                  {breed.attributes.male_weight.max} kg
                </span>
                <span className="text-gray-600">
                  <strong>Female Weight:</strong>{" "}
                  {breed.attributes.female_weight.min}-
                  {breed.attributes.female_weight.max} kg
                </span>
              </div>

              <p className="text-sm">
                <strong>Hypoallergenic:</strong>
                <span
                  className={
                    breed.attributes.hypoallergenic
                      ? "text-green-600 ml-2"
                      : "text-red-600 ml-2"
                  }
                >
                  {breed.attributes.hypoallergenic ? "Yes" : "No"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Add pagination if the API supports it */}
      {pagination && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Previous
          </button>
          <span className="px-4 py-2">Page {currentPage}</span>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Design;
