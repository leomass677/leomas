import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

const Contact = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchBreeds = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch("https://dogapi.dog/api/v2/breeds");

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       setBreeds(data.data);
  //       setPagination(data.meta || {});
  //     } catch (err) {
  //       setError(err.message);
  //       console.error("Error fetching dog breeds:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dogapi.dog/api/v2/breeds");
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }
        const data = await response.json();
        setApiData(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(apiData.type);

  return (
    <div>
      <h3>Dog API</h3>
      <div className="grid grid-cols-4 gap-5 py-8">
        {apiData.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="border-1 border-gray-50 shadow-md rounded-2xl p-4 "
          >
            <h2 className="text-xl font-semibold">{item.attributes.name}</h2>
            <p>{item.type}</p>
            <p>{item.description}</p>
            <div>
              <p>life</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
