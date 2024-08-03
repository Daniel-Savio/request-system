/* eslint-disable prettier/prettier */
import Group from '#models/group'
import type { HttpContext } from '@adonisjs/core/http'

export default class GroupsController {
  async getAll({ }: HttpContext) { 
    return( Group.all())
  }

  async getOne({ }: HttpContext) { }

  async create({ response, request, auth }: HttpContext) {
    const user = await auth.authenticate()
    const newGroup = await request.only(['name'])
    if(user.level !== 1){
      return response.status(403).send({message: "User does not have permission to this action"})
    }
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

  async deleteById({ response, request, auth }: HttpContext) {
    await auth.authenticate()
    const id = request.only(['id']).id
    try {
      const groupToBeDeleted = await Group.findOrFail(id)
      const message = `${groupToBeDeleted.name} was deleted`
      await groupToBeDeleted.delete()
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
  async update({ }: HttpContext) { }
}
