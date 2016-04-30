function limitToNumbers(id){
    var input = document.getElementById(id).value;
    var re = new RegExp("^([0-9]*)$");
    if(!(re.test(input)) || parseInt(input) > 255)
    {
        document.getElementById(id).value = input.substring(0,input.length-1)
    }
}

function convertRGB(){
    var r = document.getElementById('input_r').value;
    var g = document.getElementById('input_g').value;
    var b = document.getElementById('input_b').value;

    if(!(r === "" || g === "" || b === ""))
    {    
        var hex_r = parseInt(r).toString(16);
        var hex_g = parseInt(g).toString(16);
        var hex_b = parseInt(b).toString(16);

        document.getElementById("resultHEX").innerHTML = "#" + hex_r + hex_g + hex_b;
    }
    else
    {
        document.getElementById("resultHEX").innerHTML = "";
    }
}

function limitToHex(id){
    var input = document.getElementById(id).value;
    var re = new RegExp("^([a-fA-F0-9]*)$");
    if(!(re.test(input)))
    {
        document.getElementById(id).value = input.substring(0,input.length-1)
    }
}


function convertHEX(){
    var input = document.getElementById("input_hex").value;
    if(input.length === 3)
    {
       var r = input.substring(0,1);
       var g = input.substring(1,2);
       var b = input.substring(2);
    }
    else
    {
       var r = input.substring(0,2);
       var g = input.substring(2,4);
       var b = input.substring(4); 
    }

    if(!(r === "" || g === "" || b === ""))
    {   
        var int_r = parseInt(r,16);
        var int_g = parseInt(g,16);
        var int_b = parseInt(b,16);  

        document.getElementById("resultRGB").innerHTML = int_r + " " + int_g + " " + int_b; 
    }
    else
    {
        document.getElementById("resultRGB").innerHTML = "";
    }
}
