export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Activity').del()

  // Inserts seed entries
  await knex('Activity').insert([
    { name: 'Work' },
    { name: 'Play' },
    { name: 'Study' },
    { name: 'Exercise' },
    { name: 'Social' },
    { name: 'Self Care' },
  ])
}
