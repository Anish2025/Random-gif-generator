import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_KEY = 'yRlCXpmxFPoKqjqsRRmJYvlUudtnpu23';

const Tag = () => {
    const [tag, setTag] = useState('car');
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

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
    const{gif,loading,fetchData}=useGif(tag);

    function clickHandler() {
        fetchData();
    }

    return (
        <div className="w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-5 mt-[15px]">
            <h1 className="mt-[15px] text-2xl underline font-bold uppercase">RANDOM {tag} GIF</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} alt="Random GIF" width={450} />)
            }

            <input placeholder="Search GIF here...." className="w-10/12 bg-[#EDFCF3] text-lg py-2 rounded-lg mb-[5px] text-center"
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            />

            <button onClick={clickHandler} className="w-10/12 bg-[#EDFCF3] text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>
        </div>
    );
}

export default Tag;
