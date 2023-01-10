var arr_variable =[]
var arr_max = [];
var arr_min = [];
var arr =[]
var ias = []
var arr5 = []
var global_variable = []
var no;

function addFields(){
    var variable_count = document.getElementById("variable_count").value;
    var variable_no = document.getElementById("variable_no");
    var variable_max = document.getElementById("variable_no");
    var variable_min = document.getElementById("variable_no");
    
    for(var i=0;i<variable_count;i++){
        variable_no.appendChild(document.createTextNode("variable"+(i)));
        var input = document.createElement("input");
        input.type = "text";
        input.id = "variable_no"+i;
        variable_no.appendChild(input);
        arr_variable[i] = input.id;

        variable_max.appendChild(document.createTextNode("Maximum/Array"+(i)));
        var max = document.createElement("input");
        max.id = "max_variable_no"+i;
        variable_max.appendChild(max);
        arr_max[i] = max.id;

        variable_min.appendChild(document.createTextNode("Minimum"+(i)));
        var min = document.createElement("input");
        min.id = "min_variable_no"+i;
        variable_min.appendChild(min);
        arr_min[i] = min.id;

        // variable_arr.appendChild(document.createTextNode("Array"+(i)));
        // var array = document.createElement("input");
        // array.id = "min_variable_no"+i;
        // variable_arr.appendChild(array);
        // arr_t[i] = array.id;
        
        variable_no.appendChild(document.createElement("br"));
        variable_no.appendChild(document.createElement("br"));
        event.preventDefault();
        
    }

}   



function submit(){
    
    var variable_counts = Number(document.getElementById("variable_count").value);
    for(var i=0;i<variable_counts;i++)
    {
        console.log("i value",i);
        var variable_max = document.getElementById(arr_max[i]).value;
        variable_max = variable_max.split(",");
        console.log(variable_max.length)

        if(variable_max.length == 1){
            console.log("variable_max");
            var arr = []
            var variable_max = Number(document.getElementById(arr_max[i]).value);
            var variable_min = Number(document.getElementById(arr_min[i]).value);
            var range = variable_max-variable_min+1

            for(var k=variable_min; k<=variable_max; k++)
            {
                arr.push(k)
            }
            global_variable.push(arr)
        } 
        else {
            global_variable.push(variable_max)
        }
    }
        console.log("global variable",global_variable)

        for(var p = 0; p < global_variable.length; p++) 
        {
            ias[p] = global_variable[p]
            p = p + 1
            for(var q = p; q < global_variable.length; q++)
            {
                ias[q] = global_variable[q]
            }
            
        }
            
    a = cartesian(ias)
    console.log(a)
    for(i of a)
    {  
        document.getElementById("test").innerHTML += i;
        document.getElementById("test").innerHTML += '<br/>';
    }
    
    event.preventDefault();
}

function cartesian(arg) {
    var r = [], max = arg.length-1;
    function helper(arr, i) {
        while(typeof arg[i] === "undefined") {
            i += 1;
        }
        for (var j=0, l=arg[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(arg[i][j]);
            if (i==max) {
                r.push(a);
            } else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
}


//0  //2 3 4   
//1  //6 7 8
//2  //7 8 9
//3  //8 9 10
//4  //9 1 2

//2 6 7         ias[0][0] , ias[1][0], ias[2][0],
//2 6 8         ias[0][0],  ias[1][0], ias[2][1], 
//2 6 9         ias[0][0],  ias[1][0], ias[2][2]
//

//2 6 7 8        ias[0][0] , ias[1][0], ias[2][0], ias[3][0], 
//2 6 7 9        ias[0][0],  ias[1][0], ias[2][0], ias[3][1],
//2 6 7 10       ias[0][0],  ias[1][0], ias[2][0], ias[3][2],

//2 6 7 8 9       ias[0][0], ias[1][0], ias[2][0], ias[3][0], ias[4][0],
//2 6 7 8 1       ias[0][0], ias[1][0], ias[2][0], ias[3][0], ias[4][1], 
//2 6 7 9 2       ias[0][0], ias[1][0], ias[2][0], ias[3][0], ias[4][2],  

//2 7        

//2 8
