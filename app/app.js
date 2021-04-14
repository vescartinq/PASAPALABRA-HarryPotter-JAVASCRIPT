var totalPlayers = [
{user: 'ALBUS DUMBLEDORE', points: 25},
{user: 'HARRY POTTER', points: 24},
{user: 'LORD VOLDEMORT', points: 22},
{user: 'HERMION GRANGER', points: 21},
{user: 'SEVERUS NAPE', points: 19},
{user: 'GINNY WEASLY', points: 18},
{user: 'LUNA LOVEGOOD', points: 15},
{user: 'DRACO MALFOY', points: 14},
{user: 'RON WEASLY', points: 5},
{user: 'RUBEAUS HAGRID', points: 1},
];
var allUserNames = ['ALBUS DUMBLEDORE', 'HARRY POTTER', 'LORD VOLDEMORT',  'SEVERUS SNAPE', 'SEVERUS NAPE', 'GINNY WEASLY', 'LUNA LOVEGOOD', 'DRACO MALFOY', 'RON WEASLY', 'RUBEAUS HAGRID'];
var questions = [];
var questionIndex = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var timeLeft;
var timerGenerate;
var gameAsk = document.getElementById('game_questions');
var userAnswer = document.getElementById('answer');
var userName = document.getElementById('user_name').value;

