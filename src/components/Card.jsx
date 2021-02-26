import React from 'react'

export default function Card({ title, text, isTextVisible, onShowText }) {
  return (
    <section className="Card">
      <h2>{title}</h2>
      <button onClick={onShowText}>Show text</button>
      {isTextVisible && <p>{text}</p>}
    </section>
  )
}
