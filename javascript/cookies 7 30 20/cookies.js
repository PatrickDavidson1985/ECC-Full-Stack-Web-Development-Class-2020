window.onload = function() {
    var item = {
        "name":"david",
        "username":"adkinsd",
        "zipcode":"14223",
        "hometown":"tonawanda"
    };
    var create = [];
    create.push(item);
    text = "";
    for (i = 0; i < create.length; i++) {
        text += "<ul>";
        text += "<li class="list-group-item col">" + create[i].name+ "</li>";
        text += "<li class="list-group-item col">" + create[i].username+ "</li>";
        text += "<li class="list-group-item col">" + create[i].zipcode+ "</li>";
        text += "<li class="list-group-item col">" + create[i].hometown+ "</li>";
        text += "<ul><li><a onclick='remove()'>remove</a></li></ul>";
    }
    
    document.getElementById('customtable').innerHTML = text;
}


