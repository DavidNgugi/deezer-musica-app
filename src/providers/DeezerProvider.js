import React, { useEffect, useState } from 'react';
// import { useQuery } from '@apollo/client';
import DeezerContext from '../contexts/DeezerContext';

import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const DeezerProvider = (props) => {

    const [artist, setArtist] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(false);
    const [artists, setArtistList] = useState([]);

    useEffect(() => setLoading(loading), [loading]);

    useEffect(() => {
        if (!loading && artist) {
            getTopTracks();
            getAlbums();
        }
    }, [loading, artist])

    const errHandler = err => {
        if (err.response && err.response.data) {
            throw err.response.data;
        }
        throw err;
    };

    const searchArtist = async (artist_name) => {
        setLoading(true);
        const res = await axios.get(`/search/${artist_name}`)
            .then(res => res.data)
            .catch(errHandler);

        if (res.data) {
            setArtistList(res.data);
        }
        setLoading(false);
    };

    const getArtist = async (id) => {
        setLoading(true);
        const res = await axios.get(`/artist/${id}`)
            .then(res => res.data)
            .catch(errHandler);

        if (res) {
            setArtist(res);
        }
        setLoading(false);
    }

    const getTopTracks = async () => {
        if (!artist) return;
        const res = await axios.get(`/tracks/${artist.id}`)
            .then(res => res.data)
            .catch(errHandler);

        if (res.data) {
            console.log(res.data)
            const track_data = res.data.sort((a, b) => b.rank - a.rank).slice(0, 5);
            setTracks(track_data);
        }
    }

    const getAlbums = async () => {
        const res = await axios.get(`/albums/${artist.id}`)
            .then(res => res.data)
            .catch(errHandler);

        if (res.data) {
            console.log(res.data)
            const album_data = res.data.sort((a, b) => b.fans - a.fans).slice(0, 4);
            setAlbums(album_data);
        }
    }

    return (
        <DeezerContext.Provider value={{
            artist,
            loading,
            artists,
            tracks,
            albums,
            searchArtist,
            getArtist
        }}>
            {props.children}
        </DeezerContext.Provider>
    );
};

export default DeezerProvider;