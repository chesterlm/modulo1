# modulo1
## 1. Lógica en Programación y su Importancia en Desarrollo Web Frontend

**Pregunta:**
¿Qué es la lógica en el contexto de la programación y por qué es importante en el desarrollo web Frontend?

**Respuesta:**
La lógica en programación se refiere a la capacidad de pensar y estructurar el código de manera clara y coherente. En el desarrollo web Frontend, la lógica es esencial para diseñar interfaces interactivas y funcionales. Un código lógico facilita la comprensión, mantenimiento y escalabilidad del proyecto.

## 2. Concepto de Algoritmo y Ejemplo Simple

**Pregunta:**
Define el concepto de "algoritmo" y proporciona un ejemplo relacionado con la lógica de programación.

**Respuesta:**
Un algoritmo es un conjunto de pasos o reglas definidas para realizar una tarea específica. Ejemplo: Algoritmo para sumar dos números: 
```javascript
1. Ingresar el primer número (a)
2. Ingresar el segundo número (b)
3. Sumar a y b
4. Mostrar el resultado
```

## 3. Estructuras de Control en Programación

**Pregunta:**
¿Qué son las estructuras de control en programación y cuáles son los tipos más comunes?

**Respuesta:**
Las estructuras de control dirigen el flujo de ejecución del programa. Tipos: condicionales (if, switch) y bucles (for, while). Ejemplo de estructura condicional:
```javascript
if (condicion) {
  // Código si la condición es verdadera
} else {
  // Código si la condición es falsa
}
```

## 4. Declaración de Variables y Constantes en JavaScript

**Pregunta:**
¿Cómo se declaraban variables y constantes antes de ECMAScript 6 y cómo ES6 mejoró esto?

**Respuesta:**
Antes de ES6, se usaban `var` para variables y no existían constantes. Con ES6, se introdujeron `let` y `const`, mejorando la legibilidad y solucionando problemas de alcance.

## 5. Declaración de Funciones en JavaScript

**Pregunta:**
¿Cómo se declaran funciones en JavaScript y cuál es la diferencia entre declaración, expresión y función de flecha?

**Respuesta:**
Declaración:
```javascript
function suma(a, b) {
  return a + b;
}
```
Expresión:
```javascript
const suma = function(a, b) {
  return a + b;
};
```
Flecha:
```javascript
const suma = (a, b) => a + b;
```

## 6. Importancia de las Funciones en Desarrollo Web Frontend

**Pregunta:**
¿Por qué es necesario el uso de funciones en el desarrollo web Frontend?

**Respuesta:**
Las funciones son esenciales por su reutilización, modularidad y claridad en el código. Ejemplos: manejo de eventos, AJAX, operaciones repetitivas.

## 7. Diferencia entre Parámetro y Argumento

**Respuesta:**
El parámetro es la variable en la definición de una función, mientras que el argumento es el valor real pasado a la función.

## 8. Concepto de Callback con Ejemplo

**Respuesta:**
Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que esta finaliza. Ejemplo:
```javascript
function realizarOperacion(callback) {
  // Hacer algo
  callback();
}
realizarOperacion(() => console.log('Operación completada'));

## 9. Hoisting en JavaScript

**Respuesta:**
El hoisting eleva las declaraciones de variables y funciones al inicio del ámbito. Ejemplo:
```javascript
console.log(mensaje); // undefined
var mensaje = 'Hola';
```

## 10. Concepto de Objeto en JavaScript

**Respuesta:**
Un objeto en JavaScript es una estructura de datos que almacena pares clave-valor. Se declara con llaves `{}`.

## 11. Propiedades y Métodos en Objetos

**Respuesta:**
Las propiedades almacenan datos, mientras que los métodos son funciones dentro de un objeto.

## 12. Acceso a Propiedades de Objetos

**Respuesta:**
Se accede a las propiedades con la notación de punto (`objeto.propiedad`) o corchetes (`objeto['propiedad']`).

## 13. Recorrer Propiedades de un Objeto

**Respuesta:**
Sí, mediante bucles (`for...in`). Útil para procesar dinámicamente las propiedades de un objeto.

## 14. Utilidad de Objetos en Programación Web

**Respuesta:**
Los objetos son útiles para modelar y organizar datos complejos. Pueden almacenar cualquier tipo de dato.

## 15. Concepto de Array en JavaScript

**Respuesta:**
Un array es un objeto que almacena elementos indexados. Se declara con corchetes `[]`.

## 16. Acceso a Elementos de un Array

**Respuesta:**
Se accede a elementos mediante su índice. Ejemplo: `array[0]`.

## 17. Funciones de Arrays y su Utilidad

**Respuesta:**
Funciones como `map`, `filter` y `reduce` son esenciales para transformar y procesar datos en programación web.

## 18. Ejemplo de Transformación y Filtrado con Función de Array

**Respuesta:**
```javascript
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(num => num * num);
const pares = numeros.filter(num => num % 2 === 0);
```
Estos ejemplos utilizan funciones de array para transformar y filtrar datos.

## Módulo sobre HTML, CSS y Responsive Design

**1. Significado y Función de HTML**

HTML (HyperText Markup Language) es el lenguaje de marcado utilizado para estructurar el contenido en la web. Su función principal es definir la estructura y jerarquía de la información, permitiendo la creación de páginas web.

**2. Estructura Básica de un Documento HTML**

La estructura básica incluye las etiquetas `<html>`, `<head>`, `<title>`, `<body>`, entre otras. Ejemplo:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documento HTML</title>
</head>
<body>
  <!-- Contenido de la página -->
</body>
</html>
```

