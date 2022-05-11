import React from 'react'
function CardItem(props) {
  return (
    <>
        {props.repos.map(repo => (
        <section className="card">
          <div className='under-div'>
            <a href={repo.link}><img src={repo.screenshot} alt="screenshot"/> </a>
            <div className='over-div' >
              <div>
                <a href={repo.github} ><i className="fab fa-github"></i></a>
                <a href={repo.link} className ="view-app" >View app</a>
              </div>
            </div>
          </div>
          <div className="app-title-wrapper">
              <h4 className="app-title">{repo.name}</h4>
          </div>   
      </section>
      ))}
      
    </>
   
    
  )
}

export default CardItem