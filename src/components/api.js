export const fetchJobs = async () => {
    try {
        const response = await fetch('https://www.themuse.com/api/public/jobs?&page=1&descending=ture');
        if (!response.ok) {
            throw new Error('Failed to fetch job listings');
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching job listings:', error);
        // throw error;
    }
};