//Base de datos de preguntas y respuestas
var questionsList = [
	[
		{ letter: "a", answer: "albus", status: 0, question: ("CON LA A. Primer nombre del Director más famoso de la historia de Howarts")},
		{ letter: "a", answer: "ravenclaw", status: 0, question: ("CONTIENE LA A. Casa de Howarts que luce el color azul")},
		{ letter: "a", answer: "ariana", status: 0, question: ("CON LA A. Nombre de la hermana de Albus Dumbledore")}
	],
	[
		{ letter: "b", answer: "aberforth", status: 0, question: ("CONTIENE LA B. Nombre del hermano de Albus Dumbledore")},
		{ letter: "b", answer: "scabbers", status: 0, question: ("CONTIENE LA B. Nombre de la mascota de Ron Weasley")},
		{ letter: "b", answer: "boxeador", status: 0, question: ("CON LA B. Segundo nombre del Sauce que golpea a Ron y Harry por aterrizarle encima con un coche")}
	],
	[
		{ letter: "c", answer: "cornelius", status: 0, question: ("CON LA C. Nombre del Ministro de Magia apellidado Fudge")},
		{ letter: "c", answer: "cedric", status: 0, question: ("CON LA C. Nombre del estudiante de Howarts muerto a manos de Peter Pettigrew tras ganar El Cáliz de Fuego")},
		{ letter: "c", answer: "copa", status: 0, question: ("CON LA C. Objeto de la casa Hufflepuff convertido en un horrocrux, y que se guardaba en la cámara secreta de Bellatrix Lestrange")}
	],
	[
		{ letter: "d", answer: "dolores", status: 0, question: ("CON LA D. Nombre de la Directora de Howarts que odiaba a los niños")},
		{ letter: "d", answer: "diadema", status: 0, question: ("CON LA D. Objeto de la casa Ravenclaw donde Voldemort guarda uno de sus horrocruxes")},
		{ letter: "d", answer: "avada", status: 0, question: ("CONTIENE LA D. Primera palabra de la Maldición Asesina")}
	],
	[
		{ letter: "e", answer: "escoba", status: 0, question: ("CON LA E. Objeto imprescindible si quieres jugar a Quidditch")},
		{ letter: "e", answer: "verde", status: 0, question: ("CONTIENE LA E. Color de la casa Slytherin")},
		{ letter: "e", answer: "sangre", status: 0, question: ("CONTIENE LA E. Elemento que arrebatan a la fuerza a Harry Potter para revivir a Lord Voldemort")}
	],
	[
		{ letter: "f", answer: "flamel", status: 0, question: ("CON LA F. Apellido del alquimista inventor de la piedra filosofal, de nombre Nicolas")},
		{ letter: "f", answer: "hufflepuff", status: 0, question: ("CONTIENE LA F. Casa de Howart que tiene como animal emblemático un tejón")},
		{ letter: "f", answer:"flu", status: 0, question: ("CON LA F. Polvos mágicos que te permiten teletransportarte a cualquier chimenea.")}
	],
	[
		{ letter: "g", answer: "ginny", status: 0, question: ("CON LA G. Nombre de la persona de la familia Weasly más hábil en el Quidditch")},
		{ letter: "g", answer: "nagini", status: 0, question: ("CONTIENE LA G. Nombre de la serpiente que acompaña a Voldemort")},
		{ letter: "g", answer: "hedwig", status: 0, question: ("CONTIENE LA G. Nombre de la lechuza de Harry Potter")},
	],
	[
		{ letter: "h", answer: "hermion", status: 0, question: "CON LA H. Bruja superinteligente a la que le encantan los gatos."},
		{ letter: "h", answer: "helga", status: 0, question: ("CON LA H. Nombre de la fundadora de Howarts cuyo apellido da nombre a la casa de los honestos y los trabajadores")},
		{ letter: "h", answer: "harry", status: 0, question: ("CON LA H. Nombre del único horrocrux que Voldemort no quiso crear.")}
	],
	[
		{ letter: "i", answer: "lily", status: 0, question: ("CONTIENE LA I. Nombre del personaje que se sacrifica para proteger a su hijo de la maldición de Voldemort")},
		{ letter: "i", answer: "imperio", status: 0, question: ("CON LA I. Palabra que invoca la maldición que obliga al que la sufre a realizar lo que se le ordena")},
		{ letter: "i", answer: "nimbus", status: 0, question: ("CONTIENE LA I. Marca de la escoba que McGonagall regala a Harry Potter")},
	],
	[
		{ letter: "j", answer:"james", status: 0, question: ("CON LA J. Nombre del padre del niño que derrotó al señor tenebroso.")},
		{ letter: "j", answer:"james", status: 0, question: ("CON LA J. Nombre del padre del niño que derrotó al señor tenebroso.")},
		{ letter: "j", answer:"james", status: 0, question: ("CON LA J. Nombre del padre del niño que derrotó al señor tenebroso.")}
	],
	[
		{ letter: "k", answer: "kendra", status: 0, question: ("CON LA K. Nombre de la madre de Albus y Aberforth Dumbledore")},
		{ letter: "k", answer: "black", status: 0, question: ("CONTIENE LA K. Apellido del padrino de Harry Potter")},
		{ letter: "k", answer: "tonks", status: 0, question: ("CONTIENE LA K. Apellido de la bruja-aurora casada con Remus Lupin")}
	],
	[
		{ letter: "l", answer: "luna", status: 0, question: ("CON LA L. Nombre de la mejor amiga que Harry Potter tiene en la casa Ravenclaw")},
		{ letter: "l", answer: "lupin", status: 0, question: ("CON LA L. Apellido del miembro de la Órden del Fénix que muy a su pesar se transforma en homobre lobo")},
		{ letter: "l", answer: "lucius", status: 0, question: ("CON LA L. Nombre del personaje que libera a Dobby de su esclavitud hacia la casa Malfoy")}
		
	],
	[
		{ letter: "m", answer: "molly", status: 0, question: ("CON LA M. Nombre de la madre de los hermanos Weasley")},
		{ letter: "m", answer: "malfoy", status: 0, question: ("CON LA M. Apellido de los miembros de la casa Slytherin que se caracterizan por su pelo rubio claro")},
		{ letter: "m", answer: "minerva", status: 0, question: ("CON LA M. Nombre de la profesora de Howarts capaz de convertirse en gata")}
	],
	[
		{ letter: "n", answer: "neville", status: 0, question: ("CON LA N. Nombre del personaje que destruye el último horrocrux")},
		{ letter: "n", answer: "negro", status: 0, question: ("CON LA N. Color preferido de los mortífagos")},
		{ letter: "n", answer: "narcisa", status: 0, question: ("CON LA N. Nombre de la madre de Draco Malfoy")}
	],
	[
		{ letter: "ñ", answer: "araña", status: 0, question: ("CONTIENE LA Ñ. Insecto que más odia Ron Weasley")},
		{ letter: "ñ", answer: "cabaña", status: 0, question: ("CONTIENE LA Ñ. Tipo de casa donde vive Rubeaus Hagrid")},
		{ letter: "ñ", answer: "araña", status: 0, question: ("CONTIENE LA Ñ. Insecto que más odia Ron Weasley")}
	],
	[
		{ letter: "o", answer: "dobby", status: 0, question: ("CONTIENE LA O. Nombre del elfo más querido de la saga Harry Potter")},
		{ letter: "o", answer: "mortifago", status: 0, question: ("CONTIENE LA O. Nombre que reciben los seguidores de Lord Voldemort")},
		{ letter: "o", answer: "leon", status: 0, question: ("CONTIENE LA O. Animal emblemático de la casa Griffindor.")}
	],
	[
		{ letter: "p", answer: "peter", status: 0, question: ("CON LA P. Nombre del miembro de Gryffindor que traiciona a la familia Potter")},
		{ letter: "p", answer: "profesor", status: 0, question: ("CON LA P. El peor trabajo que puede hacer Gilderoy Lockhart")},
		{ letter: "p", answer: "parsel", status: 0, question: ("CON LA P. Lengua de los miembros Slytherin que permite comunicarse con las serpientes")}
	],
	[
		{ letter: "q", answer: "quirrell", status: 0, question: ("CON LA Q. Apellido del profesor poseido por voldemort en La Piedra Filosofal")},
		{ letter: "q", answer: "quidditch", status: 0, question: ("CON LA Q. Deporte en el que destaca Ginny Weasley")},
		{ letter: "q", answer: "reliquias", status: 0, question: ("CONTIENE LA Q. La varita de sauco, la capa de invisibilidad y la piedra de la resurrección son las tres XXXX de la muerte")}
	],
	[
		{ letter: "r", answer: "rowina", status: 0, question: ("CON LA R. Nombre de la fundadora de Howarts cuya casa selecciona a los estudiantes más inteligentes")},
		{ letter: "r", answer: "howarts", status: 0, question: ("CONTIENE LA R. Nombre de la escuela que tiene como lema 'Siempre se prestará ayuda a quien la merezca'")},
		{ letter: "r", answer: "ron", status: 0, question: ("CON LA R. Nombre del mejor amigo de Harry y Hermión.")}
	],
	[
		{ letter: "s", answer: "severus", status: 0, question: ("CON LA S. Nombre del profesor de Howarts más Severo y querido de la saga Harry Potter.")},
		{ letter: "s", answer: "scamander", status: 0, question: ("CON LA S. Apellido del protagnista de Ánimales Fantásticos y donde encontrarlos")},
		{ letter: "s", answer: "espejo", status: 0, question: ("CONTIENE LA S. Objeto con el que Harry Potter puede ver a Sirius Black y Aberforth Dumbledore")}
	],
	[
		{ letter: "t", answer: "tom", status: 0, question: ("CON LA T. Nombre del mago que acabaria convirtiéndose en Lord Voldemort")},
		{ letter: "t", answer: "torneo", status: 0, question: ("CON LA T. El cáliz de fuego selecciona a los participantes del 'XXXXX' de los Tres Magos")},
		{ letter: "t", answer: "gaunt", status: 0, question: ("CONTIENE LA T. Apellido de la familia maga de Lord Voldemort")}
	],
	[
		{ letter: "u", answer: "crucio", status: 0, question: ("CON LA U. Palabra que invoca la Maldición Torturadora")},
		{ letter: "u", answer: "krum", status: 0, question: ("CONTIENE LA U. Campeón de Quidditch que participa en el Torneo de los Tres Magos.")},
      	{ letter: "u", answer: "oculus", status: 0, question: ("CONTIENE LA U. Primera palabra del hechizo ideal si se te rompen las gafas.")}

	],
	[
		{ letter: "v", answer: "voldemort", status: 0, question: ("CON LA V. Señor tenebroso al que no te atreverás a mencionar.")},
		{ letter: "v", answer: "minerva", status: 0, question: ("CONTIENE LA V. Nombre de la profesora McGonagall")},
		{ letter: "v", answer: "marvolo", status: 0, question: ("CONTIENE LA V. Segundo nombre de Tom Riddle")}
	],
	[
		{ letter: "w", answer: "grindelwald", status: 0, question: ("CONTIENE LA W. Apellido del mago que fue mejor amigo y peor enemigo de Dumbledore")},
		{ letter: "w", answer: "pettigrew", status: 0, question: ("CONTIENE LA W. Apellido del mortífago que se esconde tras la apariencia de la rata Scabbers")},
		{ letter: "w", answer: "weasley", status: 0, question: ("CON LA W. Apellido que distingue a los miembros de Gryffindor con pelo pelirrojo")}
	],
	[
		{ letter: "x", answer:"bellatrix", status: 0, question: ("CONTIENE LA X. Famosa mortífaga a la que le gustaba recordar que mató a Sirius Black.")},
      	{ letter: "x", answer:"expecto", status: 0, question: ("CONTIENE LA X. Primera palabra del hechizo que desearás conocer si se te presenta un dementor")},
      	{ letter: "x", answer:"expeliarmus", status: 0, question: ("CONTIENE LA X. Hechizo ideal para desarmar a tu oponente.")}
	],
	[
		{ letter: "y", answer: "gryffindor", status: 0, question: ("CONTIENE LA Y. Casa que Howarts que acoge a los estudiantes de corazón valiente")},
		{ letter: "y", answer: "malfoy", status: 0, question: ("CONTIENE LA Y. Apellido del mago más repelente de la casa Slytherin.")},
      	{ letter: "y", answer: "ginny", status: 0, question: ("CONTIENE LA Y. Nombre de la bruja más poderosa de la historia de la familia Weasly.")}
	],
	[
		{ letter: "z", answer: "salazar", status: 0, question: ("CON LA Z. Nombre del único fundador de Howarts que podia hablar pársel")},
		{ letter: "z", answer: "lechuza", status: 0, question: ("CONTIENE LA Z. Tipo de ave con la que los magos y brujas de Howarts se intercambian mensajes")},
		{ letter: "z", answer: "salazar", status: 0, question: ("CON LA Z. Nombre del único fundador de Howarts que podia hablar pársel")}
	]
];