**3. CSS y su Propósito en Desarrollo Web**

CSS (Cascading Style Sheets) se utiliza para dar estilo y presentación al contenido HTML. Su propósito es controlar la apariencia visual de la página.

**4. Selectores CSS y Especificidad**

Los selectores eligen elementos HTML para aplicar estilos. La especificidad determina qué estilo prevalece en conflictos. Ejemplos:
```css
#id-selector { color: red; } /* Específico */
body p { color: blue; } /* Menos específico */
```

**5. Diferencias entre Estilos Inline, Embedded y External**

Inline se aplica directamente a un elemento, Embedded está dentro del documento HTML, External se carga desde un archivo separado. Se recomienda el uso de estilos externos para mantener la separación de preocupaciones.

**6. Flexbox y su Utilización para el Diseño Web**

Flexbox es un modelo de diseño que permite organizar elementos en una línea o columna. Se utiliza para crear diseños flexibles y eficientes.

**7. Propiedades Flexbox y su Función en Diseños Flexibles**

Principales propiedades: `display: flex;` para activar Flexbox, `justify-content` para alinear horizontalmente, `align-items` para alinear verticalmente.

**8. CSS Grid Layout y Diferencias con Flexbox**

CSS Grid Layout permite crear diseños bidimensionales. Se diferencia de Flexbox al organizar elementos en filas y columnas.

**9. Ejemplo de Cuadrícula Sencilla con CSS Grid**

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

**10. Significado del Diseño Responsivo**

El diseño responsivo se adapta a diferentes tamaños de pantalla y dispositivos, garantizando una experiencia óptima para el usuario.

**11. Técnicas para Lograr el Diseño Responsivo**

a) Uso de Media Queries.
b) Unidades Relativas (por ejemplo, `%` y `em`).
c) Imágenes Fluidas con `max-width`.

Estas estrategias permiten ajustar el diseño según el dispositivo y mejorar la accesibilidad.

## Módulo sobre el DOM (Modelo de Objeto de Documento)

**1. Significado del DOM en Programación Web**

El DOM (Modelo de Objeto de Documento) es una representación en memoria de la estructura y contenido de un documento HTML. Permite la interacción dinámica y manipulación de elementos mediante JavaScript.

**2. Diferencia entre el DOM y HTML**

HTML es la estructura estática de la página, mientras que el DOM es una representación dinámica en memoria que permite modificar y interactuar con la estructura HTML.

**3. Importancia de Manipular el DOM en Desarrollo Web Frontend**

Manipular el DOM es esencial para crear páginas web interactivas y dinámicas. Permite actualizar contenido, responder a acciones del usuario y mejorar la experiencia de navegación.

**4. Eventos del DOM y su Función**

Los eventos del DOM son acciones detectadas por la aplicación web, como clics o cambios. Su función es permitir la interactividad, desencadenando acciones o ejecutando funciones.

**5. Ejemplos Prácticos de Eventos**

- "click": Detecta clics en un elemento.
- "submit": Se activa al enviar un formulario.
- "load" o "DOMContentLoaded": Se ejecuta cuando la página o el DOM se carga completamente.

**6. Importancia de Manejar Eventos en Interacción Usuario-Web**

Manejar eventos es crucial para crear experiencias interactivas. Los controladores de eventos se añaden para responder a acciones específicas del usuario, mejorando la usabilidad.

**7. Métodos para Seleccionar Elementos del DOM en JavaScript**

