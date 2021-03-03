/*   e
 * v e f -> f
 * v e v -> v
 * f e ? -> f
 * 
 *   ou
 * v ou ? -> v
 * f ou v -> v
 * f ou f -> f
 * 
 *   xor
 * v xor v -> f
 * v xor f -> v
 * f xor v -> v
 * f xor f -> f
 * 
 *    !
 * !v -> f
 * !f -> v
*/

function compras(trabalho1, trabalho2){
    const comrparSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
  //  const comprarTv32 = !!(trabalho1 ^ trabalho2)
  const comprarTv32 = trabalho1 != trabalho2
  const manterSuadavel = !comrparSorvete //operador unario

  return {comrparSorvete, comprarTv50, comprarTv32, manterSuadavel}


}

console.log(true, true)
console.log(true, false)
console.log(false, true)
console.log(false, false)