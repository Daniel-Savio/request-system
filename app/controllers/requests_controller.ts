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
      await sdRequest.related('requestedBy').associate(user)

      //Check if a Client ID was sent and associeate it with the request
      if (newRequest.client) {
        const client = await Client.find(newRequest.client)
        await sdRequest.related('client').associate(client!)
      }

      //Check if a Project ID was sent and associeate it with the request
      if (newRequest.project) {
        const project = await Project.find(newRequest.client)
        await sdRequest.related('project').associate(project!)
      }

      return response.status(200).send({ message: sdRequest })
    } catch (err) {
      return err.message
    }
  }

  async getAll({}: HttpContext) {}
}
