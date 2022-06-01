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


const displayTask = () => {
	
	var x = document.getElementById("addask").value;
	document.getElementById("userTask").innerHTML = x
	console.log(`the value of x is: ${x}`)
	document.getElementById("myModal").style.display="none";
	document.getElementById("Box").style.display="block";
}

const finishTask= () => {
	var x = document.getElementById("addask").value;
	document.getElementById("userTask").innerHTML = x.strike(); 
}