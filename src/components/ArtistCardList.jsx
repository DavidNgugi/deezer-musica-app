import React from 'react';
import { Link } from 'react-router-dom';
import DeezerContext from '../contexts/DeezerContext';
import { ArtistCard } from './ArtistCard';

export const ArtistCardList = () => {
    return (
        <DeezerContext.Consumer>
            {value =>
            (
                <div className="row list-body">
                    <h3 className="list-header">Deezer Artists</h3>
                    <div className="col-md-12">
                        {value.loading
                            ?
                            <p className="p-1 text-center">Loading...</p>
                            :
                            <div className="row">
                                <ul className="nav d-flex col-lg-12 align-items-center">
                                    {
                                        value.artists.map((artist, index) => {
                                            return <li className="nav-item p-1 mb-5 d-flex" key={index}>
                                                <Link
                                                    to={`/artist/${artist.id}`}
                                                    className="link-artist"
                                                >
                                                    <ArtistCard artist={artist} key={index} />
                                                </Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            )
            }
        </DeezerContext.Consumer >
    );
}