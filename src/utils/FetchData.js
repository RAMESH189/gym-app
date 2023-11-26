export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
		'X-RapidAPI-Host': process.env.REACT_APP_YOUTUBE_API_HOST
	}
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = response.json()
    return data;
}