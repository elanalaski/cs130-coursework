const addTheNumbers = () => {
    // Your code here...
    console.log('add the numbers...');
    let num1 = document.querySelector('#num1').value;
    console.log(num1);
    let num2 =document.querySelector('#num2').value;
    console.log(num2);
   
    let sum = Number(num1) + Number(num2);
    console.log(sum)

    document.querySelector('#answer').innerHTML = sum;

}

document.getElementById('add').onclick = addTheNumbers;


const subtractTheNumbers = () => {
    // Your code here...
    console.log('subtract the numbers...');
    let num1 = document.querySelector('#num1').value;
    console.log(num1);
    let num2 =document.querySelector('#num2').value;
    console.log(num2);
    let sum = Number(num1) - Number(num2);
    console.log(sum)
    document.querySelector('#answer').innerHTML = sum;

}

document.getElementById('subtract').onclick = add_numbers;


