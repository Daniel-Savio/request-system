import Client from '#models/client'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClientsController {
  async getAll({}: HttpContext) {
    return Client.all()
  }

  async create({ request, response }: HttpContext) {
    const newClient = await request.only(['name'])
    try {
      const client = await Client.create(newClient)
      response.send(client.name)
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        response.status(400).send({ message: 'This client already exist' })
      } else {
        response.status(500).send({ message: err })
      }
    }
  }
}
