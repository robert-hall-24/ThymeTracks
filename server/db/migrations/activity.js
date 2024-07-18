export async function up(knex) {
    return knex.schema.createTable('activity', (table) => {
      table.increments('id')
      table.string('activity_name')
      table.integer("hours")
      table.string("stats")
    })
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('activity')
  }
  