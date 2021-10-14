import React from 'react';
import { getDate } from '../utils';

const AlbumCard = (props) => {

    return (
        <div className="card col-auto artist-card album-card col-sm-12" key={props.key}>
            <img src={props.album.cover_medium} className="card-img" loading="lazy" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.album.title}</h5>
                <p className="card-text">{getDate(props.album.release_date)}</p>
            </div>
        </div>
    );
}

export default AlbumCard;