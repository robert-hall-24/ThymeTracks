export function up(knex) {
  return knex.schema.createTable('Activity', (table) => {
    table.increments('ID').primary()
    table.string('Name', 255)
  })
}

export async function down(knex) {
  return knex.schema.dropTable('Activity')
}
