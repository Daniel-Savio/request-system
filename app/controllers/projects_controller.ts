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
   

    try {
      const owner = await User.find(newProject.owner)
      const project = await Project.create(newProject)
      await project.related('owner').associate(owner!)
      
      return (response.status(200).send({message: project}))
    } 
    catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        response.status(400).send({ message: 'This project already exist' })
      } 
      if(err.message === "Row not found"){
        response.status(500).send({ message: "User not found" })

      }
      else {
        response.status(500).send({ message: err.message })
      }
    }
  }
}
