var q1 	= '1. ¿Año de de graduacion?',
	q2 	= '2. ¿Edad en la que se graduo?',
	q3  	= '3. ¿Califique la formacion en las siguientes areas en la FIM, siendo la "A" la más alta calificación, y la "D" la peor calificación',
	q3_1 	= '3.1. Ciencias Básicas (Matemáticas, Física, Química, Tecnologías)',
	q3_2 	= '3.2. Ciencias Sociales.',
	q3_3 	= '3.3. Formación Profesional',
	q3_4 	= '3.4. Formación económica y administrativa.',
	q3_5 	= '3.5. Formación en informática y Computación',
	q3_6 	= '3.6. Formación general de la FIM.',
	q4  	= '4. ¿Que estudios posteriores esta realizando o ha realizado?',
	q5  	= '5. ¿Qué tiempo tardó en conseguir su primer empleo relacionado con su profesión?',
	q6  	= '6. El medio por el que se informó y/o consiguió su primer empleo relacionado con su profesión fue=',
	q7  	= '7. La mayor dificultad para conseguir empleo relacionado con su profesión fue=',
	q8  	= '8. Su actual trabajo lo realiza en=',
	q9  	= '9. Su posición dentro de su actual trabajo es=',
	q10  	= '10. Califique el grado de influencia que tuvieron para ser elegido en su actual empleo los siguientes aspectos=',
	q10_1 = 'Haber obtenido su título en la EPN',
	q10_2 = 'Su carrera corresponde al perfil requerido',
	q10_3 = 'Experiencia laboral anterior',
	q10_4 = 'La formación posterior a la obtención del título de tercer nivel',
	q10_5 = 'El desenvolvimiento en la entrevista de trabajo',
	q11  	= '11. Califique el grado de relación de sus actividades laborarles actuales con su carrera',
	q12  	= '12. Su actividad actual relacionada con su carrera la realiza en el ámbito de=',
	q13  	= '13. Su ingreso actual está dentro del rango=',
	q14  	= '14. Valore el desarrollo de las siguientes capacidades, habilidades, o actitudes adquiridas durante su carrera y compare con las requeridas por el medio laboral donde realiza sus actividades.',
	q15  	= '15. Indique en pocas palabras ¿qué otra competencia o habilidad debería desarrollarse durante la carrera para posibilitar un mejor desempeño profesional?',
	q16  	= '16. Valore  cómo  estuvo  preparado  cuando  terminó  su  carrera  y  compare  con  los requerimientos del medio laboral para desempeñarse en los siguientes campos',
	q16_1 = 'Elaborar e interpretar planos de elementos y de conjuntos mecánicos',
	q16_2 = 'Realizar el análisis funcional de elementos y sistemas mecánicos',
	q16_3 = 'Identificar y calcular las deformaciones y los esfuerzos internos que se producen en elementos mecánicos sometidos a condiciones de carga',
	q16_4 = 'Desarrollar nuevos materiales y promover el uso de materias primas nacionales',
	q16_5 = 'Planificar, organizar, administrar y controlar las actividades de mantenimiento en plantas de producción y de servicios industriales',
	q17  	= '17. Valore  el  grado  de  formación  adquirido  cuando  terminó  su  carrera,  e  indique  la prioridad de fortalecer las siguientes áreas para conseguir un mejor desempeño laboral de los futuros graduados.',
	q17_1	= '17.1. Formacion',
	q17_2	= '17.2. Prioridad',
	q17_a	= 'Mecatrónica',
	q17_b	= 'Estructuras Metálicas',
	q17_c	= 'Selección De Materiales',
	q17_d	= 'Instrumentación Industrial',
	q17_e	= 'Diseño de Sistemas Energéticos',
	q17_f	= 'Máquinas CNC',
	q17_g	= 'Análisis de Mecanismos',
	q17_h	= 'Ingeniería de operaciones',
	q17_i	= 'PLC’s control automático',
	q17_j	= 'Ensayos no Destructivos',
	q18  	= '18. Indique en pocas palabras ¿qué otra competencia o habilidad debería desarrollarse durante la carrera para posibilitar un mejor desempeño profesional?',
	q19  	= '19. Indique en pocas palabras ¿qué otro aspecto técnico debería desarrollarse en la carrera para posibilitar un mejor desempeño profesional?',
	q20  	= '20. Indique en pocas palabras ¿qué otra materia técnica debería impartirse en la carrera para posibilitar un mejor desempeño profesional?'


