import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany, BelongsTo } from '@adonisjs/lucid/types/relations'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { AccessToken, DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

import Group from './group.js'
import Request from './request.js'
import Project from './project.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  currentAccessToken?: AccessToken
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string | null

  @column()
  declare email: string

  @column()
  declare phone: string

  @column({ serializeAs: null })
  declare password: string

  //Table done
  @column()
  declare groupId: number

  @belongsTo(() => Group)
  declare group: BelongsTo<typeof Group>

  //Table done

  @column()
  declare userId: number

  @hasMany(() => Request)
  declare requestMade: HasMany<typeof Request>

  @column()
  declare respondedById: number

  @hasMany(() => Request)
  declare requestResponded: HasMany<typeof Request>

  @hasMany(() => Project)
  declare projectsOwned: HasMany<typeof Project>

  @column()
  declare level: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(User, {
    expiresIn: '30 days',
    prefix: 'oat_',
    table: 'auth_access_tokens',
    type: 'access_token',
    tokenSecretLength: 30,
  })
}
