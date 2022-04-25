import { FILTER_STATUSES } from "./constants"
export const getTasksOriginal = (state) => state.reducer.tasks
export const getFilters = (state) => state.filterReducer.filter;

const filterTask = (filter, task) => {
    if (filter === FILTER_STATUSES.ALL) {
      return true;
    };

    if (filter === FILTER_STATUSES.DONE) {
        return task.isDone
    }

    return !task.isDone
};

export const getTasks = (state) => {
    const tasks = getTasksOriginal(state);
    const filter = getFilters(state);
    return tasks.filter((task) => filterTask(filter, task));
  };
