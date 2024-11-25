DOCUMENTACIÓN UNIFOCUS

1. Abstract
UNIFOCUS es una plataforma web diseñada para facilitar a los estudiantes la búsqueda, selección y acceso a clases virtuales enfocadas en la preparación para ingresar a la universidad. El sistema permite filtrar clases según horarios y materias, brindando una experiencia personalizada y eficiente. Los usuarios pueden visualizar los detalles de las clases disponibles y acceder a los datos bancarios necesarios para realizar el pago correspondiente. Una vez confirmado el pago, las clases adquiridas se reflejan automáticamente en la sección "Profile", donde los estudiantes pueden gestionar sus horarios y acceder a los enlaces de las sesiones virtuales. UNIFOCUS combina simplicidad, accesibilidad y seguridad para ofrecer una solución integral a las necesidades educativas de los estudiantes preuniversitarios.


2. Funcionalidades principales
	2.1. Home
Los usuarios pueden seleccionar entre las opciones de horarios y materias disponibles.
Al hacer clic en el botón Buscar, se despliegan las clases que coinciden con la búsqueda, siendo las materias únicamente Español y Matemáticas, los temas principales que se incluyen en exámenes de admisión.
Cada clase muestra una breve descripción que incluye información como el nombre de la materia, el horario disponible, profesor y el costo.
	2.2. Cursos
Al seleccionar una clase, el usuario accede a una pestaña de detalles con los datos bancarios para realizar la transferencia del pago.
	2.3. Profile
Una vez confirmado el pago, las clases seleccionadas aparecen en esta sección.
El estudiante puede ver el horario, acceder al enlace de la clase virtual y consultar otros detalles importantes como el nombre del profesor y la materia.


3. Flujo de usuario
	* Inicio: El usuario accede a la página Home y usa el filtro para buscar clases según sus preferencias.
	* Selección de clases: Al encontrar una clase de interés, selecciona la opción para ver más detalles.
	* Pago: El usuario realiza la transferencia utilizando los datos proporcionados.
	* Confirmación: Tras la verificación del pago, las clases se cargan automáticamente en su perfil.


4. Tecnologías utilizadas
 Frontend: React.js con Vite como herramienta de desarrollo para una construcción más rápida y optimizada del proyecto.
 Backend: Firebase, que proporciona una solución de backend como servicio (BaaS) para la autenticación, base de datos y almacenamiento. Esto elimina la necesidad de gestionar un servidor manualmente.
 Base de datos: Cloud Firestore, la base de datos NoSQL de Firebase, utilizada para almacenar y sincronizar datos en tiempo real.
 API: APIs de Firebase (Auth, Firestore) para manejar autenticación, autorización y acceso a la base de datos.

5. Base de datos:
Entidades en la base de datos:
*User:
email (cadena): correo electrónico del usuario.
username (cadena): nombre de usuario.
*Payments:
classId (número): identificador único de la clase pagada.
email (cadena): correo electrónico del usuario que realizó el pago.
price (cadena): costo de la clase.
timestamp (marca de tiempo): fecha y hora del pago.
*Classes:
descripcion (cadena): descripción de la clase (ejemplo: "Clase de Matemáticas de tres meses.").
hora (cadena): horario de la clase (ejemplo: "11 AM").
id (número): identificador único de la clase.
link (cadena): enlace a la clase 
materia (cadena): materia impartida 
precio (cadena): costo de la clase 
profesor (cadena): nombre del profesor encargado.

6. Seguridad
Los datos del usuario (nombre, correo, contraseña) se almacenan en una base de datos segura. Aunque la transferencia es externa, se recomienda ofrecer guías claras y enlaces verificados. Se utiliza un sistema de inicio de sesión con contraseñas encriptadas para proteger las cuentas de los estudiantes.


7. Casos de uso
	* Caso 1: 
1. El usuario selecciona un horario y materia en el filtro. 
2. El sistema muestra las opciones correspondientes.
3. El usuario selecciona una clase, realiza el pago y confirma su inscripción.
4. La clase aparece en su perfil tras la verificación.
	* Caso 2:
1. El usuario inicia sesión y navega a la pestaña Profile.
2. Se despliega una lista de clases activas con accesos directos y horarios.
