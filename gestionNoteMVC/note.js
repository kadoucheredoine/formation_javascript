var notes = (function () {
    var model = {
        data: []
    }

    var vue;
    var vues = [
        {
            vue: {
                maj: function () {
                    var v = document.getElementById("notesVue") ||
                        document.body;
                    var tmp = "";
                    for (var i = 0; i < model.data.length; i++) {
                        tmp += "<div>";
                        tmp += model.data[i];
                        tmp += " <span onclick='notes.remove(" + i + ")'>[-]</span>";
                        tmp += "</div>";
                    }
                    v.innerHTML = tmp;
                }
            }
        },
        {
            vue: {
                maj: function () {
                    var v = document.getElementById("notesVue") ||
                        document.body;
                    var tmp = "";
                    for (var i = 0; i < model.data.length; i++) {
                        tmp += "<div>";
                        tmp += model.data[i];
                        tmp += " <span onclick='notes.remove(" + i + ")' style='background-color:#FFFF33'>[-]</span>";
                        tmp += "</div>";
                    }
                    v.innerHTML = tmp;
                }
            }
        }

    ]


    function add(note) {
        return model.data.push(note);
    }
    function remove(index) {
        return model.data.splice(index, 1)
    }

    function selectVue(index) {
        vue = vues[index].vue;
    }




    return {
        addItem: function () {
            var note = prompt("add note")
            if (note)
                add(note)
            vue.maj();
        },
        remove: function (index) {
            remove(index)
            vue.maj()
        },
        selectVue: function (index) {
            selectVue(index);
            vue.maj()
        },
        sortData: function (isAsc) {
            var cre = function (a, b) {
                return a > b ? 1 : -1
            }
            if (!isAsc)
                cre = function (a, b) {
                    return a > b ? -1 : 1
                }
            model.data.sort(cre)
            vue.maj()
        }

    }
})()


var qcm = (function () {

    Array.prototype.random = function () {
        var cre = function (a, b) { return a > b ? 1 : -1; }
        if (Math.random() > 0.5)
            cre = function (a, b) { return a > b ? -1 : 1 }

        this.sort(cre)
    }

    var questions = []

    function affiche(id) {
        var element = document.getElementById(id)
        for (var i = questions.length - 1; i >= 0; i--) {
            var child = document.createElement("div")
            child.appendChild(document.createTextNode(questions[i].question))
            element.appendChild(child)
        }
    }
    return {
        addQuestion: function () {
            var objet = {
                responses: [],
                question: arguments[0]
            }

            for (var i = 1; i < arguments.length; i++) {
                objet.responses.push(arguments[i])
            }
            objet.response = arguments[1];
            objet.responses.random();

            questions.push(objet)
        },

        start: function () {
            affiche("qcm")
        },
        validate: function () {

        }


    }
}

)()


var table = (function () {

    var table = []
    var vue = function () {
        var eTable = document.getElementById("table");
        var tablen = document.createElement("table")
        eTable.appendChild(tablen)

        for (var i = 0; i < table.length; i++) {
            var tr = document.createElement("tr");
            tablen.appendChild(tr)
            tr.appendChild(document.createTextNode(table[i]))
        }

    }
    return {
        getTable: function () {
            let tab = [1, 2]
            let tab2 = [3, 4]
            table = [...tab, ...tab2]
            vue();
        }
    }
})();

class Vehicule {
    constructor(marque, modele) {
        this.marque = marque;
        this.modele = modele;
    }
}

var person = {
    name: "yazid",
    lastname: "takfarinas",
    date: "9/01/1987",
    email: "yazid@gmail.com"
}


const  proxy = new Proxy(person, {
    set(target, prop, value) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexDate = /^(\d{4})-(\d{2})-(\d{2})$/;

        if (prop === "name" && !value.match(/[a-zA-Z]/)) {
            return target[prop];
        }

        if (prop === "email" && !value.match(regexEmail)) {
            return target[prop];
        }
        if (prop === "date" && !value.match(regexDate)) {
            return target[prop]=value;
        }
       
    }

})


proxy.name = "yazidi" ;console.log(proxy.name)
proxy.date = "01-06-1987"; console.log(proxy.date)
proxy.email = "yayayaya@gmail.com"; console.log(proxy.email)