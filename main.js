name_of_the_student_array = [];

function submit(){

    var display_student_array = [];

    for (var k = 1 ; k <= 4 ; k++){

        var name_of_the_student = document.getElementById("name_of_the_student_" + k).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }

    console.log(name_of_the_student_array);
    
    var length_of_the_Student_array = name_of_the_student_array.length;
    console.log(length_of_the_Student_array);

    for (var i = 0 ; i < length_of_the_Student_array ; i++){

        display_student_array.push("<h4> NAME - " + name_of_the_student_array[i] + "</h4>");
        console.log(display_student_array);
    }

    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting() {
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    
    var display_student_array_sorting = [];
    var length_of_name_of_student_array = name_of_the_student_array.length;

    console.log(length_of_name_of_student_array);

    for (var j = 0 ; j < length_of_name_of_student_array ; j++){

        display_student_array_sorting.push("<h4> NAME -" + name_of_the_student_array[j] + "</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function new_update(){
document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_student_array + "</h1>";
}