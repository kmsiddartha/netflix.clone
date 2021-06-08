import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route}
from "react-router-dom" ;


function App() {
  return (
    <Router>  
      <div className="App">
      <Switch>
    <Route path='/row'>
      <Nav/>
      <Banner/>
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLarge />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </Route>
    <Route path='/'>
      <Nav/>
      <Home/>
    </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
