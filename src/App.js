import React from 'react'
import SearchResult from "./components/SearchResult";
import "./App.css"
const express = require('exrpess')
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "..", 'public');
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
  
})

function App() {
  return <SearchResult/>
}

app.listen(port, () => {
  console.log(`connected ${port}`)
})
export default App;