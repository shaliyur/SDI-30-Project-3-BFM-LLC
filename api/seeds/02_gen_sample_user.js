/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {user_id: 1, First: 'John', Last: 'Doe', Age: 23, Gender: 'Male', Current_Weight: 180, Height_Inches: 73, Goal: 'Lose weight'}
  ]);
};
