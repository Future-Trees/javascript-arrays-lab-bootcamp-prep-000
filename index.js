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

function removeLAstKitten(){
  kittens.slice()
}

