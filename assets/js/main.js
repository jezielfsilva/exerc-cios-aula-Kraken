/*  Exercícios sobre arrays */

/*  1 - Crie uma array com suas musicas favoritas
  (ao menos 5) */
var favoriteMusic = ['The Scientist', 'Back At One', 'Light', 'Photograph', 'Ironic'];

console.log(favoriteMusic);

/*  2 - Retire a primeira música e guarde em uma variável */

var excMusic = favoriteMusic.shift();

console.log(excMusic);

/*  3 - Retire a ultima música e guarde em uma variável */

var Musicexcl = favoriteMusic.pop();

console.log(Musicexcl);

/*  4 - Crie uma segundo array com os nomes dos cantores
  e junte ele com o array de musicas */

  var artists = ['Coldplay', 'Brian McNight', 'Sleeping At Last', 'Nickelback', 'Alanis Morissette'];

  console.log(artists);

  var art = artists.concat(favoriteMusic);

  console.log(art);

/*  5 - Encontre a música com o maior nome dentro do array */

  const bestSong = favoriteMusic.sort((a,b) => (a.length > b.length ? -1 : 1));

  console.log(bestSong[0]);


/*  Exercícios sovbre objetos */

/* 1 - Crie um objeto descrevendo você (nome, idade, amigos,
  filmes favoritos, etc.) */

  const Me = {
    name: "Jeziel",
    age: 33,
    friends: ["Edison", "Jorge", "David", "Lucas", "Carlos Henrique", "Danilo",],
    films: ["Vingadores", "Star Wars", "Man of Steel", "Independence Day", "Resident Evil", "Mad Max"]
  }

  console.log(Me);

/* 2 - Altere o seu nome e coloque o nome do seu irmão/irmã */

  Me.name = "Samuel";

  console.log(Me);

/* 3 - Adicione o nome de sua mãe/pai no objeto */
  Me.dad = "Antonio Adelino";

  console.log(Me);


/* 4 - Delete alguma propriedade desse objeto */

  delete Me.age;

  console.log(Me);