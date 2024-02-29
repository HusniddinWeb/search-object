import "./App.css";

import React from 'react'
import Info from '../Info/Info'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import MovieList from "../Movie-list/Movie-list";
import MoviesAddForm from "../Movies-add-form/Movies-add-form";

function App() {

    const data = [
        {name:"Empire of Osman", number: 978, favourite:false, id:1},
        {name:"Ella", number: 567, favourite:false, id:2},
        {name:"Composs", number: 1000, favourite:true, id:3},
    ]
 
  return (

    <div className='App font-monospace'>

        <div className='container'>
            <Info />
        
            <div className="searchPanel">
                <Search />
                <Filter />
            </div>

            <MovieList data={data}/>

            <MoviesAddForm />
        
        </div>

    </div>

  )
}

export default App