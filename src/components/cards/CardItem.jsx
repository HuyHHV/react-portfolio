import React from 'react'


function CardItem(props) {
  return (
    <>
        {props.repos.map(repo => (
        <section className="card">
        <a href={repo.link}>
            <img src={repo.screenshot} alt="screenshot"/>  
        </a>
        <div className="app-title-wrapper">
            <h4 className="app-title">{repo.name}</h4>
        </div>   
      </section>
      ))}
      
    </>
   
    
  )
}

export default CardItem