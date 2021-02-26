import React, { useState } from 'react'

export default function Form({ onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // short version: !name || !email
  const isSubmitDisabled = name.length === 0 || email.length === 0

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          value={name}
          onChange={event => setName(event.target.value)}
          name="name"
        />
      </label>
      <label>
        Email:
        <input
          value={email}
          onChange={event => setEmail(event.target.value)}
          name="email"
        />
      </label>
      <button disabled={isSubmitDisabled}>Submit</button>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { name, email } = form.elements
    const data = { name: name.value, email: email.value }
    onSubmit(data)
  }
}
