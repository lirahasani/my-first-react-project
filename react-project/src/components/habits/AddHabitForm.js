import React, { useState } from 'react'

const AddHabitForm = props => {
	const initialFormState = { id: null, name: '', targetDate: '', format: '' }
	const [ habit, setHabit ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setHabit({ ...habit, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!habit.name) return

				props.addHabit(habit)
				setHabit(initialFormState)
			}}
		>
			<label>Habit Name</label>
			<input type="text" name="name" value={habit.name} onChange={handleInputChange} />
			<label>Target Date</label>
			<input type="text" name="targetDate" value={habit.targetDate} onChange={handleInputChange} />
			<label>Format</label>
			<input type="text" name="format" value={habit.format} onChange={handleInputChange} />
			<button>Add new habit</button>
		</form>
	)
}

export default AddHabitForm
