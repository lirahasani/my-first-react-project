import React from 'react'

const HabitTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Target Date</th>
        <th>Format</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.habits.length > 0 ? (
        props.habits.map(habit => (
          <tr key={habit.id}>
            <td>{habit.name}</td>
            <td>{habit.targetDate}</td>
            <td>{habit.format}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(habit)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteHabit(habit.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Habits</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default HabitTable
