export async function up(knex) {
  return knex.schema.createTable('Activity_Cadence', function (table) {
    table.increments('ID').primary()
    table.integer('Activity_ID')
    table.integer('Cadence_ID')
    table.decimal('Hours', 8, 2)
  })
}

export async function down(knex) {
  return knex.schema.dropTable('Activity_Cadence')
}
