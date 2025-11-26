import { th } from "framer-motion/client";
import { useState, useEffect } from "react";

const About = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.artic.edu/api/v1/artworks");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setArtworks(data.data);
        setPagination(data.pagination);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching artworks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  const fetching = async () => {
    const res = await fetch("");
    if (!res.ok) {
      throw new Error(`Could not fetch data from ${res.status}`);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-lg">Loading artworks...</div>
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
      <h2 className="text-2xl font-bold mb-6">
        Art Institute of Chicago - Artworks
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="flex flex-col gap-3 border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            {artwork.thumbnail && (
              <img
                src={artwork.thumbnail.lqip}
                alt={artwork.thumbnail.alt_text || artwork.title}
                className="h-64 w-full object-cover rounded-md"
              />
            )}
            <h4 className="text-lg font-semibold line-clamp-2">
              {artwork.title}
            </h4>
            <p className="text-sm text-gray-600">{artwork.artist_display}</p>
            <p className="text-sm text-gray-500">{artwork.date_display}</p>
            {artwork.description && (
              <div
                className="text-sm text-gray-700 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: artwork.description }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {pagination.total_pages}
        </span>
        <button
          disabled={!pagination.next_url}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default About;
