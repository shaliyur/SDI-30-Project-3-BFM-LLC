/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('workout_logs', table => {
    table.increments('Log_id');
    table.integer('User_id');
    table.foreign('User_id').references('user_id').inTable('users')
    table.string('Date_recorded');
    table.string('Workout_type');
    table.string('Exercises');
  })
};
//table.foreign('user_id').references('id').inTable('users');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

  return knex.schema.table('workout_logs', table => {
    table.dropForeign('User_id')
  })
  .then(function() {
    return knex.schema.dropTableIfExists('workout_logs')
  });
};
