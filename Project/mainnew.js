// const show = () => {
// 	document.getElementById('newTask').style.display = "block";
// 	// document.getElementById('input').style.display = "none";
		
// 	console.log("working");
// 	}
const openModal = () => {
        // document.getElementById('newTask').style.display = "block";
        // document.getElementById('input').style.display = "none";
        document.getElementById("myModal").style.display="block";
        // console.log("working");
        }


const closeModal = () => {
    close = document.getElementsByClassName("close")[0];
    document.getElementById("myModal").style.display="none";
}



// const getInputFromTextBox =() => {
//     input = document.getElementById("addtask").value;
// }

counter = 1; 
const displayTask = () => {
    var select = document.getElementById('Days');
    var value = select.options[select.selectedIndex].value;

    console.log(value); 
	var x = document.getElementById("addask").value; 
    var template = ` <div class="row"> <p id="userTask${counter}">${x}</p>
    <input type="checkbox" class="checkbox" id="Box" onclick="finishTask('userTask${counter}')"></div>`
    counter++;
	document.getElementById(`${value}tasks`).insertAdjacentHTML("beforeend", template);
    console.log(document.querySelector("select.option.value"));
	console.log(`the value of x is: ${x}`)
	document.getElementById("myModal").style.display="none";
	// document.getElementById("Box").style.display="block";

}

counter2=0;
const finishTask= (id) => {
    console.log(id);
    var x = document.getElementById(id).innerHTML;
        document.getElementById(id).innerHTML = x.strike(); 

    }