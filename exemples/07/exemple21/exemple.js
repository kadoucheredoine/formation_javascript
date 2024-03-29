var Personne = (function () {
    function Personne(_nom, _prenom) {
        this._nom = _nom;
        this._prenom = _prenom;
    }
    Object.defineProperty(Personne.prototype, "prenom", {
        get: function () {
            return this._prenom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    return Personne;
}());
Personne.Auteur = new Personne("brillant", "alexandre");
alert("L'auteur est " + Personne.Auteur.nom + " " + Personne.Auteur.prenom);
