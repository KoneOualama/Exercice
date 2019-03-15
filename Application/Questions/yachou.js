var isAnneeBissextile = prompt("Entrez une Année");

 	if( isAnneeBissextile%400==0 || (isAnneeBissextile%4==0) && isAnneeBissextile%100!=0){


 		alert("l'année entrée est bissextile");
 }else
       alert("l'année entrée n'est pas bissextile");