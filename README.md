# Analizador de Sub-lenguaje C con ANTLR4 y JavaScript

**Materia:** Sintaxis y Semántica de Lenguajes de Programación  
**Tema:** 39568_10  

---

## Descripción

Analizador léxico y sintáctico de un sub-lenguaje de C, construido con ANTLR4 y JavaScript. El analizador procesa un archivo `input.txt` y realiza las siguientes tareas:

1. **Análisis léxico y sintáctico**: informa si la entrada es correcta o contiene errores, indicando la línea y el problema.
2. **Tabla de lexemas-tokens**: muestra los lexemas reconocidos durante el análisis léxico con su token correspondiente.
3. **Árbol de análisis sintáctico**: muestra el árbol de análisis sintáctico concreto en formato de texto.
4. **Interpretación**: traduce el código fuente al lenguaje JavaScript y lo ejecuta.

---

## Requisitos previos

- Java 1.8 o superior
- Node.js 16 o superior
- Visual Studio Code (recomendado)

---

## Instalación

1. Clonar el repositorio:
```
git clone https://github.com/TU_USUARIO/54261.git
cd 54261
```

2. Instalar dependencias:
```
npm install
```

---

## Ejecución

1. Escribir el código fuente en el archivo `input.txt` (ver ejemplos abajo)
2. Ejecutar el analizador:
```
node index.js
```

---

## Ejemplos de entrada

### Entrada válida 1 (input1.txt)
```
do{
    puts("hola");
    puts("chau");
    puts("bien");
    break;
}while(0);
```
**Salida esperada:** Entrada válida, tabla de lexemas, árbol y traducción a JavaScript.

### Entrada válida 2 (input2.txt)
```
do{
    puts("sol");
    puts("luna");
    break;
}while(1);
```
**Salida esperada:** Entrada válida, tabla de lexemas, árbol y traducción a JavaScript.

### Entrada con error 1 (input3.txt)
```
do{
    puts("sol");
    break;
}
```
**Error esperado:** `mismatched input '<EOF>' expecting 'while'`

### Entrada con error 2 (input4.txt)
```
do{
    puts("hola");
}while(0);
```
**Error esperado:** error sintáctico por falta del `break` obligatorio.

---

## Estructura del proyecto

```
├── Calculator.g4                  # Gramática del sub-lenguaje C
├── CustomCalculatorVisitor.js     # Visitor con la semántica del analizador
├── index.js                       # Programa principal
├── input.txt                      # Archivo de entrada actual
├── input1.txt                     # Ejemplo válido 1
├── input2.txt                     # Ejemplo válido 2
├── input3.txt                     # Ejemplo con error 1
├── input4.txt                     # Ejemplo con error 2
├── generated/                     # Archivos generados por ANTLR4
│   ├── CalculatorLexer.js
│   ├── CalculatorParser.js
│   ├── CalculatorListener.js
│   └── CalculatorVisitor.js
└── README.md
```
