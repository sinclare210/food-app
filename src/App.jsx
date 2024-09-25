import { useState } from 'react'
import Search from './components/Search';


function App() {
  const [foodData, setFoodData] = useState([])
 return(
  <>
      <Search foodData={foodData} setFoodData={setFoodData}/>
    
    </>
  ); 
}

export default App
