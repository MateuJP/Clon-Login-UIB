# Clon de Login UIB

En este repositorio se presenta un clon del formulario de inicio de sesión de la antigua página de la UIB, desarrollado como parte de un trabajo de investigación para la asignatura de Seguridad en Sistemas de la Información.

Este clon fue creado utilizando la herramienta **httrack**, la cual está instalada por defecto en Kali Linux.

El propósito de esta sección del proyecto de investigación era demostrar lo sencillo que puede ser llevar a cabo un ataque de phishing, específicamente uno basado en código QR conocido como **quishing**.

Se aprovechó el hecho de que, durante la pandemia del COVID-19, en las mesas de la universidad se colocaban códigos QR que los estudiantes debían escanear para registrar sus credenciales y especificar en qué sitio se sentaban. Se demostró cómo en menos de 15 minutos era posible clonar la página de inicio de sesión, alojar el clon en Netlify y configurar el formulario para recibir las credenciales introducidas. Luego, simplemente se tendría que generar códigos QR maliciosos, imprimirlos y reemplazar los legítimos por los maliciosos. El formulario podría configurarse de manera que el usuario no se percatara de que se le han robado las credenciales. Simplemente sería redirigido a la página legítima, donde recibiría un mensaje de error indicando que la contraseña no es válida. Al reintroducir la contraseña, podría acceder al sistema sin darse cuenta de que sus credenciales han sido comprometidas.

![Terminal con httrack](/htrack.png)
![Resultado clonado](/result.png)

## NOTA

Es importante destacar que este proyecto se ha realizado con fines exclusivamente académicos. Nunca se ha sustituido un código QR legítimo ni se han robado ningún tipo de credenciales. Se ha hecho público ahora debido a que el sistema mencionado ya no se utiliza y la página de inicio de sesión ha cambiado, por lo que ya no coincide con el clon.
