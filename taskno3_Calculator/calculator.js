let output = document.querySelector(".output");
let buttons = document.querySelectorAll(".btn");

let arr = Array.from(buttons);
let string = "";
arr.forEach((button) => {

    button.addEventListener("click", (e) => {

        if (e.target.innerHTML == "DEL") {
            string = string.toString().slice(0, -1);
            output.innerText = string;
        }else if(e.target.innerHTML == "AC"){
            string = "";
            output.innerText=string;
        }else if(e.target.innerHTML == "="){
            string=eval(string);
            output.innerText=string;
        }
         else {
            string += e.target.innerHTML;
            output.innerText = string;
        }
    })
});
