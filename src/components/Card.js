import React from 'react'

export default function Card({ title, text }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}
