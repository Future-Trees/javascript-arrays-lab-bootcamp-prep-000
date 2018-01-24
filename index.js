var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
 kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(Broom){
  [...kittens, Broom]
}

function prependKitten(Arnold){
  [Arnold,...kittens]
}

function removeLastKitten(){
  kittens.slice(1)
}

function removeFirstKitten(){
  kittens.slice(0,kittens.length-1)
}
