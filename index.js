const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var kitArray = [...kittens, name];
  return kitArray;
}

function prependKitten(name) {
  var kitArray = [name, ...kittens];
  return kitArray;
}


function removeFirstKitten() {
  return kittens.slice(1);
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}
