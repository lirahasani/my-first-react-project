import React from "react"
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import AddHabit from './components/habits/AddHabit'
import Habits from './components/habits/Habits'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


class App extends React.Component {
    state = {
        habits : [
            { id: 1, name: 'Drink Water', targetDate: '20/06/2020', 
            format: 'Daily', accomplishe: false},
            { id: 2, name: 'Drink Water', targetDate: '20/06/2020', 
            format: 'Daily', accomplishe: false}
        ]
    }
    addHabit = (habit) => {
        habit.id = Math.random();
        let habits = [...this.state.habits, habit]
        this.setState({
            habits
        })
    }
    deleteHabit = (id) => {
        let habits = this.state.habits.filter(habit => {
            return habit.id !== id
        });
        this.setState({
            habits
        })
    }
    componentDidUpdate(prevProps, prevState){
        console.log('component updated');
        console.log(prevProps, prevState)
    }
    render(){
        return (
            <BrowserRouter>
                <div className="habit-app container">
                    <Header />
                    <Route path="/home" component={Habits}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Habits deleteHabit={this.deleteHabit} habits={this.state.habits} />
                    <AddHabit addHabit={this.addHabit}/>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App