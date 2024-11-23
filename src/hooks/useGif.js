
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const API_KEY = 'yRlCXpmxFPoKqjqsRRmJYvlUudtnpu23';
const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;


const useGif = (tag) => {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData(tag) {
        setLoading(true);
        try {
            const { data } = await axios.get(tag ? `${randomMemeUrl}&tag=${tag}` : randomMemeUrl);
            const imageUrl = data.data.images.downsized_large.url;
            setGif(imageUrl);
            console.log(data);
        } catch (error) {
            console.error('Error fetching the data', error);
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return {gif,loading,fetchData}
}

export default useGif
