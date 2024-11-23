import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_KEY = 'yRlCXpmxFPoKqjqsRRmJYvlUudtnpu23';

const Random = () => {
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    //     try {
    //         const { data } = await axios.get(url);
    //         const imageUrl = data.data.images.downsized_large.url;
    //         setGif(imageUrl);
    //         console.log(data);
    //     } catch (error) {
    //         console.error('Error fetching the data', error);
    //     }
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    function clickHandler() {
        fetchData();
    }
    const {gif,loading,fetchData}=useGif();

    return (
        <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-5 mt-[15px]">
            <h1 className="mt-[15px] text-2xl underline font-bold">A RANDOM GIF</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} alt="Random GIF" width={450} />)
            }
            <button onClick={clickHandler} className="w-10/12 bg-[#EDFCF3] text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>
        </div>
    );
}

export default Random;
