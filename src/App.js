import logo from './logo.svg';
import './App.css';

var L = require('leaflet');

// Initialize the map
var map = L.map('map', {
  scrollWheelZoom: false
});

// Set the position and zoom level of the map
//test
map.setView([37.38, -122.1010], 7);

// Initialize the base layer
var osm_mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



function addMarker(e){
  // Add marker to map at click location; add popup window
  var newMarker = new L.marker(e.latlng).addTo(map);
}

function App() {
  
  return (
    
    <div className="App">
      
      <header className="App-header">
        
        

        <img src={logo} className="App-logo" alt="logo" />
        {/* <div id="mapid"></div> */}

        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
