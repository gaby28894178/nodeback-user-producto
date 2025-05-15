const axios = require("axios");
const BASE_URL = "http://localhost:3001/users";

// GET all users
exports.getUsers = async (req, res) => {
  const { data } = await axios.get(BASE_URL);
  res.json(data);
};

// GET user by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.get(`${BASE_URL}/${id}`);
  res.json(data);
};

// POST new user
exports.createUser = async (req, res) => {
  const { data } = await axios.post(BASE_URL, req.body);
  res.status(201).json(data);
};

// PUT update user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.put(`${BASE_URL}/${id}`, req.body);
  res.json(data);
};

// DELETE user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await axios.delete(`${BASE_URL}/${id}`);
  res.status(204).send();
};
