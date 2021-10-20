
	name_of_the_student_array = [];
	
	function submit()
	{
        
        var name_1 = document.getElementById("name_of_the_student_1").value;
        var name_2 = document.getElementById("name_of_the_student_2").value;
        

        name_of_the_student_array.push(name_1);
        name_of_the_student_array.push(name_2);
        
		console.log(name_of_the_student_array);
		
        document.getElementById("display_name").innerHTML = name_of_the_student_array;
        document.getElementById("submit_button").style.display = "";
        document.getElementById("sort_button").style.display = "";

	}

function sorting()
{
	
    console.log(name_of_the_student_array);
	document.getElementById("display_name").innerHTML = name_of_the_student_array;
}
