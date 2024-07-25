import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { ManyToMany } from '@adonisjs/lucid/types/relations'
import Protocol from './protocol.js'

export default class Ied extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare owner: string

  @manyToMany(() => Protocol)
  declare availableProtocol: ManyToMany<typeof Protocol>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
