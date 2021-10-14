import React from 'react';
import { getDate } from '../utils';

export const AlbumCard = (props) => {

    return (
        <div className="card col-auto artist-card col-sm-12">
            <img src={props.album.cover_medium} className="card-img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.album.title}</h5>
                <p className="card-text">{getDate(props.album.release_date)}</p>
            </div>
        </div>
    );
}