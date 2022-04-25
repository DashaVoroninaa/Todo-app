import React from 'react';
import { CheckboxGroup } from './common';
import css from './styles.module.css';
import {filterOptions} from './constants';
import {connect}  from 'react-redux'
import {TasksSelectors, TasksActionsCreators} from '../store'

class AppOriginal extends React.Component {
    state = {
        task: '',
    };

    deleteTaskHandler = (id) => {
        this.props.deleteTask(id)
    };

    inputChangeHanler = (e) => {
        this.setState({taskInput: e.target.value});
    };

    addTaskHandler = () => {
        this.props.addTask({task: this.state.taskInput, isDone: false})  
    };

    toggleCheckbox = (id) => {
        this.props.checkbox(id)
    };

    changeFilterHandler = (e) => {
        this.props.filterTask(e.target.value)
    };

    render () {
        const {taskInput} = this.state;
        const {tasks, filter} = this.props;

        return (
            <div className={css.wrapper}>
            <h1 className={css.title}>Todo list</h1>
            <form>
                <input value={taskInput} onChange={this.inputChangeHanler} />
                <button type='button' onClick={this.addTaskHandler} className={css.button}>Добавить дело</button>
            </form>
            <div>
                <CheckboxGroup options={filterOptions} value={filter} onChange={this.changeFilterHandler} />
            </div>
            <ul>
                {tasks.map(({task, id, isDone}) => (
                    <li key = {id} className={css.list}>
                        <input type='checkbox' checked = {isDone} onChange={() => {this.toggleCheckbox(id)}} />
                        {task}
                        {isDone && <button className={css.button} onClick={() => {this.deleteTaskHandler(id)}}>Удалить</button>}
                    </li>
                ))}
            </ul>
        </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        tasks: TasksSelectors.getTasks(state),
        filter: TasksSelectors.getFilters(state)
    }
}

const mapDispatchToProps = {
    deleteTask: TasksActionsCreators.deleteTask,
    addTask: TasksActionsCreators.addTask,
    checkbox: TasksActionsCreators.checkbox,
    filterTask: TasksActionsCreators.filterTask
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppOriginal)
