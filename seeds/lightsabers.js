
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lightsabers').del()
    .then(function () {
      // Inserts seed entries
      return knex('lightsabers').insert([
        {id: 1, color: 'red'},
        {id: 2, color: 'green'},
        {id: 3, color: 'yellow'},
        {id: 4, color: 'red'}
      ]);
    });
};
