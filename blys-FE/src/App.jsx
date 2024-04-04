import { Route, Routes } from 'react-router-dom';
import Verification from './Verification';
import Success from './Success';


const App=()=>{
  
  return (
    <Routes>
      <Route path="/" element={<Verification />}/>
      <Route path="/success" element={<Success />}/>

    </Routes>
  )

}

export default App;
