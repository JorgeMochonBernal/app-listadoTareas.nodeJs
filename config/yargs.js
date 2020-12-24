
	const descripcion = {
		demand:true,
		alias:'d',
		desc: 'Descipcion de la tarea por hacer'
	};

	const completado = {
		default: true,
		alias: 'c',
		desc: 'Marcar la tarea como completada o no '
	}

	const argv = require('yargs')
		.command('crear', 'Crear una tarea por hacer', {
			descripcion
		})

		.command('actualizar', 'Actualiza el estado de una tarea, si ha sido completada o no', {
			descripcion,
			completado
		})

		.command('borrar', 'Borra una tarea', {
			descripcion
		})

		.help()
		.argv;

module.exports = {
	argv
}


