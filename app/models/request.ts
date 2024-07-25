import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Project from './project.js'
import Client from './client.js'
import Port from './port.js'

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

  @column()
  declare third_part: string

  @column()
  declare status: string

  @column()
  declare application: string //text

  @column()
  declare model: string

  @hasMany(() => Port)
  declare input: HasMany<typeof Port>

  @column()
  declare desc: string

  @column.dateTime()
  declare delivery: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
