import React from 'react'
import saga from '../img/vinland.jpg'
import './Card.css'

export default function Card() {
  return (
<section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src={saga} alt="" />
      </figure>
      <div class="article-body">
        <h2>This is some title</h2>
        <p>
          Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
        </p>
      </div>
    </div>
  </article>
</section>
  )
}
