import './App.css';
import StoryList from "./components/storyList.js";
import StorySubmit from "./components/storySubmit.js";
import AdminConsole from "./components/adminConsole.js";

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
            <h1>List of Stories:</h1>
            <StoryList />
            <br></br>
            <h1>Submit a Story:</h1>
            <StorySubmit />
            <h1>Admin Console Base Func:</h1>
            <AdminConsole />
        </div>
    );
}

export default App;
