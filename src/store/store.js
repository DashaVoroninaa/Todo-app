import {createStore, combineReducers} from 'redux'
import { FILTER_STATUSES, TASKS_ACTION } from './constants';
export * as TasksSelectors from './selectors'


const generateUniqId = (users) => {
    const ids = users.map(({ id }) => id);
  
    return Math.max(...ids) + 1;
};

const INITIAL_STATE = {
    tasks: [
        {id: 1, task: 'купить чипсики', isDone: false},
        {id: 2, task: 'доплести фенечку', isDone: true},
        {id: 3, task: 'купить виноградную фанту', isDone: true},
        {id: 4, task: 'съесть сырную лапшу', isDone: false},
    ],
    filter: FILTER_STATUSES.ALL,
}

const INITIAL_STATE_FILTER = { filter: FILTER_STATUSES.ALL };

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TASKS_ACTION.DELETE_TASK: {
            return {
                tasks: state.tasks.filter(({id: taskID}) => taskID !== action.payload)      
            }
        }

        case TASKS_ACTION.ADD_TASK: {
            const id = generateUniqId(state.tasks)
            return {
                tasks: state.tasks.concat({...action.payload, id})
            }
        }

        case TASKS_ACTION.CHECKBOX: {
            return {
                tasks: state.tasks.map((task) => {
                if (task.id !== action.payload) {
                    return task
                }

                return {...task, isDone: !task.isDone}
            })
            }
        }


        default: 
            return state
    }
}

const filterReducer = (state = INITIAL_STATE_FILTER, action) => {
    switch (action.type) {
        case TASKS_ACTION.FILTER: {
            return {
                ...state,
                filter: action.payload,
            };
        }    
        
        default:
            return state;
    }
}
const rootReducer = combineReducers ({reducer, filterReducer})
export const store = createStore(rootReducer)
