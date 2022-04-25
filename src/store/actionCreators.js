import { TASKS_ACTION } from "./constants"

export const deleteTask = (id) => ({payload: id, type: TASKS_ACTION.DELETE_TASK})
export const addTask = (task) => ({payload: task, type: TASKS_ACTION.ADD_TASK})
export const checkbox =  (id) => ({payload: id, type: TASKS_ACTION.CHECKBOX})
export const filterTask = (e) => ({payload: e, type: TASKS_ACTION.FILTER});
