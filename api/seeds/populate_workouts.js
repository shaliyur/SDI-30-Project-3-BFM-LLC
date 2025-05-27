/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('workouts').del()
  await knex('workouts').insert([
    {workout_id: 1, type: 'Push', name: 'Bench', rec_sets: 3, rec_reps: 10, image_url: ''},
    {workout_id: 2, type: 'Push', name: 'Overhead Press', rec_sets: 3, rec_reps: 10, image_url: ''},
    {workout_id: 3, type: 'Push', name: 'Tricep Pushdown', rec_sets: 3, rec_reps: 10, image_url: ''},
    {workout_id: 4, type: 'Push', name: 'Incline Bench Press', rec_sets: 3, rec_reps: 10, image_url:''},
    {workout_id: 5, type: 'Push', name: 'Cable Chest Fly', rec_sets: 3, rec_reps: 10, image_url:''},

    {workout_id: 6, type: 'Pull', name: 'Bent Over Row', rec_sets: 3, rec_reps: 10, image_url:''},
    {workout_id: 7, type: 'Pull', name: 'Pull Ups', rec_sets: 3, rec_reps: 10, image_url:''},
    {workout_id: 8, type: 'Pull', name: 'Lat Pulldowns', rec_sets: 3, rec_reps: 10, image_url:''},
    {workout_id: 9, type: 'Pull', name: 'Tbar Row', rec_sets: 3, rec_reps: 10, image_url:''},
    {workout_id: 10, type: 'Pull', name: 'Deadlift', rec_sets: 3, rec_reps: 10, image_url:''},

    {workout_id: 11, type: 'Legs', name: 'Squat', rec_sets: 3, rec_reps: 10, image_url:''},
    {workout_id: 12, type: 'Legs', name: 'Leg Press', rec_sets: 3, rec_reps: 10, image_url:''},
    {workout_id: 13, type: 'Legs', name: 'Leg Extensions', rec_sets: 3, rec_reps: 10, image_url:''},
    {workout_id: 14, type: 'Legs', name: 'Hamstring ', rec_sets: 3, rec_reps: 10, image_url:''},
    {workout_id: 15, type: 'Legs', name: 'Calf Raises', rec_sets: 3, rec_reps: 10, image_url:''},
  ]);
};
