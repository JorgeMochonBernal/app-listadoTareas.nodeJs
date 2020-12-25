
	const colors = require('colors');
	const argv = require('./../config/yargs.js').argv;
	const porHacer = require('./../por-hacer/por_hacer');

	let comando = argv._[0];

	switch(comando) {
		case 'crear':
			let tarea = porHacer.crear(argv.descripcion);
			console.log(tarea);
			break;
		case 'listar':
			let listadoTareas = porHacer.getListado();
			console.log(listadoTareas);
			
			for(let tarea of listadoTareas) {
				console.log('==============Por hacer===================='.green);
				 console.log('Tarea: ' +  tarea.descripcion);
				console.log('Estado: ' + tarea.completado);
				console.log('============================================'.green);
			}
			break;
		case 'borrar':
			let borrado = porHacer.borrar(argv.descripcion);
            console.log(borrado);
			break;
		case 'actualizar':
			let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
            console.log(actualizado);
			break;
		default:
			console.log('Comando no encontrado');
	}