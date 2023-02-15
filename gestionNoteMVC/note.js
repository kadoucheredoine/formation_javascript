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

    function selectVue(index){
        vue=  vues[index].vue;
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
        selectVue : function(index) {
            selectVue(index);
            vue.maj()
        }

    }
})()