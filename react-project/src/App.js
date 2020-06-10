import React from "react"

import Header from './components/Header'
import Habits from "./components/Habits"
import habitsData from "./components/habitsData"
import Footer from './components/Footer'

import './App.css';

function App() {
    const habitComponents = habitsData.map(
            habit => <Habits 
            name={habit.name} 
            targetDate={habit.targetDate} 
            format={habit.format} 
        />)
    return (
        <div>
            <Header />
            {habitComponents}
            <Footer />
        </div>
    )
}

export default App