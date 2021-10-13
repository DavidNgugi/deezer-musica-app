import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { ArtistCardList } from './components/ArtistCardList';
import { ArtistDetails } from './components/ArtistDetails';

function App() {
  return (
    <div className="row App">
      <Switch>
        <Route exact path="/" component={ArtistCardList} />
        <Route path="/artist/:artist_id" component={ArtistDetails} />
      </Switch>
    </div>
  );
}

export default App;
