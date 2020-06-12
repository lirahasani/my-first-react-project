import React from 'react'

class AddHabit extends React.Component {
    state = {
        name: null,
        targetDate: null,
        format: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addHabit(this.state);
        this.setState({
            name: '',
            targetDate: '',
            format: ''
        })
    }
    render(){
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s3">
                                <input type="text" id="name" onChange={this.handleChange} 
                                placeholder="Habit Name" value={this.state.name}/>
                            </div>
                            <div className="input-field col s3">
                                <input type="text" id="targetDate" onChange={this.handleChange} 
                                placeholder="Target Date" value={this.state.targetDate} />
                            </div>
                            <div className="input-field col s3">
                                <input type="text" id="autocomplete-input" id="format" onChange={this.handleChange} 
                                placeholder="Habit Format" value={this.state.format} />
                            </div>
                            <div className="input-field col s3">
                                <button className="waves-effect waves-light btn-small">Add Habit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddHabit