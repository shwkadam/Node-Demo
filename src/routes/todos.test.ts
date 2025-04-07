import request from 'supertest';
import express from 'express';
import router from './todos';

const app = express();
app.use(express.json());
app.use('/', router);


describe('Todo Routes', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch todos (GET /)', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('todos');
    expect(Array.isArray(response.body.todos)).toBe(true);
  });

  it('should add a new todo (POST /todo)', async () => {
    const newTodo = { text: 'Learn Jest' };

    const response = await request(app)
      .post('/todo')
      .send(newTodo);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'updated todo');
    expect(response.body.todos).toBeDefined();
    expect(response.body.todos.length).toBeGreaterThan(0);
    expect(response.body.todos[0]).toHaveProperty('todo', newTodo.text);
  });

  

});
