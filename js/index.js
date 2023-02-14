// --------- Start Function Area ----------------

// function targetButton(button){
//    const totalBtn = document.getElementById(button);
//     return totalBtn;
// }

// function getInputValue(inputValu){
//     const totalInput = document.getElementById(inputValu);
//     const totalInputValu = totalInput.value;
// }

// --------- End Function Area ----------------



document.getElementById('b').addEventListener('click', function(){
    const inputField = document.getElementById('inputText');
    inputField.style.fontWeight = 'bold';

})

document.getElementById('i').addEventListener('click', function(){
    const inputField = document.getElementById('inputText');
    inputField.style.fontStyle = "italic";

})

document.getElementById('u').addEventListener('click', function(){
    const inputField = document.getElementById('inputText');
    inputField.style.textDecoration = "underline";
})


document.getElementById('centerText').addEventListener('click', function(){
    const inputField = document.getElementById('inputText');
    inputField.style.textAlign = "center";

})

document.getElementById('leftText').addEventListener('click', function(){
    const inputField = document.getElementById('inputText');
    inputField.style.textAlign = "left";

})

document.getElementById('rightText').addEventListener('click', function(){
    const inputField = document.getElementById('inputText');
    inputField.style.textAlign = "right";

})


document.getElementById('justifyText').addEventListener('click', function(){
    const inputField = document.getElementById('inputText');
    inputField.style.textAlign = "justify";

})

document.getElementById('quantity').addEventListener('click',function(e){
    const inputField = document.getElementById('inputText');
    inputField.style.fontSize = e.target.value + 'rem'


})




    const inputField = document.getElementById('inputText');
    const colorValue = document.getElementById("head").value;
    inputField.style.color =colorValue;
    document.getElementById("head").addEventListener('change', function(e){

        inputField.style.color = e.target.value
        
    })


   







