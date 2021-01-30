const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

const onPeopleResponse = function (person) {
  console.log(`hola yo soy ${person.name}`);
};

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucdedio un error al obtener el personaje ${id}`);
}

async function obtenerPersonajes() {
  var ids = [];
  for (var i = 1; i <= 15; i++) {
    ids.push(i);
  }
  var promesas = ids.map((id) => obtenerPersonaje(id));
  try {
    var personajes = await Promise.all(promesas);
    console.table(personajes)
  } catch (id) {
    onError(id);
  }
}

obtenerPersonajes()

// obtenerPersonaje(1)
//     .then((personaje) => {
//       console.log(`El personaje es ${personaje.name}`);
//       return obtenerPersonaje(2);
//     })
//     .then((personaje) => {
//       console.log(`El personaje es ${personaje.name}`);
//       return obtenerPersonaje(3);
//     })
//     .then((personaje) => {
//       console.log(`El personaje es ${personaje.name}`);
//       return obtenerPersonaje(4);
//     })
//     .then((personaje) => {
//       console.log(`El personaje es ${personaje.name}`);
//       return obtenerPersonaje(5);
//     })
//     .then((personaje) => {
//       console.log(`El personaje es ${personaje.name}`);
//       return obtenerPersonaje(6);
//     })
//     .then((personaje) => {
//       console.log(`El personaje es ${personaje.name}`);
//       return obtenerPersonaje(7);
//     })
//     .then((personaje) => {
//       console.log(`El personaje es ${personaje.name}`);
//       return obtenerPersonaje(8);
//     })
//     .then((personaje) => {
//       console.log(`El personaje es ${personaje.name}`);
//       return obtenerPersonaje(9);
//     })
//     .then((personaje) => {
//       console.log(`El personaje es ${personaje.name}`);
//       return obtenerPersonaje(10);
//     })
//     .catch(onError);
