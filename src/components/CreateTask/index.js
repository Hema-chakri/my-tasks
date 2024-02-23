import {Component} from 'react'

import Tasks from '../Tasks'
import './index.css'

class CreateTask extends Component {
  state = {
    inputValue: '',
  }

  onChangeEvent = event => {
    this.setState({inputValue: event.target.value})
  }

  onAddTask = event => {
    event.preventDefault()
  }

  render() {
    const {tagsList} = this.props
    const {inputValue} = this.state
    return (
      <div className="app-container">
        <form className="add-task-container" onSubmit={this.onAddTask}>
          <h1>Create a task!</h1>
          <label htmlFor="task">Task</label>
          <input
            id="task"
            type="text"
            value={inputValue}
            placeholder="Enter the task here"
            onChange={this.onChangeEvent}
          />
          <label htmlFor="selectActivity">Tags</label>
          <select id="selectActivity">
            {tagsList.map(eachTag => (
              <option value={eachTag.optionId}>{eachTag.displayText}</option>
            ))}
          </select>
          <button type="submit">Add Task</button>
        </form>
        <div>
          <h1>Tags</h1>
          <div>
            {tagsList.map(eachTag => (
              <button type="button">{eachTag.displayText}</button>
            ))}
            <h1>Tasks</h1>

            <Tasks taskDetails={tagsList} />
          </div>
        </div>
      </div>
    )
  }
}

export default CreateTask
