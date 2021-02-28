// Ejercicio día de la semana
// creamos variable para almacenar el dia a la semana
let dia = prompt("Ingresa un dia a la semana");
// convertir lo que escriba el usuario en minusculas (toUpperCase para mayusculas)
dia = dia.toLowerCase();
// validamos el dia si es entre semana o fin de semana
if (
  dia == "lunes" ||
  dia == "martes" ||
  dia == "miercoles" ||
  dia == "miércoles" ||
  dia == "jueves" ||
  dia == "viernes"
) {
  alert("Es un dia entre semana");
} else {
  if (dia == "sabado" || dia == "sábado" || dia == "domingo") {
    alert("Es un fin de semana");
  } else {
    alert("Porfavor ingresar un día de la semana");
  }
}
/**
 *  Validaciones
 * 1 - Que pasa si no escriben nada
 * 2 - Que pasa si usan Mayusculas
 * 3 - Si escribe otra cosa que no sea lo silicitado
 * 4 - Días con Tildes
 */