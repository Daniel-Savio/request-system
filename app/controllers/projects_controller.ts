/* eslint-disable prettier/prettier */
import Project from '#models/project'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectsController {
  async getAll({ }: HttpContext) {
    return await Project.all()
  }

  async create({ request, response }: HttpContext) {
    const newProject = await request.only(['name', 'owner'])
    const owner = await User.findBy('name', newProject.owner)

    try {
      if (await Project.findByOrFail("name", newProject.name)) {
        response.status(400).send({ message: "Project already exists" })
      }
      const project = await Project.create(newProject)
      await project.related('owner').associate(owner!)
      return (project.name)
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        response.status(400).send({ message: 'This project already exist' })
      } else {
        response.status(500).send({ message: err.message })
      }
    }
  }
}
