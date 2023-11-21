alert("Hello World")

let num1 = prompt("Digite o primeiro número")
let num2 = prompt("Digite o segundo número")
alert(`A soma dos numeros ${num1} + ${num2} = ${Number(num1) + Number(num2)}`)

const num3 = 10
if (typeof num3 === "number") {
  alert(`${num3} é um numero`)
} else {
  alert(`${num3} não é um numero`)
}

const string1 = "Oi"
if (typeof string1 === "string") {
  alert(`${string1} é uma string`)
} else {
  alert(`${string1} não é uma string`)
}

const boolean1 = true
if (typeof boolean1 === "boolean") {
  alert(`${boolean1} é um boleano`)
} else {
  alert(`${boolean1} não é um boleano`)
}

let num4 = prompt("Digite o primeiro número")
let num5 = prompt("Digite o segundo número")
alert(
  `A subtração dos numeros ${num4} - ${num5} = ${Number(num4) - Number(num5)}`
)

let num6 = prompt("Digite o primeiro número")
let num7 = prompt("Digite o segundo número")
alert(
  `A multiplicação dos numeros ${num6} * ${num7} = ${
    Number(num6) * Number(num7)
  }`
)

let num8 = prompt("Digite o primeiro número")
let num9 = prompt("Digite o segundo número")
alert(
  `A divisão dos numeros ${num8} / ${num9} = ${Number(num8) / Number(num9)}`
)

let num10 = prompt("Digite o primeiro número")
let num11 = prompt("Digite o segundo número")
if ((Number(num10) + Number(num11)) % 2 === 0) {
  alert("A soma dos dois números é par")
} else {
  alert("A soma dos dois números não é par")
}

let num12 = prompt("Digite o primeiro número")
let num13 = prompt("Digite o segundo número")
if ((Number(num12) + Number(num13)) % 2 !== 0) {
  alert("A soma dos dois números é impar")
} else {
  alert("A soma dos dois números não é impar")
}