//Activar botones para respuesta
function activeButtons () {
	document.getElementById('answer').addEventListener('keyup', function(event){
		event.preventDefault();

		if(event.keyCode === 13) {
			document.getElementById('ok').onclick();
			
		}

		if(event.keyCode === 32) {
			document.getElementById('pasapalabra').onclick();
			
		}

		if(event.keyCode === 27) {
			document.getElementById('stop').onclick();
		}
	})
}
activeButtons();

//Seleccionar 27 preguntas aleatorias
function selectQuestions() {
  
    for (var j = 0; j < 27; j++){
        var b = Math.floor(Math.random() * 3);
        questions.push(questionsList[j][b]);
        questions[j]["status"] = 0;
  }
  return questions;
}

//Mostrar clasificación desde menú principal
function showBestPlayers() {
	document.getElementById('container_menu').style.visibility = "hidden";
	document.getElementById('container_best_players').style.visibility = "visible";
	document.getElementById('name_intro').style.visibility = "hidden";
}

//Mostrar instrucciones del juego desde menú principal
function showInstructions() {
	document.getElementById('container_menu').style.visibility = "hidden";
	document.getElementById('container_instructions').style.visibility = "visible";
	document.getElementById('name_intro').style.visibility = "hidden";
}

//Botón volver a menú principal
function returnToMenu() {
	document.getElementById('play_menu').style.display = 'block';
	document.getElementById('name_intro').style.visibility = "hidden";
	document.getElementById('container_game').style.visibility = "hidden";
	document.getElementById('container_best_players').style.visibility = 'hidden';
	document.getElementById('container_menu').style.visibility = "visible";
	document.getElementById('container_instructions').style.visibility = "hidden";
}

