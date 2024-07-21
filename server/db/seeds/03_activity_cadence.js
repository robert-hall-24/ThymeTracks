export async function seed(knex) {
  // Deletes ALL existing entries
  return knex('Activity_Cadence')
    .del()
    .then(async function () {
      // Get all distinct Activity_IDs and Cadence_IDs from their respective tables
      const activityIds = await knex('Activity').distinct('ID')
      const cadenceIds = await knex('Cadence').distinct('ID')

      // Create an array to store all the seed data
      const seedData = []

      // Loop through each combination of Activity_ID and Cadence_ID
      activityIds.forEach((activity) => {
        cadenceIds.forEach((cadence) => {
          seedData.push({
            Activity_ID: activity.ID,
            Cadence_ID: cadence.ID,
            Hours: 1, // Initialize Hours to zero for all combinations
          })
        })
      })

      // Insert all seed entries into the Active_Cadence table
      return knex('Activity_Cadence').insert(seedData)
    })
}
