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
