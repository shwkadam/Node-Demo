// Task 2
import express from 'express';
import axios from 'axios';
import { User, Post } from '../models/apiInterfaces';

const router = express.Router();

const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users data');
  }
};

const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching posts data');
  }
};


router.get('/fetchData', async (req, res) => {
  try {
    const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);
    res.status(200).json({ users, posts });
  } catch (error) {
  }
});

export default router;
