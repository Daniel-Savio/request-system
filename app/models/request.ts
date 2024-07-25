import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Project from './project.js'
import Client from './client.js'
import Port from './port.js'
import User from './user.js'

export default class Request extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare location: string

  @column()
  declare service_number: string

  @column()
  declare ticket_number: string

  @belongsTo(() => Project)
  declare project: BelongsTo<typeof Project>

  @belongsTo(() => Client)
  declare client: BelongsTo<typeof Client>

  @belongsTo(() => User)
  declare requestedBy: BelongsTo<typeof User>

  @belongsTo(() => User)
  declare respondedBy: BelongsTo<typeof User>

  @column()
  declare third_part: string

  @column()
  declare status: string

  @column()
  declare application: string //text

  @column()
  declare model: string

  @manyToMany(() => Port)
  declare port: ManyToMany<typeof Port>

  @column()
  declare desc: string

  @column.dateTime()
  declare delivery: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
