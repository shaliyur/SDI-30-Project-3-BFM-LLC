/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('workout_logs').del()
  await knex('workout_logs').insert([
    {Log_id: 1, User_id: '1', Date_recorded: '26 May 2025', Workout_type: 'Legs',  Exercises: '{Exercise1: {name: Squat, weight: 225kg, sets: 3, reps: 12}, Exercise2: {name: Leg Press, weight: 400kg, sets: 4, reps: 15} Exercise3: {name: Hamstring Curl, weight: 120kg, sets: 3, reps: 10}}'},
  ]);
};

