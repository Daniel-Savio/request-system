import type { HttpContext } from '@adonisjs/core/http'
import SDrequest from '#models/request'
import Client from '#models/client'
import Project from '#models/project'

export default class RequestsController {
  async create({ response, request, auth }: HttpContext) {
    const user = await auth.authenticate()
    const newRequest = await request.only([
      'location',
      'serviceNumber',
      'ticketNumber',
      'thirdPart',
      'client',
      'project',
      'status',
      'desc',
      'model',
      'info',
    ])

    try {
      const sdRequest = await SDrequest.create(newRequest)
      console.log(sdRequest)
      await sdRequest.related('requested').associate(user)

      //Check if a Client ID was sent and associeate it with the request
      if (newRequest.client) {
        const client = await Client.find(newRequest.client)
        await sdRequest.related('clientObject').associate(client!)
      }

      //Check if a Project ID was sent and associeate it with the request
      if (newRequest.project) {
        const project = await Project.find(newRequest.client)
        await sdRequest.related('projectObject').associate(project!)
      }

      return response.status(200).send({ message: sdRequest.location })
    } catch (err) {
      return err.message
    }
  }

  async getAll({}: HttpContext) {
    return await SDrequest.all()
  }

  async deleteById({ response, request, auth }: HttpContext) {
    await auth.authenticate()
    const id = request.only(['id']).id
    try {
      const sdRequestToBeDeleted = await SDrequest.findOrFail(id)
      const client = await Client.findOrFail(sdRequestToBeDeleted.client)
      const message = `${client.name} ${sdRequestToBeDeleted.location} was deleted`
      await sdRequestToBeDeleted.delete()
      response.status(200).send({ message: message })
    } catch (err) {
      switch (err.message) {
        case 'Row not found':
          return response.status(400).send({ message: 'Request not found' })

        default:
          break
      }
    }
  }
}
