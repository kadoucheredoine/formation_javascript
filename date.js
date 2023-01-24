 

var Figure = (function () {
    if (!figure.monAire)
        figure.monAire = function () {
            return this.largeur * this.hauteur;
        }
    if (!figure.centre)
        figure.centre = function () {
            return [
                (this.x + this.largeur) / 2, (this.y + this.hauteur) / 2
            ];
        }

    return function (x, y, largeur, hauteur) {
        this.x = x;
        this.y = y;
        this.largeur = largeur;
        this.hauteur = hauteur;

        for (var p in figure) {
            if (typeof figure[p] == "function")
                this[p] = figure[p];
        }

    }
})(figure);
