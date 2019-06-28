$( document ).ready(function() {
	showUE();
});
		// My point
		const tabBody = [
			{
				UE: {
					id: "T203",
					name: "Infrastructure réseau base",
					ACTA: [
						{id: "T2031", name: "Infrastructure réseau base (Théorie)", ECTS: 5.0, notes: [15.5, null, 15.5, null]}
					]
				}
			},
			{
				UE: {
					id: "T205",
					name: "Administration système et réseaux I",
					ACTA: [
						{id: "T2051", name: "OS théorie", ECTS: 1.0, notes: [3.0, null, 3.0, null]},
						{id: "T2052", name: "OS travaux pratiques", ECTS: 1.5, notes: [11.0, null, 11.0, null]},
						{id: "T2053", name: "Services réseau théorie", ECTS: 1.0, notes: [14.5, null, 14.5, null]},
						{id: "T2054", name: "Services réseau appliqués", ECTS: 1.5, notes: [11.5, null, 11.5, null]}
					]
				}
			},
			{
				UE: {
					id: "T206",
					name: "Administration système et réseaux II",
					ACTA: [
						{id: "T2061", name: "Administration système et réseaux II (Théorie)", ECTS: 2.0, notes: [null, null, 9.0, null]},
						{id: "T2062", name: "Administration système et réseaux II (Pratique)", ECTS: 3.0, notes: [null, null, 14.5, null]}
					]
				}
			},
			{
				UE: {
					id: "T208",
					name: "Télécommunications",
					ACTA: [
						{id: "T208", name: "Télécommunications", ECTS: 5.0, notes: [10.0, null, 10.0, null]}
					]
				}
			},
			{
				UE: {
					id: "T210",
					name: "Approche éthique de l'entreprise",
					ACTA: [
						{id: "T2101", name: "Anthropologie", ECTS: 1.0, notes: [null, null, 10.0, null]},
						{id: "T2102", name: "Communication", ECTS: 1.5, notes: [null, null, 0.0, null]},
						{id: "T2102", name: "Approche de l'entreprise", ECTS: 1.0, notes: [null, null, 0.0, null]},
						{id: "T2104", name: "Gestion de projet", ECTS: 1.5, notes: [null, null, 2.0, null]}
					]
				}
			},
			{
				UE: {
					id: "T212",
					name: "Modélisat°, manipulat° données & sem. internat°",
					ACTA: [
						{id: "T2121", name: "Modélisation et manipulation de données", ECTS: 3.0, notes: [null, null, 10.0, null]},
						{id: "T2122", name: "Semaine Internationale", ECTS: 2.0, notes: [null, null, 0.0, null]}
					]
				}
			},
			{
				UE: {
					id: "T301",
					name: "Administration et sécurisation des réseaux",
					ACTA: [
						{id: "T3011", name: "Administration des réseaux théorie", ECTS: 1.0, notes: [10.0, null, 10.0, null]},
						{id: "T3012", name: "Administration des réseaux pratique", ECTS: 1.5, notes: [12.0, null, 12.0, null]},
						{id: "T3013", name: "Sécurité des réseaux théorie", ECTS: 1.0, notes: [6.5, null, 6.5, null]},
						{id: "T3014", name: "Sécurité des réseaux pratique", ECTS: 1.5, notes: [11.5, null, 11.5, null]}
					]
				}
			},
			{
				UE: {
					id: "T302",
					name: "Techniques d'analyse avancées et Bases de Données",
					ACTA: [
						{id: "T302", name: "Techniques d'analyse avancées et Bases de Données", ECTS: 5.0, notes: [6.0, null, 6.0, null]}
					]
				}
			},
			{
				UE: {
					id: "T303",
					name: "Techniques de traitement du signal",
					ACTA: [
						{id: "T3031", name: "Traitement de signal théorie", ECTS: 2.0, notes: [8.0, null, 8.0, null]},
						{id: "T3032", name: "Traitement de signal pratique", ECTS: 3.0, notes: [12.0, null, 12.0, null]}
					]
				}
			},
			{
				UE: {
					id: "T304",
					name: "Gestion intégrée des technologies",
					ACTA: [
						{id: "T209", name: "Gestion de projet avancée", ECTS: 3.0, notes: [10.0, null, 10.0, null]},
						{id: "T209", name: "Projet d'intégration", ECTS: 5.0, notes: [6.0, null, 6.0, null]},
						{id: "T209", name: "Réseau d'entreprise", ECTS: 2.0, notes: [8.0, null, 8.0, null]}
					]
				}
			},
			{
				UE: {
					id: "T305",
					name: "Informatique et Société",
					ACTA: [
						{id: "T209", name: "Déontologie et RSE", ECTS: 1.5, notes: [12.0, null, 12.0, null]},
						{id: "T209", name: "Droit lié à l'informatique", ECTS: 1.5, notes: [7.0, null, 7.0, null]},
						{id: "T209", name: "Communication", ECTS: 2.0, notes: [8.0, null, 8.0, null]}
					]
				}
			}
		];

		// Affiche toutes les ACTA
		function showACTA() {
			//Permet de changer le background du tableau
			const lightColor = "#f6fbfc";
			const darkColor = "#e1f0f4";
			let isLightColor = true;
			const tabACTAHead = ["UE/Bloc", "ACTA/Cours", "Intitulé activités d'apprentissage (Cours)", "&nbsp;", "ECTS", "Janvier", "Réeval", "1° Sess.", "2° Sess."];
			const body = document.getElementById("results");

			let content = "";
			content += "<h5>Résultats par activités d'apprentissage (Cours)</h5>";
			content += "<table style='width:100%' class='mytable'>";
			content += "<tr>";

			// Crée le head du tableau
			for (let i=0; i<tabACTAHead.length; ++i) {
				content += "<th>" + tabACTAHead[i] + "</th>";
			}
			content += "</tr>";

			// Crée tout le tableau
			for(let i=0; i<tabBody.length; ++i) {
				content += "<tr style='background: " + (isLightColor?lightColor:darkColor) + ";'>";

				content += "<td>" + tabBody[i].UE.id + "</td>";
				for(let j=0; j<tabBody[i].UE.ACTA.length; ++j) {
					if(j!==0) {
						content += "</tr>";
						content += "<tr style='background: " + (isLightColor?lightColor:darkColor) + ";'><td>&nbsp;</td>";
					}
					content += "<td>" + tabBody[i].UE.ACTA[j].id + "</td>";
					content += "<td style='text-align:left'>" + tabBody[i].UE.ACTA[j].name + "</td>";
					content += "<td></td>";
					content += "<td>" + tabBody[i].UE.ACTA[j].ECTS.toFixed(1) + "</td>";

					for(let k=0; k<tabBody[i].UE.ACTA[j].notes.length; ++k) {
						let note = tabBody[i].UE.ACTA[j].notes[k];
						if(note!=null) {
							if(note<10) {
								content += "<td style='color: #FF0000; font-weight: bold;'>" 
							} else {
								content += "<td>"
							}
							content += note.toFixed(1) + " /20";
						} else {
							content += "<td>&nbsp;";
						}
						content += "</td>";
					}
				}

				content += "</tr>";
				isLightColor = !isLightColor;
			}
			content += "</table>";
			body.innerHTML = content;
		}

		// Affiche seulement les UE
		function showUE() {
			const tabUEHead = ["UE/Bloc", "Intitulé", "&nbsp;", "ECTS", "1° Sess.", "2° Sess.", "Validé"];
			let body = document.getElementById("results");

			let content = "";
			content += "<h5>Résultats par unités d'enseignement (Blocs de cours)</h5>";
			content += "<table style='width:100%' class='mytable'>";
			content += "<tr>";
			
			content += "<tr>";
			for(let i=0; i<tabUEHead.length; ++i) {
				content += "<th>" + tabUEHead[i] + "</th>";
			}


			for(let i=0; i<tabBody.length; ++i) {
				content += "<tr>";

				content += "<td>" + tabBody[i].UE.id + "</td>";
				content += "<td style='text-align:left'>" + tabBody[i].UE.name + "</td>";

				// Calcule les notes des UE
				(function() {
					let ECTS=0;
					let notes=new Array(2);

					for(let j=0; j<tabBody[i].UE.ACTA.length; ++j) {
						ECTS += tabBody[i].UE.ACTA[j].ECTS;

						let firstSessNote = null;
						let secondSessNote = tabBody[i].UE.ACTA[j].notes[3];
						if(secondSessNote != null) {notes[1]=0;}
						for(let k=tabBody[i].UE.ACTA[j].notes.length-2; k>=0; --k) {
							firstSessNote = tabBody[i].UE.ACTA[j].notes[k];
							if(firstSessNote != null) {
								if(notes[0] == null) {notes[0] = 0;}
								break;
							}
						}

						if(!isNaN(firstSessNote)) {notes[0] += firstSessNote * tabBody[i].UE.ACTA[j].ECTS;}
						if(!isNaN(secondSessNote)) {notes[1] += secondSessNote * tabBody[i].UE.ACTA[j].ECTS;}
					}

					const tdRed = "<td style='color: #FF0000; font-weight: bold;'>";
					content += "<td></td>";
					content += "<td>" + ECTS.toFixed(1) + "</td>";

					for(let j=0; j<notes.length; ++j) {
						notes[j]/=ECTS;

						content += (notes[j]<10?tdRed:"<td>") + (isNaN(notes[j])?"&nbsp;":notes[j].toFixed(1) + " /20") + "</td>";
					}
					let lastNote = (isNaN(notes[1]) ? notes[0] : notes[1]);

					content += "<td style='font-size: 12pt'>" + (lastNote<10?"&nbsp;":"✔") + "</td>";

				})();
				content += "</tr>";
			}

			content += "</table>";
			body.innerHTML = content;
		}