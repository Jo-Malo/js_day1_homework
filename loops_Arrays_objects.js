var sports = ['football', 'tennis', 'rugby'];
// var firstSport = sports[0];
// console.log(firstSport)
//
// var SecondSport = sports[1];
// console.log(secondSport)

// sports.push('curling');
// console.log(sports)

// var lastSport = sports[sports.length - 1 ];

// console.log(lastSport)

// console.log( sports.pop() );

// sports.unshift('basketball');
// adds to start

// sports.shift()

// console.log(sports);
//
// console.log(sports.splice(3, 1));
// take out at position 3, just one object

// console.log(sports);

// for (var currentSport of sports) {
//   var loudSport currentSport.toUpperCase();

  // console.log(loudSport);
// }

for (var i = 0; i < sports.length; i++) {
  var currentSport = sports[i];
  var loudSport = currentSport.toUpperCase();
  // console.log(loudSport);
}

var movie = {
  title: "It's a Wonderful Life",
  year: 1946,
  language: 'Spanish'
};

console.log( movie.title );

movie.cast = ['James Stewart', 'Donna Reed'];

movie.language = 'English';

movie['language'] = 'French';

movie['subtitle-language'] = 'German';

movie.ratings = {
  critic: 94,
  audience: 95
}

// console.log( movie.ratings.critic );

for (var key in movie) {
  var value =  movie[key];
  //
  // console.log(`The key is ${key}`);
  // console.log(`The value is ${value}`)
}

var keys = Object.keys(movie);

// console.log(keys)

for (var i = 0; i < keys.length; i++) {
  var currentKey = keys[i];

  var currentValue = movie[currentKey];


}

console.log(movie)
