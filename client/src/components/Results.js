import React from "react";


const Results = (props) => {

  return (

    <div>
      <p>{props.title}</p>
      <p>{props.snippet}</p>
      <p>{props.date}</p>
      <p><a href ={props.url} target="_blank">Read More</a></p>
      <button onClick={() => props.handleSaveArticle(props._id)}>Save</button>
    </div>
  )
}

export default Results;
