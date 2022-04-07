import { CheckboxGroup } from './common';
import css from './styles.module.css';
import { FILTER_STATUSES, filterOptions, tasks } from './constants';

const filter = FILTER_STATUSES.ALL;

const filterTask = (filter, task) => {
    if (filter === FILTER_STATUSES.ALL) {
      return true;
    };

    if (filter === FILTER_STATUSES.DONE) {
        return task.isDone
    }

    return !task.isDone
};

export function App() {
    return (
        <div className={css.wrapper}>
            <h1 className={css.title}>Todo list</h1>
            <form>
                <input />
                <button type='button' className={css.button}>Добавить дело</button>
            </form>
            <div>
                <CheckboxGroup options={filterOptions} value={FILTER_STATUSES.ALL} />
            </div>
            <ul>
                {tasks.filter((tasks) => filterTask(filter, tasks)).map(({task, id, isDone}) => (
                    <li key = {id} className={css.list}>
                        <input type='checkbox' checked = {isDone} />
                        {task}
                        {isDone && <button className={css.button}>Удалить</button>}
                    </li>
                ))}
            </ul>
        </div>
    )
}
