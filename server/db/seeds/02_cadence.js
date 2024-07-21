export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Cadence').del()

  // Inserts seed entries
  await knex('Cadence').insert([
    { name: 'Daily', hours_max: 24 }, // Example value for Daily cadence
    { name: 'Weekly', hours_max: 168 }, // Example value for Weekly cadence
    { name: 'Monthly', hours_max: 730 }, // Example value for Monthly cadence
  ])
}
