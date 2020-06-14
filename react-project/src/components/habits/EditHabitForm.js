import React, { useState, useEffect } from 'react'

const EditHabitForm = props => {
  const [ habit, setHabit ] = useState(props.currentHabit)

  useEffect(
    () => {
      setHabit(props.currentHabit)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setHabit({ ...habit, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateHabit(habit.id, habit)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={habit.name} onChange={handleInputChange} />
      <label>Target Date</label>
      <input type="text" name="targetDate" value={habit.targetDate} onChange={handleInputChange} />
      <label>Format</label>
      <input type="text" name="format" value={habit.format} onChange={handleInputChange} />
      <button>Update Habit</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditHabitForm
