import React from 'react';

const DeezerContext = React.createContext({
    artist: null,
    loading: true,
    artists: [],
    tracks: [],
    albums: [],
    getArtist: (artist_id) => { },
    searchArtist: (artist_name) => { },
});

export default DeezerContext;