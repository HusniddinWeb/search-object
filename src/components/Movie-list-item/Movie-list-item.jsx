import "./Movie-list-item.css"
import React from 'react'
// import {setState} from "react"

function MovieListItem({name, number, favourite}) {



  return (
    <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
        <span className="list-group-item-label">{name}</span>
        <input className="list-group-item-input" type="number" defaultValue={number}/>
        <div className="d-flex justify-content-center algin-items-center">
            <button className="btn-cookie btn-sm" type="button">
                <i className="fas fa-cookie"></i>
            </button>
            <button className="btn-cookie btn-sm" type="button">
                <i className="fas fa-trash"></i> 
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
  )
}

export default MovieListItem