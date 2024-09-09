import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [name, setName] = useState("");
  const [ans,setAns]=useState("");

  const handleFindContents = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/file/${name}`);
      const data = response.data;
      setAns(data);
      console.log(ans);
    } catch (error) {
      console.error(error);
      setAns("Error fetching data");
    }
  };

  return (
    <>
      <input onChange={(e)=>{
        setName(e.target.value);
      }} type="text" placeholder='enter the file name' />
      <br />
      <button onClick={handleFindContents}> find contents</button>
      <br />
      <br />
      <h5>{JSON.stringify(ans)}</h5>
    
    </>
  )
}



export default App
