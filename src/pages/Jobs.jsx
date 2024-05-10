import React, {useEffect,useState} from 'react';
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
        return words.slice(0, limit).join(' ');
    };

    return (
        <div className="grid m-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {jobListings.map(job => (
                <div key={job.id} className="group relative min-h-96 p-4 border rounded-lg shadow-md bg-white transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                    <h2 className="text-xl font-semibold mb-2">{job.name}</h2>
                    <p className="text-gray-600 mb-4 group-hover:text-white">{job.company.name}</p>
                    {/* <p className="text-gray-800 group-hover:text-white">{limitText(job.contents, 30)}....... </p> */}
                    <div
                        className="text-gray-800 group-hover:text-white"
                        dangerouslySetInnerHTML={{ __html: limitText(job.contents, 30) }}
                    >
                    </div>
                    <button className="mt-4 absolute bottom-2 left-2 bg-blue-500 hover:bg-red-500 hover:text-white text-white font-bold py-2 px-4 rounded transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
                        Apply Now
                    </button>
                </div>
            ))}
        </div>




//         <div className="grid m-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            
//             <div className="group p-4 border rounded-lg shadow-md bg-white transition-colors duration-300 hover:bg-blue-500 hover:text-white">
//     <h2 className="text-xl font-semibold mb-2">Role</h2>
//     <p className="text-gray-600 mb-4 group-hover:text-white">Company</p>
//     <p className="text-gray-800 group-hover:text-white">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos veritatis quae enim temporibus dolore, ratione consequatur numquam praesentium consequuntur quos accusantium? Minima eius vero voluptas atque eligendi at ex.</p>
//     <button className="mt-4 bg-blue-500 hover:bg-red-500 hover:text-white text-white font-bold py-2 px-4 rounded transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
//         Apply Now
//     </button>
// </div>

        
//         </div>
    );
};

export default Jobs;