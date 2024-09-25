import React, { useEffect, useState } from 'react'



const Search = ({foodData,setFoodData}) => {
    const [query,setQuery] = useState("pizza");

    const URL = "https://api.spoonacular.com/recipes/complexSearch";
   const APIKey= "006dd095068643ad8858bc39500d8f35"

    function handleChange(e){
        setQuery(e.target.value);
    }

    useEffect(() => {
      async function getFood(){
      const data = await fetch(`${URL}?query=${query}&apiKey=${APIKey}`)
      const res = await data.json()
      setFoodData(res.results);
       }
       getFood()
    }
    
    , [query])
  return (
    <div>
        <input type="text" name="search" onChange={handleChange} value={query}/>
    </div>
  )
}

export default Search