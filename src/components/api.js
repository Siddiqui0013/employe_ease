export const fetchJobs = async () => {
    try {
        const response = await fetch('https://www.themuse.com/api/public/jobs?category=Computer%20and%20IT&page=50&descending=ture');
        if (!response.ok) {
            throw new Error('Failed to fetch job listings');
        }
        const data = await response.json();
        console.log(data.results[0].name)
        console.log(data.results[0].company.name)
        console.log(data.results[0].contents)
        return data;
    } catch (error) {
        console.error('Error fetching job listings:', error);
        // throw error;
    }
};
