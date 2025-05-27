/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("workouts", (table) => {
    table.increments('workout_id');
    table.string("type");
    table.string("name");
    table.integer("rec_sets");
    table.integer("rec_reps");
    table.string("image_url");
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("workouts");
};
