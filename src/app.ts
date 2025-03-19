import express from 'express';
import todosRoutes from './routes/todos';
import bodyParser from 'body-parser';
import apiRoutes from './routes/apiRoutes';

const app = express();

app.use(bodyParser.json());
app.use(todosRoutes);
app.use('/api', apiRoutes);

app.listen(3000);