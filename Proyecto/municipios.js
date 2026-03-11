const municipios = {

"Pinar del Río":[
"Pinar del Río","Viñales","La Palma","Los Palacios","Consolación del Sur",
"San Juan y Martínez","San Luis","Guane","Mantua","Minas de Matahambre","Sandino"
],

"Artemisa":[
"Artemisa","Alquízar","Bauta","Caimito","Candelaria",
"Guanajay","Güira de Melena","Mariel","San Antonio de los Baños",
"San Cristóbal","Bahía Honda"
],

"La Habana":[
"Playa","Plaza de la Revolución","Centro Habana","Habana Vieja","Regla",
"Habana del Este","Guanabacoa","San Miguel del Padrón","Diez de Octubre",
"Cerro","Marianao","La Lisa","Boyeros","Arroyo Naranjo","Cotorro"
],

"Mayabeque":[
"Bejucal","San José de las Lajas","Jaruco","Santa Cruz del Norte",
"Madruga","Nueva Paz","San Nicolás","Güines","Melena del Sur",
"Batabanó","Quivicán"
],

"Matanzas":[
"Matanzas","Cárdenas","Martí","Colón","Perico","Jagüey Grande",
"Pedro Betancourt","Los Arabos","Calimete","Limonar",
"Unión de Reyes","Jovellanos"
],

"Cienfuegos":[
"Cienfuegos","Palmira","Cruces","Lajas","Rodas",
"Aguada de Pasajeros","Abreus"
],

"Villa Clara":[
"Santa Clara","Caibarién","Camajuaní","Cifuentes","Corralillo",
"Encrucijada","Manicaragua","Placetas","Quemado de Güines",
"Ranchuelo","Remedios","Sagua la Grande","Santo Domingo"
],

"Sancti Spíritus":[
"Sancti Spíritus","Cabaiguán","Fomento","Jatibonico",
"La Sierpe","Taguasco","Trinidad","Yaguajay"
],

"Ciego de Ávila":[
"Ciego de Ávila","Morón","Chambas","Florencia","Majagua",
"Ciro Redondo","Baraguá","Venezuela","Primero de Enero","Bolivia"
],

"Camagüey":[
"Camagüey","Carlos Manuel de Céspedes","Esmeralda","Florida",
"Guaimaro","Jimaguayú","Minas","Najasa","Nuevitas",
"Sibanicú","Sierra de Cubitas","Santa Cruz del Sur","Vertientes"
],

"Las Tunas":[
"Las Tunas","Puerto Padre","Jesús Menéndez","Majibacoa",
"Manatí","Colombia","Amancio","Jobabo"
],

"Holguín":[
"Holguín","Banes","Antilla","Báguanos","Cacocum",
"Calixto García","Cueto","Frank País","Gibara",
"Mayarí","Moa","Rafael Freyre","Sagua de Tánamo","Urbano Noris"
],

"Granma":[
"Bayamo","Manzanillo","Bartolomé Masó","Buey Arriba",
"Campechuela","Cauto Cristo","Guisa","Jiguaní",
"Media Luna","Niquero","Pilón","Río Cauto","Yara"
],

"Santiago de Cuba":[
"Santiago de Cuba","Contramaestre","Mella","Palma Soriano",
"San Luis","Segundo Frente","Songo-La Maya","Tercer Frente","Guamá"
],

"Guantánamo":[
"Guantánamo","Baracoa","Caimanera","El Salvador",
"Imías","Maisí","Manuel Tames","Niceto Pérez",
"San Antonio del Sur","Yateras"
],

"Isla de la Juventud":[
"Nueva Gerona"
]

};

document.addEventListener("DOMContentLoaded", function(){

const provincia = document.getElementById("provincia");
const municipio = document.getElementById("municipio");

provincia.addEventListener("change", function(){

let provinciaSeleccionada = this.value;

municipio.innerHTML = '<option value="">Seleccione municipio</option>';

if(municipios[provinciaSeleccionada]){

municipios[provinciaSeleccionada].forEach(function(m){

let option = document.createElement("option");

option.textContent = m;
option.value = m;

municipio.appendChild(option);

});

}

});

});