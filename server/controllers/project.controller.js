import Project from "../models/project.schema.js";

export const getProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
};

export const createProject = async (req, res) => {
  const {name, description, image} = req.body;
  if (!name || !description || !image) {
    return res.status(400).json({ message: "All fields are required" });
  } 
  const project = await Project.create(req.body);
  res.status(201).json(project);
};