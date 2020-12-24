	const fs = require('fs');

	let listadoPorHacer = [];

	const guardarDB = () => {

	    let data = JSON.stringify(listadoPorHacer);

	    fs.writeFile('./../db/agenda.json', data, (err) => {
	     
	    });

	}

	const cargarDB = () => {

	    try {
	        listadoPorHacer = require('../db/agenda.json');

	    } catch (error) {
	        listadoPorHacer = [];
	    }

	}

	const crear = (descripcion) => {

	    cargarDB();

	    let porHacer = {
	        descripcion,
	        completado: false
	    };

	    listadoPorHacer.push(porHacer);

	    guardarDB();

	    return porHacer;

	}

	const getListado = () => {
	    cargarDB();
	    return listadoPorHacer;
	}

module.exports = {
    crear,
    getListado,
}