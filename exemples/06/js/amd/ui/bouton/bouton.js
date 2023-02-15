define( 
[ "../../commun", "text!ui/bouton/bouton.html" ], 
function ( c, template ) { 
    var factory = { 
        creation : function( id, parametres ) { 
            var bouton = c.creationComposant( id, template, 
parametres ); 

            bouton.herite( 
                { 
                    click : function( callback ) { 
                        this.dom.onclick = callback.bind( bouton ); 
                    } 
                } 
            ); 
			
            return bouton; 
        } 
    } 
    return factory; 
});
