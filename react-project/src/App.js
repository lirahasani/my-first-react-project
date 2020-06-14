import React, { useState, Fragment } from 'react'
import AddHabitForm from './components/habits/AddHabitForm'
import EditHabitForm from './components/habits/EditHabitForm'
import HabitTable from './tables/HabitTable'

const App = () => {
	// Data
	const habitsData = [
		{ id: 1, name: 'Drink Water', targetDate: '20/09/2020', format: 'Daily' },
		{ id: 2, name: 'Exercize', targetDate: '31/12/2020', format: '3 times a week' },
		{ id: 2, name: 'Meditate', targetDate: '01/10/2020', format: 'Daily' },
		{ id: 2, name: 'Eat Healthy', targetDate: '31/12/2020', format: '5 times a week' },
	]

	const initialFormState = { id: null, name: '', targetDate: '', format: '' }

	// Setting state
	const [ habits, setHabits ] = useState(habitsData)
	const [ currentHabit, setCurrentHabit ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addHabit = habit => {
		habit.id = habits.length + 1
		setHabits([ ...habits, habit ])
	}

	const deleteHabit = id => {
		setEditing(false)

		setHabits(habits.filter(habit => habit.id !== id))
	}

	const updateHabit = (id, updatedHabit) => {
		setEditing(false)

		setHabits(habits.map(habit => (habit.id === id ? updatedHabit : habit)))
	}

	const editRow = habit => {
		setEditing(true)

		setCurrentHabit({ id: habit.id, name: habit.name, targetDate: habit.targetDate, format: habit.format })
	}

	return (
		<div className="container">
			<h1 className="text-center">HABITS</h1>
			<hr/>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Habit</h2>
							<EditHabitForm
								editing={editing}
								setEditing={setEditing}
								currentHabit={currentHabit}
								updateHabit={updateHabit}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Habit</h2>
							<AddHabitForm addHabit={addHabit} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Habits</h2>
					<HabitTable habits={habits} editRow={editRow} deleteHabit={deleteHabit} />
				</div>
			</div>
		</div>
	)
}

export default App
