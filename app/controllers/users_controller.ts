/* eslint-disable prettier/prettier */
import Group from '#models/group'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async getAll({ }: HttpContext) { }

  async getOne({ }: HttpContext) { }

  async create({ response, request }: HttpContext) {
    const newUser = await request.only(['name', 'phone', 'email', 'password', 'group'])
    const userGroup = await Group.find(newUser.group)
    console.log(userGroup)
    try {
      const user = await User.create(newUser)
      await user.related('group').associate(userGroup!)
      return user.group
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        response.status(400).send({ message: 'The user already exist' })
      } else {
        response.status(500).send({ message: err.message })
      }
    }
  }

  async delete({ }: HttpContext) { }

  async update({ }: HttpContext) { }
}
