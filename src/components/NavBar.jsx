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
                        <input className="form-control mr-auto" type="search" placeholder="Search" onChange={handleChange} aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};