var years = ['2005 o antes' , 
				'2006' , 
				'2007' , 
				'2008' , 
				'2009' , 
				'2010' , 
				'2011' , 
				'2012' , 
				'2013' , 
				'2014' , 
				'2015'
			]

var age = ['21' , 
			'22' , 
			'23' , 
			'24' , 
			'25' , 
			'26' , 
			'27' , 
			'28' , 
			'29' , 
			'30 o mas'
		]

var multi = ['A' , 
			 'B' , 
			 'C' , 
			 'D'
			]

var studies = ['Maestria' , 
				'Doctorado' , 
				'Especializacion' , 
				'Cursos o Seminarios'
			]

var enjoyTime = ['Antes de Graduarse' , 
					'Entre 0 y 6 meses' , 
					'De 7 a 12 meses' , 
					'Más de 1 año'
				]

var report = ['Bolsa de empleo de EPN' , 
				'Carteleras de la Facultad' , 
				'Recomendación de un profesor' , 
				'Otro medio'
			]

var difficultyGetWork = ['Su título no era el adecuado para los requerimientos' , 
						 'Remuneración no adecuada' , 
						 'No habían ofertas laborales' , 
						 'No tuvo dificultad']

var workType = ['Sector Público' , 
				'Sector Privado' , 
				'Por cuenta Propia' , 
				'Desempleado'
			]

var workPosition = ['Directiva' , 
					'Mando Medio' , 
					'Operativa' , 
					'No aplica'
				]

var workActivity = ['Planificación Diseño y Supervisión' , 
					'Ejecución de proyectos y Trabajo de campo' , 
					'Ejercicio de Docencia' , 
					'Marketing de Equipos, Productos o servicios Técnicos'
				]

var salary = ['Menor a $700' , 
				'Entre $701-$1100' , 
				'Entre $1101-$1500' , 
				'Entre $1501-$1800' , 
				'Entre $1801-$2200', 
				'Entre $2201-$2600 ' , 
				'Entre $2601-$3000' , 
				'Mayor $3000'
			]

var skills = ['Compromiso de aprendizaje a lo largo de toda la vida' , 
				'Participar en equipos de trabajo multidisciplinarios' , 
				'Capacidad para tomar la iniciativa y ser proactivo en el trabajo' , 
				'Sensibilidad por el medio ambiente' ,
				'Capacidad y habilidad de comunicación utilizando medios escritos, orales y digitales', 
				'Formular, planificar y evaluar proyectos de ingeniería', 
				'Habilidad de llevar la teoría a la práctica'
			]

var a1 		= years,
	a2 		= age,
	a3 		= null,
	a3_1 	= multi,
	a3_2 	= multi,
	a3_3 	= multi,
	a3_4 	= multi,
	a3_5 	= multi,
	a3_6 	= multi,
	a4	 	= studies,
	a5 		= enjoyTime,
	a6 		= report,
	a7 		= difficultyGetWork,
	a8 		= workType,
	a9 		= workPosition,
	a10 	= null,
	a10_1 	= multi,
	a10_2 	= multi,
	a10_3 	= multi,
	a10_4 	= multi,
	a10_5 	= multi,
	a11 	= null,
	a12		= workActivity,
	a13		= salary,
	a14		= skills,
	a15		= null,
	a16		= null,
	a16_1	= multi,
	a16_2	= multi,
	a16_3	= multi,
	a16_4	= multi,
	a16_5	= multi,
	a17		= null,
	a17_1	= null,
	a17_2	= null,
	a17_a	= multi,
	a17_b	= multi,
	a17_c	= multi,
	a17_d	= multi,
	a17_e	= multi,
	a17_f	= multi,
	a17_g	= multi,
	a17_h	= multi,
	a17_i	= multi,
	a17_j	= multi,
	a18		= null,
	a19		= null,
	a20		= null


