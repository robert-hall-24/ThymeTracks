export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('activity').del()

  // Inserts seed entries
  await knex('activity').insert([
    { id: 1, activity_name: 'Work', hours: 0, stats: 'Sample Data' },
    { id: 2, activity_name: 'Play', hours: 0, stats: 'Sample Data' },
    { id: 3, activity_name: 'Study', hours: 0, stats: 'Sample Data' },
    { id: 4, activity_name: 'Execrise', hours: 0, stats: 'Sample Data' },
    { id: 5, activity_name: 'Social', hours: 0, stats: 'Sample Data' },
    { id: 6, activity_name: 'Self Care', hours: 0, stats: 'Sample Data' },
  ])
}
