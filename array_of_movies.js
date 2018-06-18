var movies = [
  {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    director: 'Frank Capra',
    cast: [
      'James Stewart',
      'Donna Reed'
    ],
    ratings: {
      critic: 94,
      audience: 95
    }
  },
  {
    title: 'Black Panther',
    year: 2018,
    director: 'Ryan Coogler',
    cast: [
      'Chadwick Boseman',
      'Michael B. Jordan'
    ],
    ratings: {
      critic: 97,
      audience: 77
    }
  },
  {
    title: 'Star Wars: The Last Jedi',
    year: 2017,
    director: 'Rian Johnson',
    cast: [
      'Mark Hamill',
      'Carrie Fisher'
    ],
    ratings: {
      critic: 91,
      audience: 48
    }
  },
  {
    title: 'Citizen Kane',
    year: 1941,
    director: 'Orson Welles',
    cast: [
      'Joseph Cotten',
      'Dorothy Comingore'
    ],
    ratings: {
      critic: 100,
      audience: 90
    }
  },
]
;

// for (var movie of movies) {
//   var title = movie.title;
//   var caps = title.toUpperCase();
//   movie.title = caps;
// }
// console.log(movies);

// for (var movie of movies) {
//    if (movie.title === 'CITIZEN KANE')  {
//      console.log(movie.year);
//    }
//  }
// console.log(movie.year);



// for (var i = 0; i < movies.length; i++) {
//   var movie = movies[i];
//   var audienceRating = movie.ratings.audience;
//   console.log(audienceRating);
// }



for (var movie of movies)  {
  var ratings = movie.ratings;

  for (var ratingType in ratings) {
    var score = ratings[ratingType];
    console.log(ratingType, 'rating is', score);
  }
  var averageRating = (ratings.audience + ratings.critic) / 2
  console.log('average rating is', averageRating)
}
