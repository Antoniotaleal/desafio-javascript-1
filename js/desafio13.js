function contaVogais(str) {
  return (str.match(/[aeiou]/g) || []).length
}
