const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const helmet = require('helmet');

// routes
const budgetRouter = require('./controllers/BudgetController');
const categoryRouter = require('./controllers/CategoryController');
const expenseRouter = require('./controllers/ExpenseController');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/budget', budgetRouter);
server.use('/category', categoryRouter);
server.use('/expense', expenseRouter);

mongoose
  .connect('mongodb://localhost/sprint-mongo')
  .then(() => console.log('Connection to MongoDB successful'))
  .catch(err => console.log('Error connecting to MongoDB'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
