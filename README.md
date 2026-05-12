# Analizador de Sub-lenguaje C con ANTLR4 y JavaScript

**Materia:** Sintaxis y Semántica de Lenguajes de Programación  

## Descripción

Analizador léxico y sintáctico de un sub-lenguaje de C, construido con ANTLR4 y JavaScript. El analizador procesa un archivo `input.txt` y realiza las siguientes tareas:

1. **Análisis léxico y sintáctico**: informa si la entrada es correcta o contiene errores, indicando la línea y el problema.
2. **Tabla de lexemas-tokens**: muestra los lexemas reconocidos durante el análisis léxico con su token correspondiente.
3. **Árbol de análisis sintáctico**: muestra el árbol de análisis sintáctico concreto en formato de texto.
4. **Interpretación**: traduce el código fuente al lenguaje JavaScript y lo ejecuta.


## Instalación

1. Repositorio para clonar:

git clone https://github.com/Alemancl8/52000.git
cd 52000

2. Instalar dependencias:
npm install

## Ejecución

1. Escribir con "input.txt" (Ver abajo)
2. Ejecutar el analizador:
node index.js

### Ejemplos de entrada

### Entrada válida (input1.txt)

do{
    puts("hola");
    puts("chau");
    puts("bien");
    break;
}while(0);


### Entrada válida (input2.txt)

do{
    puts("sol");
    puts("luna");
    break;
}while(1);


### Entrada con error (input3.txt)

do{
    puts("sol");
    break;
}


### Entrada con error (input4.txt)

do{
    puts("hola");
}while(0);


## Estructura del proyecto


├── Calculator.g4                  
├── CustomCalculatorVisitor.js     
├── index.js                    
├── input.txt                      
├── input1.txt                     
├── input2.txt                     
├── input3.txt                     
├── input4.txt                     
├── generated/                     
│   ├── CalculatorLexer.js
│   ├── CalculatorParser.js
│   ├── CalculatorListener.js
│   └── CalculatorVisitor.js
└── README.md

