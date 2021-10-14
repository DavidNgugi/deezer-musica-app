import React from 'react';
import DeezerContext from '../contexts/DeezerContext';
import { nFormatter } from '../utils';

const ArtistCard = (props) => {
    const context = React.useContext(DeezerContext);

    return (
        <div className="card artist-card col-sm-12 h-100" data-testid="artist-card" onClick={() => context.getArtist(props.artist.id)}>
            <img src={props.artist.picture_medium} className="card-img" loading="lazy" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.artist.name}</h5>
                <p className="card-text fans">{nFormatter(props.artist.nb_fan)} Fans</p>
                <p className="card-text album-count">{nFormatter(props.artist.nb_album)} Albums</p>
            </div>
        </div>
    );
}

export default ArtistCard;