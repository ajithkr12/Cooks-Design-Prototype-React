import {useState} from 'react'

import './App.css';
import  Main  from './pages/Main';
import { Offers } from './pages/Offers';
function App() {
  const [value,setValue]=useState(2)
  console.log('evide vannu app ---->',value)
  return (
    <div className="App">
      <Main value={value} setValue={setValue}/>
    </div>


  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Main value={value} setValue={setValue}/>}/>
  //       <Route path="/offers" element={<Offers />} />
      
  //   </Routes>
  // </BrowserRouter>

    
  );
}

export default App;
