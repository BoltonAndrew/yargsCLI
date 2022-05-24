const yargs = require("yargs");
const { addMovie, listMovies } = require("./utils");

const app = (yargsObj) => {
  if (yargsObj.add) {
    addMovie({ title: yargsObj.title, actor: yargsObj.actor });
    console.log(listMovies());
  } else if (yargsObj.addMulti) {
    addMovie({ title: yargsObj.title, actor: yargsObj.actor });
    addMovie({ title: yargsObj.title2, actor: yargsObj.actor2 });
    console.log(listMovies());
  }
};

app(yargs.argv);
