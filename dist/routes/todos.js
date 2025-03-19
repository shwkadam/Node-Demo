"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
const fetchTodos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(todos);
        }, 1000);
    });
};
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fetchedTodos = yield fetchTodos();
        res.status(200).json({ todos: fetchedTodos });
    }
    catch (error) {
        next(error);
    }
}));
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        todo: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'updated todo', todos: todos });
});
exports.default = router;
