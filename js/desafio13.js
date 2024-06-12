function contaVogais(str) {
  return (str.match (/[aeiou]/g) || []).length
}

console.log(contaVogais(str))