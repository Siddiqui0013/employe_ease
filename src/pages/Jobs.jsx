import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../components/api';
import HashLoader from 'react-spinners/HashLoader'; // Loader component

const Jobs = () => {
  const [jobListings, setJobListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null); 
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetchJobs(currentPage);
        setJobListings(response.results);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      }
    };

    fetchInitialData();
  }, [currentPage]); //

  const handleLoadMore = async () => {
    if (currentPage < totalPages || !totalPages) {
      setIsLoadingMore(true);
      try {
        const nextPageListings = await fetchJobs(currentPage + 1);
        setJobListings([...jobListings, ...nextPageListings.results]); 
      } catch (error) {
        console.error('Error fetching job listings:', error);
      } finally {
        setIsLoadingMore(false); 
      }
    }
  };

//   const limitText = (text, limit) => {
//     const words = text.split(' ');
//     return words.slice(0, limit).join(' ');
//   };
const limitText = (text, limit) => {
    if (!text || !limit) {
      return text; // Handle empty text or zero limit gracefully
    }
  
    const trimmedText = text.trim(); // Remove leading and trailing whitespaces
    const characters = trimmedText.slice(0, limit);
  
    // Check if the last character is a complete word (avoid breaking words)
    if (characters.length < trimmedText.length && characters.slice(-1) !== ' ') {
      const lastSpaceIndex = characters.lastIndexOf(' ');
      return lastSpaceIndex !== -1
        ? characters.slice(0, lastSpaceIndex + 1) + '...'
        : characters + '...'; // Truncate at the last space if possible, otherwise add ellipsis after full characters
    }
  
    // If limit is enough to include full characters, add ellipsis if text is longer
    return characters.length === trimmedText.length && trimmedText.length > limit
      ? characters + '.............'
      : characters;
  };
  
  
  return (
    <>
    <div className="grid m-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {jobListings.map((job) => (
        <div key={job.id} className="group relative min-h-80  p-4 border rounded-lg shadow-md bg-white transition-colors duration-300 hover:bg-blue-500 hover:text-white">
          <h2 className="text-xl font-semibold mb-2">{job.name}</h2>
          <p className="text-gray-600 mb-4 group-hover:text-white">{job.company.name}</p>
          <div
            className="text-gray-800 group-hover:text-white"
            dangerouslySetInnerHTML={{ __html: limitText(job.contents, 80) }}
          />
          <button className="mt-4 absolute bottom-2 left-2 bg-blue-500 hover:bg-red-500 hover:text-white text-white font-bold py-2 px-4 rounded transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
            Apply Now
          </button>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-4">
        {isLoadingMore ? (
          <HashLoader
            color={'#005b96'} // Optional color customization
            loading={isLoadingMore}
            size={150}
            aria-label="Loading Jobs" // Informative aria-label
            data-testid="loader"
            className="absolute top-0 left-0 w-full h-full bg-gray-200 opacity-75 z-50 flex justify-center items-center" // Full-screen positioning

          />
        ) : (
          <button
            onClick={handleLoadMore}
            className="bg-blue-500 hover:bg-red-500 py-4 my-4 hover:text-white text-white font-bold px-4 rounded transition-colors duration-300"
            disabled={isLoadingMore} // Disable button while loading
          >
            Load More Jobs
          </button>
        )}
      </div>
    </>
  );
};

export default Jobs;
