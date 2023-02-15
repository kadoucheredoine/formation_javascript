define( 
[ "commun", "ui/bouton/bouton", "text!calc/calc.html" ], 
function( c, b, template ) { 
    var factory = { 
        creation : function( id, parametres ) { 
            var calc = c.creationComposant( id, template, parametres ); 
 
            var cadran = calc.dom.getElementsByTagName( "div" )[ 0 ]; 
            var boutons = calc.dom.getElementsByTagName( "div" )[ 1 ]; 
 
            var noms = [ '0', '1', '2', '3', '4', '5', '6', '7', 
'8', '9', '+', '-', '/', '*', '=' ]; 
 
            var operande = 0; 
            var operation = null; 
 
            var traitement = function() { 
                var valeur = this.dom.innerHTML; 
                if ( valeur >= 0 && valeur <= 9 ) 
                    cadran.innerHTML += valeur; 
                else { 
 
                    if ( valeur == '=' ) { 
                        switch( operation ) { 
                            case '+' : 
                                cadran.innerHTML = operande + 
parseInt( cadran.innerHTML ); 
                                break; 
                            case '-' : 
                                cadran.innerHTML = operande - 
parseInt( cadran.innerHTML ); 
                                break; 
                            case '/' : 
                                cadran.innerHTML = operande / 
parseInt( cadran.innerHTML ); 
                                break; 
                            case '*' : 
                                cadran.innerHTML = operande * 
parseInt( cadran.innerHTML ); 
                                break; 
                        } 
                        operande = parseInt( cadran.innerHTML ); 
                    } else { 
                        operation = valeur; 
                        operande = parseInt( cadran.innerHTML ); 
                        cadran.innerHTML = ""; 
                    } 
                } 
            } 
 
            for ( var i = 0; i < noms.length; i++ ) { 
                var n = noms[ i ]; 
                var conteneur = document.createElement( "span" ); 
                conteneur.style.display = "inline-block"; 
                conteneur.style.width = "20px"; 
								
                var btn = b.creation( conteneur, { nom : 
noms[ i ] } );
				btn.click( traitement ); 
					
                btn.dom.style.margin = "4px"; 
                boutons.appendChild( conteneur ); 
                if ( ( i + 1 ) % 5 == 0 ) { 
                    var sep = document.createElement( "div" ); 
                    sep.style.height = "10px"; 
                    boutons.appendChild( sep ); 
                } 
            } 
 
            return calc; 
       } 
    } 
    return factory; 
} 
);