//Panel nuevo jugador/a visible
function newUserIntro() {
	document.getElementById('user_name').value = "";
	document.getElementById('name_intro').style.visibility = "visible";
	document.getElementById('alert_user').style.visibility = 'hidden';
	document.getElementById('user_name').focus()
}

//Introducción de nuevo jugador/a 
function newUser() {
	userName = document.getElementById('user_name').value;
	userName = userName.toUpperCase();
	if (userName === '') {
																		//Vacio para evitar que avance el programa
	} else if (allUserNames.indexOf(userName) === -1) {
		allUserNames.push(userName);
		document.getElementById('container_menu').style.visibility = "hidden";
		document.getElementById('play_menu').style.display = 'none';
		document.getElementById('container_game').style.visibility = "visible";
		document.getElementById('correct').innerHTML = "Aciertos";
		document.getElementById('incorrect').innerHTML = "Errores";
		document.getElementById('correct').style.color = "white";
		document.getElementById('incorrect').style.color = "white";
		questions=[];
		questionIndex = 0;
		correctAnswer = 0;
		incorrectAnswer = 0;
		
		selectQuestions();

		for(var i = 0; i < questions.length; i++) {
			questions[i].status = 0;
			document.getElementsByClassName('results')[i].style.backgroundColor = 'white';
		}
		
		gameQuestions();
		timer();
	} else {
		document.getElementById('alert_user').style.visibility = 'visible';
		setTimeout(newUserIntro, 2000);
	};
	document.getElementById('answer').focus()
}

//Generador de preguntas
function gameQuestions() {
	userAnswer.value = "";

	if (questions[questionIndex].status === 0) {
		gameAsk.innerHTML = questions[questionIndex].question;
	} else {
		goToList();
	}
}

