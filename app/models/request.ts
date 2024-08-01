import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Project from './project.js'
import Client from './client.js'
import User from './user.js'

export default class Request extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare location: string

  @column()
  declare serviceNumber: string

  @column()
  declare ticketNumber: string

  @column()
  declare project: number

  @belongsTo(() => Project, { foreignKey: 'project' })
  declare projectObject: BelongsTo<typeof Project>

  @column()
  declare client: number

  @belongsTo(() => Client, { foreignKey: 'client' })
  declare clientObject: BelongsTo<typeof Client>

  @column()
  declare requestedBy: number

  @belongsTo(() => User, { foreignKey: 'requestedBy' })
  declare requested: BelongsTo<typeof User>

  @column()
  declare respondedBy: number

  @belongsTo(() => User, { foreignKey: 'respondedBy' })
  declare responded: BelongsTo<typeof User>

  @column()
  declare thirdPart: string

  @column()
  declare status: string

  @column()
  declare application: string //text

  @column()
  declare model: string

  //done
  @column()
  declare info: JSON

  @column()
  declare desc: string //text

  @column.dateTime()
  declare supposedDeliveryDate: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
