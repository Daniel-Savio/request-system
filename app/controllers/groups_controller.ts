/* eslint-disable prettier/prettier */
import Group from '#models/group'
import type { HttpContext } from '@adonisjs/core/http'

export default class GroupsController {
  async getAll({ }: HttpContext) { 
    return( Group.all())
  }

  async getOne({ }: HttpContext) { }

  async create({ response, request }: HttpContext) {
    const newGroup = await request.only(['name'])
    try {
      const group = await Group.create(newGroup)
      return group.name
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        response.status(400).send({ message: 'This group already exist' })
      } else {
        response.status(500).send({ message: err.message })
      }
    }
  }

  async delete({ }: HttpContext) { }

  async update({ }: HttpContext) { }
}
