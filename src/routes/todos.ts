//Task 1
import { Router } from 'express';

import { Todo } from '../models/todo';

const todos: Todo[] = [];
const router = Router();


export const fetchTodos = (): Promise<Todo[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(todos);
        }, 1000);
    });
};

router.get('/', async (req, res, next) => {
    try {
        const fetchedTodos = await fetchTodos();
        res.status(200).json({ todos: fetchedTodos });

    }
    catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        todo: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'updated todo', todos: todos});
});

export default router;
