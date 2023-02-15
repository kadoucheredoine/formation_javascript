define( 
 
    function() { 
 
        if ( !Array.prototype.indexOf ) 
            Array.prototype.indexOf = function( valeur ) { 
                for ( var i = this.length - 1; i >= 0; i-- ) { 
                    if ( this[ i ] === valeur ) 
                        return i; 
                } 
                return -1; 
            } 
 
        if ( !Array.prototype.remove ) { 
            Array.prototype.remove = function( indice ) { 
                this.splice( indice, 1 ); 
                return this; 
            } 
        } 
 
        if ( !String.prototype.startsWith ) { 
            String.prototype.startsWith = function( valeur ) { 
                return this.match( new RegExp( "^" + valeur) ); 
            } 
        } 
 
        if ( !String.prototype.endsWith ) { 
            String.prototype.endsWith = function( valeur ) { 
                return this.match( new RegExp( valeur + "$" ) ); 
            } 
        } 
 
        if ( !String.prototype.trim ) 
            String.prototype.trim = function() { 
                return this.replace( /^\s+|\s+$/g, "" ); 
            } 
 
        Function.prototype.bind = function( contexte ) { 
            var that = this; 
            return function() { 
                that.apply( contexte, arguments ); 
            } 
        }; 
 
        Object.prototype.herite = function( parent ) { 
            for ( var p in parent ) { 
                if ( !this[ p ] ) 
                    this[ p ] = parent[ p ]; 
            } 
            return this; 
        } 
 
        return { 
                id : function( value ) { 
                    if ( typeof value == "string" ) 
                        return document.getElementById( value ); 
                    return value; 
                }, 
                creationComposant : function( id, template, 
parametres ) { 
                    var c = this.id( id ); 
                    c = c || document.body; 
                    for ( var p in parametres ) { 
                        template = template.replace( 
                            new RegExp( "%" + p, "g" ), 
                                parametres[ p ] 
                        ); 
                    } 
                    c.innerHTML = template; 
                    var res = {}; 
                    res.dom = c.firstChild; 
                    return res; 
                } 
            } 
        } 
)
