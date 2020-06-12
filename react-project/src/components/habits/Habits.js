import React from 'react'

function Habits ({habits, deleteHabit}){
    const habitList = habits.length ? (
        habits.map(habit => {
        return (
            <div class="card horizontal" key={habit.id}>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>Habit: {habit.name}</p>
                        <p>Target: {habit.targetDate}</p>
                        <p>Format: {habit.format}</p>
                    </div>
                    <div className="card-action">
                        <p>
                            <label>
                                <input type="checkbox" class="filled-in"  />
                                <span>Accomplished</span>
                            </label>
                        </p>
                        <button onClick={() => {deleteHabit(habit.id)}}
                        className="waves-effect teal lighten-3 right btn-small">Delete Habit</button>
                    </div>
                </div>
            </div>
        )
    })
    ) : (
        <p className="center">Woohoo! You've mastered all habits. Add another one..</p>
    )
    return (
        <div className="habits collection">
            { habitList }
        </div>
    )
    
}

export default Habits