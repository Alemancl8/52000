grammar Calculator;

//Gramatica
programa
    : instrucciones EOF
    ;

instrucciones
    : instruccion
    | instrucciones instruccion
    ;

instruccion
    : bucle
    ;

bucle
    : DO LBRACE sentencia RBRACE WHILE LPAREN condicion RPAREN SEMI
    ;

sentencia
    : salida sentencia
    | terminar
    ;

salida
    : PUTS LPAREN cadena RPAREN SEMI
    ;

terminar
    : BREAK SEMI
    ;

condicion
    : CERO
    | UNO
    ;

cadena
    : COMILLA caracteres COMILLA
    ;

caracteres
    : caracter
    | caracteres caracter
    ;

caracter
    : LETRA
    | DIGITO
    | SIMBOLO
    ;
    

//Lexemas
DO      : 'do' ;
WHILE   : 'while' ;
PUTS    : 'puts' ;
BREAK   : 'break' ;

LPAREN  : '(' ;
RPAREN  : ')' ;
LBRACE  : '{' ;
RBRACE  : '}' ;
SEMI    : ';' ;
COMILLA : '"' ;

CERO    : '0' ;
UNO     : '1' ;

LETRA   : [a-zA-Z] ;
DIGITO  : [0-9] ;
SIMBOLO : '.' | ',' | '!' | '?' | ':' | ';' | '*' ;

WS      : [ \t\r\n]+ -> skip ;