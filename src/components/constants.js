export const tasks = [
    {id: 1, task: 'купить чипсики', isDone: false},
    {id: 2, task: 'доплести фенечку', isDone: true},
    {id: 3, task: 'купить виноградную фанту', isDone: true},
    {id: 4, task: 'съесть сырную лапшу', isDone: false},
];

export const FILTER_STATUSES = {
    ALL: 'all',
    DONE: 'done',
    NOT_DONE: 'notDone',
};

export const filterOptions = [
    {value: FILTER_STATUSES.ALL, label: 'Все'},
    {value: FILTER_STATUSES.DONE, label: 'Выполнено'},
    {value: FILTER_STATUSES.NOT_DONE, label: 'Не выполнено'},
];
