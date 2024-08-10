import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

  const [listOFPosts, setListOfPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/Posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return <div className="App">
    {listOFPosts.map((value, key) => {
      return <div className = "post"> 
        <div className="title"> {value.title} </div>
        <div className="caption"> {value.caption} </div>
        <div className="username"> {value.username} </div>
      </div>;
    })} 
    </div>
}

export default App;