a) `getElementById('id')`.
b) `getElementsByClassName('clase')`.
c) `querySelector('selector')`.

**8. Crear y Agregar Elementos al DOM con JavaScript**

```javascript
// Crear un nuevo párrafo
const nuevoParrafo = document.createElement('p');
// Agregar contenido al párrafo
nuevoParrafo.textContent = 'Nuevo párrafo';
// Agregar el párrafo al DOM
document.body.appendChild(nuevoParrafo);
```

**9. Importancia de la Manipulación del DOM en Aplicaciones Dinámicas**

La manipulación del DOM es clave para actualizar dinámicamente la interfaz de usuario, respondiendo a la entrada del usuario sin recargar la página.

**10. Conceptos "Event Bubbling" y "Event Delegation"**

- "Event Bubbling": Propagación de eventos desde el elemento objetivo hasta el ancestro.
- "Event Delegation": Asignar un solo controlador de eventos al ancestro y gestionar eventos de múltiples elementos hijos.

**11. Relevancia en la Gestión de Eventos en Páginas Web Interactivas**

"Event Bubbling" y "Event Delegation" son fundamentales para gestionar eficientemente eventos en páginas con muchos elementos, mejorando el rendimiento y mantenimiento del código.

## Módulo sobre Comunicación en Desarrollo Web

**1. localStorage y sessionStorage**

Ambos son mecanismos de almacenamiento en el navegador. `localStorage` persiste datos sin fecha de expiración, mientras que `sessionStorage` almacena datos de sesión que se borran al cerrar la pestaña.

**2. Diferencias Claves entre localStorage y sessionStorage**

La principal diferencia radica en la duración de almacenamiento. `localStorage` persiste más allá de la sesión actual, mientras que `sessionStorage` se limita a la sesión actual.

**3. Utilidad y Límite de Capacidad de Almacenamiento**

Son útiles para almacenar datos localmente sin depender del servidor. El límite de capacidad es de alrededor de 5 MB por dominio.

**4. Promesas en JavaScript y su Utilización**

Las promesas representan un valor eventualmente disponible o un error. Se utilizan para manejar operaciones asincrónicas de manera más legible y eficiente.

**5. Asincronía y Uso de Promesas**

La asincronía en programación se refiere a operaciones que no bloquean la ejecución. Las promesas permiten gestionar estas operaciones de manera ordenada y evitar el callback hell.

**6. Ejemplo de Promesa para Operación Asincrónica**

```javascript
const fetchData = new Promise((resolve, reject) => {
  // Operación asincrónica (por ejemplo, solicitud de red)
  if (solicitudExitosa) {
    resolve(datos);
  } else {
    reject('Error en la solicitud');
  }
});
```

**7. JSON Server en Desarrollo Web**

JSON Server simula una API REST falsa utilizando un archivo JSON como base de datos. Es útil para desarrollar y probar aplicaciones frontend sin una API real.

**8. Utilidad de Simular una API REST Falsa con JSON Server**

Facilita el desarrollo frontend al permitir la simulación de respuestas de una API sin necesidad de un backend funcional.

**9. Diferencias entre .then().catch() y async/await**

`.then().catch()` es la forma tradicional de manejar promesas, mientras que `async/await` es una sintaxis más moderna y legible.

**10. Configuración de una API Falsa con JSON Server y Solicitudes HTTP**

Ejemplo:
```bash
json-server --watch db.json --port 3000
```

**11. Diferencias entre Fetch y Axios**

Ambos son utilizados para realizar solicitudes HTTP en JavaScript. `Fetch` es nativo en el navegador, mientras que `Axios` es una librería externa con características adicionales y una sintaxis más sencilla.

**12. Importancia de las Peticiones HTTP en Aplicaciones Web Modernas**

Las peticiones HTTP son esenciales para la comunicación entre el frontend y el backend, permitiendo la transferencia de datos de forma eficiente.

**13. Ejemplos de Uso de Fetch y Axios**

Fetch:
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

Axios:
```javascript
axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

**14. Importancia del Manejo de Errores en Promesas**

El manejo adecuado de errores en promesas garantiza que los fallos no detengan la ejecución y permiten una gestión controlada de situaciones inesperadas.

**15. Manejo de Errores en Promesas con catch**

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

**16. Diferencias entre .then().catch() y try/catch**

`.then().catch()` maneja errores en el contexto de promesas, mientras que `try/catch` maneja errores de manera más general, pero no funciona directamente con promesas.

**17. Ejemplo de Manejo de Error en Promesa con Solicitud de Red**

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```