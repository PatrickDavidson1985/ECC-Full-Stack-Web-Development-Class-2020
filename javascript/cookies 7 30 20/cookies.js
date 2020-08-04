window.onload = function() {
    // create an object called item...
    var item = {
        "name":"david",
        "username":"adkinsd",
        "zipcode":"14223",
        "hometown":"tonawanda"
    };

    //create an array called create
    var create = [];

    // add item as the first element of create
    create.push(item);
    //create.push(item);

    // initialize an empty text string
    text = "";

    // loop through all elements of "create" and draw a UL for each item
    for (i = 0; i < create.length; i++) {
        text += "<ul class='list-group list-group-horizontal'>";
        text += "<li class='list-group-item col'>" + create[i].name+ "</li>";
        text += "<li class='list-group-item col'>" + create[i].username+ "</li>";
        text += "<li class='list-group-item col'>" + create[i].zipcode+ "</li>";
        text += "<li class='list-group-item col'>" + create[i].hometown+ "</li>";
        text += "<li class='list-group-item col'> <a href='' onclick='remove("+i+")'>remove</a></li></ul>";
    }
    
    // add our generated text to inner HTML of customtable
    document.getElementById('customtable').innerHTML = text;
}

function remove(num) {

}

function add(col) {

        // need to add the col fields as an object to create...
        create.push();
    
        // loop through the create array AGAIN to draw out all the items in the create array.
     

        
        text += "<ul class='list-group list-group-horizontal'>";
        text += "<li class='list-group-item col'>" + col.name.value+ "</li>";
        text += "<li class='list-group-item col'>" + col.username.value+ "</li>";
        text += "<li class='list-group-item col'>" + col.zipcode.value+ "</li>";
        text += "<li class='list-group-item col'>" + col.hometown.value+ "</li>";
        text += "<li class='list-group-item col'><a href='' onclick='remove("+i+")'>remove</a></li></ul>" ;
        
        
    
    
    document.getElementById('customtable').innerHTML = text;
}    

fucntion remove(row) {
    var index = array.indexOf(row);
    if(index > -1) {
        array.splice(index, 1);
    }
}


fucntion add(col)  {

    var item = {
        "name":"",
        "username":""
        "zipcode":"",
        "hometown":"",
    }
}