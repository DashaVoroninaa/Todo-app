import React from 'react';
import { CheckboxGroup } from './common';
import css from './styles.module.css';
import { FILTER_STATUSES, filterOptions } from './constants';

const filterTask = (filter, task) => {
    if (filter === FILTER_STATUSES.ALL) {
      return true;
    };

    if (filter === FILTER_STATUSES.DONE) {
        return task.isDone
    }

    return !task.isDone
};

const generateUniqId = (users) => {
    const ids = users.map(({ id }) => id);
  
    return Math.max(...ids) + 1;
};

export class App extends React.Component {
    state = {
        tasks: [
            {id: 1, task: 'купить чипсики', isDone: false},
            {id: 2, task: 'доплести фенечку', isDone: true},
            {id: 3, task: 'купить виноградную фанту', isDone: true},
            {id: 4, task: 'съесть сырную лапшу', isDone: false},
        ],
        task: '',
        filter: FILTER_STATUSES.ALL,
    };

    deleteTaskHandler = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter(({id: taskID}) => taskID !== id)
        }));
    };

    inputChangeHanler = (e) => {
        this.setState({taskInput: e.target.value});
    };

    addTaskHandler = () => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.concat(
                [{id: generateUniqId(prevState.tasks), task: prevState.taskInput, isDone: false}]
            )
        }));
    };

    toggleCheckbox = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) => {
                if (task.id !== id) {
                    return task
                }

                return {...task, isDone: !task.isDone}
            })
        }))
    };

    changeFilterHandler = (e) => {
        this.setState({filter: e.target.value})
    };

    render () {
        const {tasks, taskInput, filter} = this.state;

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
                {tasks.filter((tasks) => filterTask(filter, tasks)).map(({task, id, isDone}) => (
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
