//Arreglo simple (1 Dimension)
//var colaboradores = [
  //  "Juan",
  //  "Pedro",
   // "Francisco"

//];

//var colaboradores = [
   // {
   //     rut: "12.345.678-9",
   //     nombre: "Juan Fica",
   //     activo: true,
   //     salario_hora: 5150.65,
   //     horas_trabajadas: 38
   // },
   // {
    //    rut: "23.456.789-0",
    //    nombre: "Monica Rojas",
    //    activo: true,
     //   salario_hora: 6150.85,
    //    horas_trabajadas: 35
    //},
    //{
      //  rut: "15.765.234-3",
      //  nombre: "Francisco Gonzalez",
      //  activo: false,
      //  salario_hora: 4850.85,
      //  horas_trabajadas: 0
  //  }
//]

//f//or (let index = 0; index < colaboradores.length; index++) {
   //var colaborador = colaboradores[index];
   //console.log("Nombre", colaborador.nombre, typeof colaborador.nombre);
   //console.log("Salario hora:", colaborador["salario_hora"], typeof colaborador.salario_hora.hora);
   //console.log("Activo", colaborador.activo, typeof colaborador.activo);
   //console.log("------------------------------------------------")
    
//}   

//console.log(colaboradores)


//definicion de un arreglo vacio.
var colaboradores   = []

//QuerySelector, lo utilizamos para apuntar a un elemento con selectores iguales a los de CSS
var inputRut = document.getElementById("txt-rut");
var inputNombre = document.getElementById("txt-nombre");
var inputSalarioHora = document.getElementById("txt-salario-hora");
var inputHorasTrabajadas = document.getElementById("txt-horas-trabajadas");
//getELementById la utilizamos para apuntar a un elemento con su ID.
var checkActivo = document.getElementById("check-activo");

// Definición de función con retorno para calcular salarios
function calcularSalario(salarioHora, horasTrabajadas) {
    var salario = salarioHora * horasTrabajadas
    return salario
    
}
//Definición de función para agregar un colaborador al arreglo.
function agregarColaborador(rut, nombre, salario, horas, activo){
    //Función push incorpora un nuevo elemento al arreglo y lo ubica en la última posición
    colaboradores.push({
        rut: rut,
        nombre: nombre,
        salario_hora: salario,
        horas_trabajadas: horas,
        activo: activo,
        salario_neto: calcularSalario(salario, horas) //llamado de la funcion para calculo de salario
    })
    //mostrar valor actual del arreglo de colaboradores(lo muestra por consola del navegador)
    console.log(colaboradores)
} 
//captura del evento submit del formulario, con este evento podremos llamar a la funcion que agrega un nuevo colaborador al arreglo principal
document.getElementById("formulario").addEventListener("submit",function(ev){
    //prevenDefault() es una funcion que detiene el envio de datos del formulario(event submit)
    ev.preventDefault();
    //invocar funcion que agrega un colaborador al arreglo
    agregarColaborador(inputRut.value, inputNombre.value, inputSalarioHora.value, inputHorasTrabajadas.value, checkActivo.checked)
    
    //lineas pa borrar los valores del formulario
    inputRut.value = ""
    inputNombre.value = ""
    inputSalarioHora.value = ""
    inputHorasTrabajadas.value = ""
    checkActivo.checked = false

})