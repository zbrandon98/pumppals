import AuthContainer from './components/authContainer/AuthContainer';
import Feed from "./components/feed/Feed"
import { useState } from 'react';
import "./App.css"
function App() {

  const [postedByRoot, setPostedByRoot] = useState({
    id: null,
    name: null,
    email: null,
  })
  const handlePostedByRoot = (postedByDataRoot) => {
    setPostedByRoot(postedByDataRoot);
  }
  return (
    <div className="app">
      <AuthContainer sendDataRoot={handlePostedByRoot}/> 
      <Feed receiveData={postedByRoot}/>
    </div>
  );
}

export default App;
