import axios from 'axios';
import TodosAxios from './TodosAxios';

jest.mock('axios');

test('should fetch todos', () => {
    const todos = [{title: 'et porro tempora'}];
    const resp = {data: todos};
    axios.get.mockResolvedValue(resp);
    return TodosAxios.getTodos().then(data => expect(data).toEqual(todos));
});