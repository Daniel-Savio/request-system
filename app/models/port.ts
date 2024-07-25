import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import Protocol from './protocol.js'
import Ied from './ied.js'

export default class Port extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare type: string //entrada ou saida

  @hasOne(() => Protocol)
  declare protocol: HasOne<typeof Protocol>

  @column()
  declare brone: string

  @column()
  declare borne: string //71/72 - 74/75 - TCP/IP ou saida

  @hasMany(() => Ied)
  declare Ied: HasMany<typeof Ied>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
