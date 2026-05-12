import CalculatorVisitor from './generated/CalculatorVisitor.js';

export default class CustomCalculatorVisitor extends CalculatorVisitor {

    constructor() {
        super();
        this.tablaLexemas = [];
        this.codigoJS = [];
        this.indentacion = 0;
    }

    generarTablaLexemas(tokens, ruleNames, parser) {
        console.log('\n=== TABLA DE LEXEMAS-TOKENS ===');
        console.log('Lexema'.padEnd(20) + 'Token');
        console.log('-'.repeat(40));
        tokens.forEach(token => {
            if (token.type === -1) return;
            const nombreToken = parser.symbolicNames[token.type] || 'UNKNOWN';
            const lexema = token.text;
            this.tablaLexemas.push({ lexema, token: nombreToken });
            console.log(lexema.padEnd(20) + nombreToken);
        });
    }

    mostrarArbol(tree, parser) {
        console.log('\n=== ÁRBOL DE ANÁLISIS SINTÁCTICO ===');
        console.log(tree.toStringTree(parser.ruleNames));
    }

    visitPrograma(ctx) {
        console.log('\n=== INTERPRETACIÓN (Traducción a JavaScript) ===');
        this.visitChildren(ctx);
        const codigo = this.codigoJS.join('\n');
        console.log(codigo);
        console.log('\n=== EJECUTANDO CÓDIGO JAVASCRIPT GENERADO ===');
        try {
            eval(codigo);
        } catch (e) {
            console.error('Error al ejecutar: ' + e.message);
        }
    }

    visitInstrucciones(ctx) { this.visitChildren(ctx); }
    visitInstruccion(ctx) { this.visitChildren(ctx); }

    visitBucle(ctx) {
        const condicion = ctx.condicion().getText();
        this.codigoJS.push('do {');
        this.indentacion++;
        this.visitSentencia(ctx.sentencia());
        this.indentacion--;
        this.codigoJS.push('} while (' + condicion + ');');
    }

    visitSentencia(ctx) {
        if (ctx.terminar()) {
            this.visitTerminar(ctx.terminar());
        } else {
            this.visitSalida(ctx.salida());
            if (ctx.sentencia()) {
                this.visitSentencia(ctx.sentencia());
            }
        }
    }

    visitSalida(ctx) {
        const texto = this.obtenerTextoCadena(ctx.cadena());
        const indent = '  '.repeat(this.indentacion);
        this.codigoJS.push(indent + 'console.log("' + texto + '");');
    }

    visitTerminar(ctx) {
        const indent = '  '.repeat(this.indentacion);
        this.codigoJS.push(indent + 'break;');
    }

    obtenerTextoCadena(cadenaCtx) {
        return this.obtenerTextoCar(cadenaCtx.caracteres());
    }

    obtenerTextoCar(caracteresCtx) {
        let texto = '';
        if (caracteresCtx.caracteres()) {
            texto += this.obtenerTextoCar(caracteresCtx.caracteres());
        }
        texto += caracteresCtx.caracter().getText();
        return texto;
    }
}