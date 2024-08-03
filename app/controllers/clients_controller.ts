import Client from '#models/client'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClientsController {
  async getAll({}: HttpContext) {
    return Client.all()
  }

  async create({ request, response, auth }: HttpContext) {
    await auth.authenticate()
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

  async deleteById({ response, request, auth }: HttpContext) {
    await auth.authenticate()
    const id = request.only(['id']).id
    try {
      const client = await Client.findOrFail(id)
      const message = `${client.name}  was deleted`
      await client.delete()
      response.status(200).send({ message: message })
    } catch (err) {
      switch (err.message) {
        case 'Row not found':
          return response.status(400).send({ message: 'Client not found' })

        default:
          break
      }
    }
  }
}
