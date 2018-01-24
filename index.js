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

function destructivelyREmoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  [...kittens, name]
}

function prependKitten(name){
  [name,...kittens]
}

function removeLastKitten(){
  kittens.slice(1)
}

function removeFirstKitten(){
  kittens.slice(0,kittens.length(-1))
}
