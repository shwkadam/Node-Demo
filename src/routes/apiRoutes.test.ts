import axios from 'axios';
import { fetchUsers, fetchPosts } from './apiRoutes'; // Adjust the path based on your project structure

jest.mock('axios');

describe("API Fetch Functions", () => {
  test("fetchUsers should return a list of users", async () => {
    const mockUsers = [{ id: 1, name: "John Doe" }];
    (axios.get as jest.Mock).mockResolvedValue({ data: mockUsers });

    const users = await fetchUsers();
    expect(users).toEqual(mockUsers);
  });

  test("fetchPosts should return a list of posts", async () => {
    const mockPosts = [{ id: 1, title: "Test Post" }];
    (axios.get as jest.Mock).mockResolvedValue({ data: mockPosts });

    const posts = await fetchPosts();
    expect(posts).toEqual(mockPosts);
  });

  test("fetchUsers should throw an error if API fails", async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

    await expect(fetchUsers()).rejects.toThrow("Error fetching users data");
  });
});
