ID_VIDEO = "reproduccion";
ID_CAJA_VIDEO = "caja-video";

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'ar,ca,eu,gl,en,fr,it,pt,de', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true},
	'google_translate_element');
}

function borrado()
{
	alert("HAS BORRADO TODO.");
}

function random()
{
		return Math.random();
}

function enviado()
{
	alert("SU CONSULTA HA SIDO ENVIADA CON EXITO, en breve rebira una respuesta. GRACIAS!");
	limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById("miForm").reset();
  }

function iniciar() {
    reproduccion = getById(ID_VIDEO);
    cajaVideo = getById(ID_CAJA_VIDEO);
	
	alert("Soufiane El Fettahi")
	alert(random());
	var tiempo = new Date();
	alert(tiempo.getHours()+":"+tiempo.getMinutes()+":"+tiempo.getSeconds());
}

function getById(element_id) {
    return document.getElementById(element_id);
}

function playVideoTiempo() {
    reproduccion.play();
}

function pauseVideoTiempo() {
    reproduccion.pause();
}

function stopVideoTiempo() {
    reproduccion.currentTime = 0;
    pauseVideoTiempo();
}

function changeSoundState() {
    if (reproduccion.muted) {
        reproduccion.muted = false;
    } else {
        reproduccion.muted = true;
    }
}
