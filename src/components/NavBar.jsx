import React from "react";
import { Link } from 'react-router-dom';
import DeezerContext from "../contexts/DeezerContext";

export const NavBar = () => {
    const ctx = React.useContext(DeezerContext);
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleChange = event => {
        setSearchTerm(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault();
        ctx.searchArtist(searchTerm);
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link
                    to={`/`}
                    type="button"
                    className="navbar-brand"
                >Deezer</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="navbar-nav form-inline" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input className="form-control mr-auto" type="search" placeholder="Search" onChange={handleChange} aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
};