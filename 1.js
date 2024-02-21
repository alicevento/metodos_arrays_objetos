//El centro médico dental de Ñuñoa se ha puesto en contacto una vez más con usted, para que desarrolle algunas modificaciones con respecto a sus consultas médicas y desplegar otra información que se le indicará más adelante. En esta ocasión, le piden hacer modificaciones a la página HTML que disponen, por lo que se le entrega el código de la página para que realice su trabajo. Dentro del código, se le señala donde tiene que realizar las modificaciones. Como regla, usted no puede eliminar ni modificar los datos que están en el interior de los arreglos y objetos de manera permanente. Todas las modificaciones solicitadas deben hacerse mediante el uso de funciones integradas en arreglos y objetos, como push(), shift(), split(), entre otras que estime conveniente.

document.write("<p>Estadisticas centro medico ñuñoa</p>");

const radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

const traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

const dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

//1. Agregar las siguientes horas al arreglo de Traumatología: HORA ESPECIALISTA PACIENTE RUT PREVISIÓN 09:00 RENÉ POBLETE ANA GELLONA 13123329-7 ISAPRE 09:30 MARIA SOLAR RAMIRO ANDRADE 12221451-K FONASA 10:00 RAUL LOYOLA CARMEN ISLA 10112348-3 ISAPRE 10:30 ANTONIO LARENAS PABLO LOAYZA 13453234-1 ISAPRE 12:00 MATIAS ARAVENA SUSANA POBLETE 14345656-6 FONASA

traumatologia.push(
  {
    hora: "09:00",
    especialista: "RENÉ POBLETE",
    paciente: "ANA GELLONA",
    rut: "13123329-7",
    prevision: "ISAPRE",
  },
  {
    hora: "09:30",
    especialista: "MARIA SOLAR",
    paciente: "RAMIRO ANDRADE",
    rut: "12221451-K",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATIAS ARAVENA",
    paciente: "SUSANA POBLETE",
    rut: "14345656-6",
    prevision: "FONASA",
  }
);

document.write("<table>");
document.write(
  "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>"
);
for (let i = 0; i < radiologia.length; i++) {
  document.write(
    `<tr><td>${radiologia[i].hora}</td><td>${radiologia[i].especialista}</td><td>${radiologia[i].paciente}</td><td>${radiologia[i].rut}</td><td>${radiologia[i].prevision}</td></tr>`
  );
}
for (let i = 0; i < traumatologia.length; i++) {
  document.write(
    `<tr><td>${traumatologia[i].hora}</td><td>${traumatologia[i].especialista}</td><td>${traumatologia[i].paciente}</td><td>${traumatologia[i].rut}</td><td>${traumatologia[i].prevision}</td></tr>`
  );
}
for (let i = 0; i < dental.length; i++) {
  document.write(
    `<tr><td>${dental[i].hora}</td><td>${dental[i].especialista}</td><td>${dental[i].paciente}</td><td>${dental[i].rut}</td><td>${dental[i].prevision}</td></tr>`
  );
}
document.write("</table>");

//2. Eliminar el primer y último elemento del arreglo de Radiología
document.write("<p>Eliminar primer y ultimo arreglo de Radiología:</p>");
radiologia.shift();
radiologia.pop();

document.write("<p><table>");
document.write(
  "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>"
);
for (let i = 0; i < radiologia.length; i++) {
  document.write(
    `<tr><td>${radiologia[i].hora}</td><td>${radiologia[i].especialista}</td><td>${radiologia[i].paciente}</td><td>${radiologia[i].rut}</td><td>${radiologia[i].prevision}</td></tr>`
  );
}
document.write("</table></p>");

//3. Imprimir en la página HTML, mediante document.write y/o las funciones que estime conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo separando por un guión cada dato desplegado y cada fila de información debe estar separada por un párrafo (2 Puntos). Ejemplo: 8:30 - ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - ISAPRE, 11:00 - MARIA PIA ZAÑARTU - ANGEL MUÑOZ - 9878789-2 - ISAPRE...

document.write("Lista consulta médica dental:");
for (let i = 0; i < dental.length; i++) {
  document.write(
    `<p>${dental[i].hora} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].rut} - ${dental[i].prevision}.</p>`
  );
}

//4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo
//Ejemplo:
//FRANCISCA ROJAS
//PAMELA ESTRADA
//ARMANDO LUNA…
document.write("Lista total de pacientes atendidos:");
document.write('<ul style="list-style-type: none; padding-left: 0;">');
const listaPacientes = (citas) => {
  citas.forEach((cita) => {
    document.write(`<li>${cita.paciente}</li>`);
  });
};

listaPacientes(radiologia);
listaPacientes(traumatologia);
listaPacientes(dental);
document.write("</ul>");

//5 Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental. Ejemplo: MARCELA RETAMAL - ISAPRE ANGEL MUÑOZ - ISAPRE ANA SEPULVEDA - ISAPRE

document.write("Lista de pacientes con ISAPRE:");
document.write('<ul style="list-style-type: none; padding-left: 0;">');

const pacientesISAPRE = (citas) => {
  return citas.filter((cita) => cita.prevision === "ISAPRE");
};

const pacientesISAPREDental = pacientesISAPRE(dental);
const pacientesISAPRETraumatologia = pacientesISAPRE(traumatologia);
const pacientesISAPRERadiologia = pacientesISAPRE(radiologia);

pacientesISAPREDental.forEach((paciente) => {
  document.write(`<li>${paciente.paciente} - ${paciente.prevision}</li>`);
});

pacientesISAPRETraumatologia.forEach((paciente) => {
  document.write(`<li>${paciente.paciente} - ${paciente.prevision}</li>`);
});

pacientesISAPRERadiologia.forEach((paciente) => {
  document.write(`<li>${paciente.paciente} - ${paciente.prevision}</li>`);
});

document.write("</ul>");

//Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología. Ejemplo: PAULA SÁNCHEZ – FONASA

document.write("Lista de pacientes con FONASA de Traumatología:");
document.write('<ul style="list-style-type: none; padding-left: 0;">');

const pacientesFONASA = (citas) => {
  return citas.filter((cita) => cita.prevision === "FONASA");
};

const pacientesFONASATraumatologia = pacientesFONASA(traumatologia);

pacientesFONASATraumatologia.forEach((paciente) => {
  document.write(`<li>${paciente.paciente} - ${paciente.prevision}</li>`);
});

document.write("</ul>");