//Condicionales de respuesta
function answerAnalyzer() {
	
	userAnswer.value = userAnswer.value.toLowerCase();
	
	if(userAnswer.value === questions[questionIndex].answer) {
		questions[questionIndex].status = 'c';
		document.getElementsByClassName('results')[questionIndex].style.backgroundColor = 'green ';
		correctAnswer++;
		document.getElementById('correct').innerHTML = '<span style="color:white">' + 'Aciertos: ' + '</span>' + correctAnswer;
		document.getElementById('correct').style.color = "green";
		goToList();
	} else {
		questions[questionIndex].status = 'f';
		document.getElementsByClassName('results')[questionIndex].style.backgroundColor = 'red';
		incorrectAnswer++;
		document.getElementById('incorrect').innerHTML = '<span style="color:white">' + 'Errores: ' + '</span>' + incorrectAnswer;
		document.getElementById('incorrect').style.color = "red";
		goToList();
	};
};

//Jugador/a pulsa PASAPALABRA
function userPasapalabra() {
		document.getElementsByClassName('results')[questionIndex].style.backgroundColor = 'blue';
		goToList();
}

//Incorporar en Ranking jugador/a y puntuación
function userRanked() {
	totalPlayers.push({
		user: userName, 
		points: correctAnswer,
	});
}

//Analisis de respuestas
function goToList() {
	if (questionIndex < questions.length - 1) {
		questionIndex++;
		gameQuestions();
		document.getElementById('answer').focus()
	} else if (questionIndex === questions.length - 1 && correctAnswer + incorrectAnswer === questions.length) {
		clearInterval(timerGenerate);
		userRanked();
		rankingBestPlayers();
	} else if (questionIndex === questions.length - 1) {
		questionIndex = 0;
		gameQuestions();
	};
}

//Mostrar Clasificación General de jugadores/as
function rankingBestPlayers() {
	document.getElementById('container_menu').style.visibility = "hidden";
	document.getElementById('container_game').style.visibility = "hidden";
	document.getElementById('container_best_players').style.visibility = "visible";
	
	function list() {
		function sortRanking() {
			totalPlayers.sort(function (a, b){
				return (b.points - a.points)
			});
		}
		sortRanking();

		var filterUser = totalPlayers.filter(function(value) {
			return (value.user)
		});

		for(var i = 0; i < filterUser.length; i++) {
			document.getElementById('first').innerHTML   = ('<span style="color:orange">' + filterUser[0].user + '</span>' + ' con un total de: ' + filterUser[0].points + ' puntos');
			document.getElementById('second').innerHTML  = ('<span style="color:orange">' + filterUser[1].user + '</span>' + ' con un total de: ' + filterUser[1].points + ' puntos');
			document.getElementById('third').innerHTML   = ('<span style="color:orange">' + filterUser[2].user + '</span>' + ' con un total de: ' + filterUser[2].points + ' puntos');
			document.getElementById('fourth').innerHTML  = ('<span style="color:orange">' + filterUser[3].user + '</span>' + ' con un total de: ' + filterUser[3].points + ' puntos');
			document.getElementById('fifth').innerHTML   = ('<span style="color:orange">' + filterUser[4].user + '</span>' + ' con un total de: ' + filterUser[4].points + ' puntos');
			document.getElementById('sixth').innerHTML   = ('<span style="color:orange">' + filterUser[5].user + '</span>' + ' con un total de: ' + filterUser[5].points + ' puntos');
			document.getElementById('seventh').innerHTML   = ('<span style="color:orange">' + filterUser[6].user + '</span>' + ' con un total de: ' + filterUser[6].points + ' puntos');
			document.getElementById('eighth').innerHTML   = ('<span style="color:orange">' + filterUser[7].user + '</span>' + ' con un total de: ' + filterUser[7].points + ' puntos');
			document.getElementById('nineth').innerHTML   = ('<span style="color:orange">' + filterUser[8].user + '</span>' + ' con un total de: ' + filterUser[8].points + ' puntos');
			document.getElementById('tenth').innerHTML   = ('<span style="color:orange">' + filterUser[9].user + '</span>' + ' con un total de: ' + filterUser[9].points + ' puntos');
		};
	}
	list()
}

//Cuenta atrás
function timer() {
	var timerPanel = document.getElementById("timer");
	timerPanel.innerHTML = "400";
	timeLeft = 400;
	timerGenerate = setInterval(function() {
		timeLeft--;
		if (timeLeft <= 10 ) {
			timerPanel.style.color = "red";
		};
		if (timeLeft === 0) {
			clearInterval(timerGenerate);
			userRanked();
			rankingBestPlayers();
		}
		timerPanel.innerHTML = timeLeft;
	},1000)
}

//Botón salir del juego
function endGame() {
	clearInterval(timerGenerate);
	document.getElementById('play_menu').style.display = 'block';
	document.getElementById('name_intro').style.visibility = "hidden";
	document.getElementById('container_game').style.visibility = "hidden";
	document.getElementById('container_menu').style.visibility = "visible";
}

