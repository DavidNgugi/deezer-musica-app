import React from 'react';
import DeezerContext from '../contexts/DeezerContext';
import { nFormatter, toReadableDuration } from '../utils';
import AlbumCard from './AlbumCard';

const ArtistDetails = () => {
    return (
        <DeezerContext.Consumer>
            {value =>
            (
                <React.Fragment>
                    <div className="row artist-details">
                        <h3 className="list-header header-top">Deezer Artist</h3>
                        {value.loading
                            ?
                            <p className="p-1 text-center">Loading...</p>
                            :

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card ">
                                        <div className="row col-md-12">
                                            <div className="col-sm-12 col-md-6 artist-art text-white">
                                                <img className="card-img artist-picture" src={value.artist.picture_big} loading="lazy" alt="sans" />
                                                <div className="card-img-overlay artist-details-overlay">
                                                    <h5 className="card-title artist-name"><span>{value.artist.name}</span></h5>
                                                    <p className="card-text fans"><span>{nFormatter(value.artist.nb_fan)} Fans</span></p>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 tracks-list">
                                                <h5 className="card-title d-flex">Top Tracks</h5>
                                                <ul className="list-group list-group-flush ">
                                                    {
                                                        value.tracks.map((track, index) => {
                                                            return <li className="list-group-item track-item d-flex" key={index}>
                                                                <span className="track-name">{index + 1}. {track.title_short}</span>
                                                                <span className="duration">{toReadableDuration(track.duration)}</span>
                                                            </li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        }
                    </div>

                    <div className="row albums">
                        <h3 className="list-header albums-list">Albums</h3>
                        {value.loading
                            ?
                            <p className="p-1 text-center">Loading...</p>
                            :
                            <div className="card-group">
                                {
                                    value.albums.map((album, index) => {
                                        return <AlbumCard album={album} key={index} />
                                    })
                                }
                            </div>

                        }
                    </div>
                </React.Fragment>
            )
            }
        </DeezerContext.Consumer>
    );
}

export default ArtistDetails;