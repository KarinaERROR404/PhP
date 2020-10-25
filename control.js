
var enviado= document.getElementById('enviar')

enviado.addEventListener('click', validar)


function validar(){
   var usuario=document.getElementById('user').value;
   var clave= document.getElementById('pass').value;
   if (usuario.length==0 || clave.length==0) {
       	alert('Completa todos los campos');
       }else if (usuario.indexOf('@')==-1) {
       	alert('usuario incorrecto, intente nuevamente');
       }
}