import React from "react";


const Saved = (props) => {

  return (
    <div>
      <p>{props.title}</p>
      <p>{props.snippet}</p>
      <p>{props.date}</p>
      <p>{props.url}</p>
      <button onClick = {()=>props.handleDelete(props._id)}>Delete</button>
    </div>
  )
}


export default Saved;
