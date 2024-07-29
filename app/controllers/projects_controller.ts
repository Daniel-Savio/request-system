import Project from '#models/project'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectsController {
  async getAll({}: HttpContext) {
    return await Project.all()
  }

  async create({ request, response }: HttpContext) {
    const newProject = await request.only(['projectName', 'projectOwner'])
    const projectOwner = await User.find(newProject.projectOwner)

    try {
      const project = await Project.create(newProject)
      await project.related('projectOwner').associate(projectOwner!)
      response.send(project.projectName)
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        response.status(400).send({ message: 'This project already exist' })
      } else {
        response.status(500).send({ message: err.message })
      }
    }
  }
}
