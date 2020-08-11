import React from 'react'
import SearchResult from "./components/SearchResult";
import "./App.css"
const express = require('exrpess')
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, "..", 'public');
app.use(express.static(publicPath));


function App() {
  return <SearchResult/>
}
export default App;