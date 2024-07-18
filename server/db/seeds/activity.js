export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('activity').del()
  
    // Inserts seed entries
    await knex('activity').insert([
      { id: 1, activity_name: 'banana', hours: 2, stats: "slay"},
      { id: 2, activity_name: 'banana', hours: 2, stats: "slay"},
      { id: 3, activity_name: 'banana', hours: 2, stats: "slay"},
    ])
  }
  