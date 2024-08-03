/* eslint-disable prettier/prettier */
import Project from '#models/project'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectsController {
  async getAll({ }: HttpContext) {
    return await Project.all()
  }

  async create({ request, response, auth }: HttpContext) {
    await auth.authenticate()
    const {name, ownerId} = await request.only(['name', 'ownerId'])
   

    try {
      const project = await Project.create({name})
      if(ownerId){
        const owner = await User.findOrFail(ownerId)
        await project.related('ownerObject').associate(owner)
      }
      
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

  async deleteById({ response, request, auth }: HttpContext) {
    await auth.authenticate()

    const id = request.only(['id']).id
    try {
      const projectToBeDeleted = await Project.findOrFail(id)
      const owner = await User.findOrFail(projectToBeDeleted.owner)


      const message = `${owner.name} ${projectToBeDeleted.name} was deleted`
      await projectToBeDeleted.delete()
      response.status(200).send({ message: message })
    } catch (err) {
      switch (err.message) {
        case 'Row not found':
          return response.status(400).send({ message: 'Porject not found' })

        default:
          break
      }
    }
  }
}
