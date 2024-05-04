# First-Games

Este proyecto de Unity es un ejercicio básico de desarrollo de videojuegos que 
contempla 2 juegos distintos:

- Pong
- Simon

## Pong

Para jugar el juego de Pong, no hace falta mas que dar click en el botón del 
menú principal para comenzar a jugar.

### Objetivo

El juego pong pone a competir a 2 jugadores. Cada uno controla una barra de un 
lado de la pantalla, y el objetivo es que la pelota salga del lado de la 
pantalla del contrincante. Cada que la pelota sale por el lado del 
contrincante, se concede 1 punto al jugador que anotó.

### Controles

La barra de la izquierda se mueve con las teclas
- D: abajo
- F: arriba

La barra de la derecha se mueve con las teclas

- J: abajo
- K: arriba

## Simon

Igualmente, se puede jugar haciendo click en el botón del menú principal.
Previo a empezar, se muestra un menú que provee las 2 modalidades de juego:

- **Modalidad Normal**:  El jugador debe seleccionar los botones en el orden 
    exacto en el que la computadora los resaltó.
- **Modalidad Reversa**: El jugador debe seleccionar los botones en el orden 
    inverso al que la computadora resaltó los botones de la secuencia.

### Objetivo

El objetivo del juego es que un solo jugador pueda replicar el patrón que la 
computadora genera en los distintos botones que aparecen en la pantalla. Cada 
ronda, la computadora elige un nuevo botón para agregar a la secuencia y luego 
resalta todos los botones de la secuencia en órden. De acuerdo al modo de 
juego elegido, si este debe ser el mismo, o el inverso orden.

### Controles

El único control que tiene el jugador es el mouse.
- click izquierdo: seleccionar botón

Esta selección únicamente funciona mientras sea el turno del jugador, y no 
hará nada mientras la computadora esté mostrando la nueva secuencia.