module.exports = {
	'questions' : {
		'q1' 	: {'q' : q1, 'a' : a1 },
		'q2' 	: {'q' : q2, 'a' : a2 },
		'q3' 	: {'q' : q3, 'a' : a3 },
		'q3_1' 	: {'q' : q3_1, 'a' : a3_1 },
		'q3_2' 	: {'q' : q3_2, 'a' : a3_2 },
		'q3_3' 	: {'q' : q3_3, 'a' : a3_3 },
		'q3_4' 	: {'q' : q3_4, 'a' : a3_4 },
		'q3_5' 	: {'q' : q3_5, 'a' : a3_5 },
		'q3_6' 	: {'q' : q3_6, 'a' : a3_6 },
		'q4' 	: {'q' : q4, 'a' : a4 },
		'q5' 	: {'q' : q5, 'a' : a5 },
		'q6' 	: {'q' : q6, 'a' : a6 },
		'q7' 	: {'q' : q7, 'a' : a7 },
		'q8' 	: {'q' : q8, 'a' : a8 },
		'q9' 	: {'q' : q9, 'a' : a9 },
		'q10' 	: {'q' : q10, 'a' : a10 },
		'q10_1'	: {'q' : q10_1, 'a' : a10_1 },
		'q10_2' : {'q' : q10_2, 'a' : a10_2 },
		'q10_3' : {'q' : q10_3, 'a' : a10_3 },
		'q10_4' : {'q' : q10_4, 'a' : a10_4 },
		'q10_5' : {'q' : q10_5, 'a' : a10_5 },
		'q11' 	: {'q' : q11, 'a' : a11 },
		'q12' 	: {'q' : q12, 'a' : a12 },
		'q13' 	: {'q' : q13, 'a' : a13 },
		'q14' 	: {'q' : q14, 'a' : a14},
		'q15' 	: {'q' : q15, 'a' : a15, 'inp' : true },
		'q16' 	: {'q' : q16, 'a' : a16 },
		'q16_1' : {'q' : q16_1, 'a' : a16_1 },
		'q16_2' : {'q' : q16_2, 'a' : a16_2 },
		'q16_3' : {'q' : q16_3, 'a' : a16_3 },
		'q16_4' : {'q' : q16_4, 'a' : a16_4 },
		'q16_5' : {'q' : q16_5, 'a' : a16_5 },
		'q17' 	: {'q' : q17, 'a' : a17 },
		'q17_1' : {'q' : q17_1, 'a' : a17_1 },

		'q17_aa' : {'q' : q17_a, 'a' : a17_a },
		'q17_ba' : {'q' : q17_b, 'a' : a17_b },
		'q17_ca' : {'q' : q17_c, 'a' : a17_c },
		'q17_da' : {'q' : q17_d, 'a' : a17_d },
		'q17_ea' : {'q' : q17_e, 'a' : a17_e },
		'q17_fa' : {'q' : q17_f, 'a' : a17_f },
		'q17_ga' : {'q' : q17_g, 'a' : a17_g },
		'q17_ha' : {'q' : q17_h, 'a' : a17_h },
		'q17_ia' : {'q' : q17_i, 'a' : a17_i },
		'q17_ja' : {'q' : q17_j, 'a' : a17_j },

		'q17_2' : {'q' : q17_2, 'a' : a17_2 },

		'q17_a' : {'q' : q17_a, 'a' : a17_a },
		'q17_b' : {'q' : q17_b, 'a' : a17_b },
		'q17_c' : {'q' : q17_c, 'a' : a17_c },
		'q17_d' : {'q' : q17_d, 'a' : a17_d },
		'q17_e' : {'q' : q17_e, 'a' : a17_e },
		'q17_f' : {'q' : q17_f, 'a' : a17_f },
		'q17_g' : {'q' : q17_g, 'a' : a17_g },
		'q17_h' : {'q' : q17_h, 'a' : a17_h },
		'q17_i' : {'q' : q17_i, 'a' : a17_i },
		'q17_j' : {'q' : q17_j, 'a' : a17_j },
		
		'q18' 	: {'q' : q18, 'a' : a18, 'inp' : true },
		'q19' 	: {'q' : q19, 'a' : a19, 'inp' : true },
		'q20' 	: {'q' : q20, 'a' : a20, 'inp' : true }
	}
}




