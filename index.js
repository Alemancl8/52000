import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import CustomCalculatorVisitor from "./CustomCalculatorVisitor.js";
import { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new CalculatorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new CalculatorParser(tokenStream);

    // Regla inicial de nuestra gramática
    let tree = parser.programa();

    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");

        const visitor = new CustomCalculatorVisitor();

        // Tarea 2: Tabla de lexemas-tokens
        tokenStream.fill();
        visitor.generarTablaLexemas(tokenStream.tokens, parser.ruleNames, parser);

        // Tarea 3: Árbol de análisis sintáctico
        visitor.mostrarArbol(tree, parser);

        // Tarea 4: Interpretación y traducción a JavaScript
        visitor.visit(tree);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();