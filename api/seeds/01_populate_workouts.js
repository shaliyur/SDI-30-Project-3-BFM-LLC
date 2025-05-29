/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('workouts').del()
  await knex('workouts').insert([
    {workout_id: 1, type: 'Push', name: 'Bench', rec_sets: 3, rec_reps: 10, image_url: 'https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {workout_id: 2, type: 'Push', name: 'Overhead Press', rec_sets: 3, rec_reps: 10, image_url: 'https://images.pexels.com/photos/4720786/pexels-photo-4720786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {workout_id: 3, type: 'Push', name: 'Tricep Extension', rec_sets: 3, rec_reps: 10, image_url: 'https://images.pexels.com/photos/13616289/pexels-photo-13616289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {workout_id: 4, type: 'Push', name: 'Incline Bench Press', rec_sets: 3, rec_reps: 10, image_url:'https://images.pexels.com/photos/14623620/pexels-photo-14623620.jpeg'},
    {workout_id: 5, type: 'Push', name: 'Cable Chest Fly', rec_sets: 3, rec_reps: 10, image_url:'https://images.pexels.com/photos/5327505/pexels-photo-5327505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},

    {workout_id: 6, type: 'Pull', name: 'Bent Over Row', rec_sets: 3, rec_reps: 10, image_url:'https://images.pexels.com/photos/3025027/pexels-photo-3025027.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {workout_id: 7, type: 'Pull', name: 'Pull Ups', rec_sets: 3, rec_reps: 10, image_url:'https://images.pexels.com/photos/7187880/pexels-photo-7187880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {workout_id: 8, type: 'Pull', name: 'Lat Pulldowns', rec_sets: 3, rec_reps: 10, image_url:'https://images.pexels.com/photos/20379154/pexels-photo-20379154/free-photo-of-a-training-athlete-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {workout_id: 9, type: 'Pull', name: 'Single Row', rec_sets: 3, rec_reps: 10, image_url:'https://images.pexels.com/photos/10754973/pexels-photo-10754973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {workout_id: 10, type: 'Pull', name: 'Deadlift', rec_sets: 3, rec_reps: 10, image_url:'https://images.pexels.com/photos/12652601/pexels-photo-12652601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},

    {workout_id: 11, type: 'Legs', name: 'Squat', rec_sets: 3, rec_reps: 10, image_url:'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {workout_id: 12, type: 'Legs', name: 'Leg Press', rec_sets: 3, rec_reps: 10, image_url:'https://images.pexels.com/photos/3076512/pexels-photo-3076512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {workout_id: 13, type: 'Legs', name: 'Leg Extensions', rec_sets: 3, rec_reps: 10, image_url:'https://images.pexels.com/photos/13315489/pexels-photo-13315489.jpeg'},
    {workout_id: 14, type: 'Legs', name: 'Hamstring Curl', rec_sets: 3, rec_reps: 10, image_url:'https://images.pexels.com/photos/3757377/pexels-photo-3757377.jpeg?auto=compress&cs=tinysrgb&w=800'},
    {workout_id: 15, type: 'Legs', name: 'Calf Raises', rec_sets: 3, rec_reps: 10, image_url:'https://images.pexels.com/photos/13965339/pexels-photo-13965339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  ]);
};



// video_url
// bench , video_url: 'https://www.youtube.com/watch?v=tuwHzzPdaGc'
// overhead Press , video_url: 'https://www.youtube.com/watch?v=j7ULT6dznNc'
// tricep Extension , video_url: 'https://www.youtube.com/watch?v=LzwgB15UdO8'
// incline bench , video_url: 'https://www.youtube.com/watch?v=uIzbJX5EVIY'
// cable Fly , video_url: 'https://www.youtube.com/watch?v=OPYrUGZL8nU'

// bent over Row , video_url: 'https://www.youtube.com/watch?v=paCfxhgW6bI'
// pull Ups , video_url: 'https://www.youtube.com/watch?v=5oxviYmdHCY'
// lat Pulldowns , video_url: 'https://www.youtube.com/watch?v=iKrKgWR9wbY'
// single Row , video_url: 'https://www.youtube.com/watch?v=YZgVEy6cmaY'
// deadlifts , video_url: 'https://www.youtube.com/watch?v=wjsu6ceEkAQ'

// Squat , video_url: 'https://www.youtube.com/watch?v=R2dMsNhN3DE'
// leg Press , video_url: 'https://www.youtube.com/watch?v=sEM_zo9w2ss'
// leg Extension , video_url: 'https://www.youtube.com/watch?v=0fl1RRgJ83I'
// hamstrings , video_url: 'https://www.youtube.com/watch?v=OOUtV11bSa8'
// calf raise , video_url: 'https://www.youtube.com/watch?v=RBslMmWqzzE'