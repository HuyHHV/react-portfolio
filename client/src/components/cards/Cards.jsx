import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import {repos} from './repoData';

function Cards() {
  return (
      <section className="work" id="work">
        <h3 className="card-header">Work</h3>  
        <article className="card-wrapper">
          <CardItem repos = {repos}/>
        </article>
    </section>
 
  )
}

export default Cards