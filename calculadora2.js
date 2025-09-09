// calculadora.js - Uma calculadora que funciona no terminal

// Captura os argumentos da linha de comando
const args = process.argv.slice(2);

// Verificar se o usuário passou exatamente 3 argumentos (número, operação, número)
if (args.length !== 3) {
  console.log('❌ Ops! Você precisa digitar exatamente 3 coisas:');
  console.log('📘 Uso correto: node calculadora.js <número1> <operação> <número2>');
  console.log('💡 Exemplo: node calculadora.js 10 + 5');
  console.log('⚙️ Operações disponíveis: + - * /');
  process.exit(1);
}

// Extrair os valores do array
const num1 = parseFloat(args[0]); // primeiro número
const operacao = args[1];         // operação (+, -, *, /)
const num2 = parseFloat(args[2]); // segundo número

// Verificar se os números são válidos
if (isNaN(num1) || isNaN(num2)) {
  console.log('❌ Erro: Os valores devem ser números válidos!');
  console.log('💡 Exemplo correto: node calculadora.js 10.5 + 3.2');
  process.exit(1);
}

console.log(`🧮 Calculando: ${num1} ${operacao} ${num2}`);

// Variável para guardar o resultado
let resultado;

// Estrutura de decisão (switch-case) para escolher a operação
switch (operacao) {
  case '+':
    resultado = num1 + num2;
    console.log('➕ Fazendo uma soma...');
    break;

  case '-':
    resultado = num1 - num2;
    console.log('➖ Fazendo uma subtração...');
    break;

  case '*':
    resultado = num1 * num2;
    console.log('✖️ Fazendo uma multiplicação...');
    break;

  case '/':
    // Verificar divisão por zero
    if (num2 === 0) {
      console.log('❌ Erro: Não é possível dividir por zero!');
      console.log('📘 Dica: Divisão por zero é indefinida na matemática.');
      process.exit(1);
    }
    resultado = num1 / num2;
    console.log('➗ Fazendo uma divisão...');
    break;

  default:
    console.log(`❌ Erro: Operação '${operacao}' não é válida!`);
    console.log('⚙️ Operações disponíveis: + - * /');
    process.exit(1);
}

// Exibir o resultado final
console.log('');
console.log('📌 Resultado:');
console.log(`${num1} ${operacao} ${num2} = ${resultado}`);

// Se for divisão, mostrar também com mais casas decimais
if (operacao === '/' && resultado % 1 !== 0) {
  console.log(`🔎 Resultado detalhado: ${resultado.toFixed(4)}`);
}
