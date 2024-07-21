export function up(knex) {
  return knex.schema.createTable('Cadence', function (table) {
    table.increments('ID').primary()
    table.string('Name', 50)
    table.decimal('Hours_Max', 8, 2)
  })
}

export function down(knex) {
  return knex.schema.dropTableIfExists('Cadence')
}
