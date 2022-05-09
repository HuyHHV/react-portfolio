import React from 'react'
import cocktail from './cocktail.png'
function CardItem() {
  return (
    <section class="card">
      <a href="https://lconnell1000.github.io/Project-1/">
          <img src={cocktail} alt="Cocktail"/>  
      </a>
      <div class="app-title-wrapper">
          <h4 class="app-title">Cocktail Bar Stocktake</h4>
      </div>   
    </section>  
  )
}

export default CardItem