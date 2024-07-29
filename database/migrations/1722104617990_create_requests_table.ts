import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'requests'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('location', 80)
      table.string('service_number', 20)
      table.string('ticket_number', 8)
      table.string('third_part', 25)
      table.string('status', 15)
      table.text('application')
      table.json('info')
      table.text('desc')
      table.enu('model', [
        'SD+ FOFO',
        'SD+ RJ45',
        'SD+ RJ45 FO',
        'SDG FOFO',
        'SDG RJ45',
        'SDG RJ45 FO',
      ])
      table.integer('requested_by').unsigned().references('users.id')
      table.integer('responded_by').unsigned().references('users.id')
      table.integer('client').unsigned().references('clients.id')
      table.integer('project').unsigned().references('projects.id')

      table.timestamp('supposed_delivery_date')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
