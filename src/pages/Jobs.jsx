import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../components/api'; 

const Jobs = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const response = await fetchJobs();
        setJobListings(response.results);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      }
    };

    fetchJobListings();
  }, []);

  const limitText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      // Truncate text and add "..."
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="grid m-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {jobListings.map((job) => (
        <div key={job.id} className="group flex flex-col justify-between min-h-40 max-h-[150rem]   p-4 border rounded-lg shadow-md bg-white transition-colors duration-300 hover:bg-blue-500 hover:text-white">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{job.name}</h2>
            <p className="text-gray-600 text-xl font-bold mb-4 group-hover:text-white">{job.company.name}</p>
            <br />
            <div
                        className="text-gray-800 group-hover:text-white"
                        dangerouslySetInnerHTML={{ __html: limitText(job.contents, 30) }}
                    />
           
          </div>
          <button
  onClick={() => {
    const url = job.refs.landing_page; // Use optional chaining for safety 
      window.open(url, '_blank', 'noopener,noreferrer'); // Include security attributes
  }
}
  className="mt-4 bg-blue-500 hover:bg-red-500 hover:text-white text-white font-bold py-2 px-4 rounded transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white"
>
  Apply Now
</button>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
