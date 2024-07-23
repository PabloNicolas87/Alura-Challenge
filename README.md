# Alura-Challenge

Este proyecto es una aplicación web simple que permite a los usuarios criptografar y descriptografar mensajes utilizando un esquema de sustitución de letras. El texto ingresado se transforma según un conjunto específico de reglas, y también se proporciona la funcionalidad para copiar el texto resultante al portapapeles.

Funcionalidades
    Criptografar: Transforma el texto ingresado aplicando las siguientes reglas de sustitución:

       * e se convierte en enter
       * i se convierte en imes
       * a se convierte en ai
       * o se convierte en ober
       * u se convierte en ufat

    Descriptografar: Reversa la transformación aplicada por la función de criptografía, devolviendo el texto a su forma original.

    Copiar al Portapapeles: Permite copiar el texto resultante (criptografado o descriptografado) al portapapeles del dispositivo.

    Mensajes de Error: Informa al usuario si el campo de texto está vacío o si se ingresaron caracteres no permitidos (letras mayúsculas o acentos).

Uso
    Criptografar un Mensaje:
        Ingrese el texto que desea criptografar en el campo de entrada.
        Haga clic en el botón "Criptografar".
        El mensaje criptografado se mostrará en la sección de resultados.

    Descriptografar un Mensaje:
        Ingrese el texto criptografado en el campo de entrada.
        Haga clic en el botón "Descriptografar".
        El mensaje descriptografado se mostrará en la sección de resultados.

    Copiar el Mensaje:
        Después de criptografar o descriptografar, el usuario puede hacer clic en el botón "Copiar" para copiar manualmente el texto de la sección de resultados.