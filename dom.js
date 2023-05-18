// const category = document.getElementById("inco");
// const amount = document.querySelector("#am");

// console.log(category.textContent);

// let element = document.querySelector("#main");
// element.addEventListener("click", eventhandler);




// function eventhandler(Event) {
//     // Access the ID of the clicked element

//     let elementId = Event.target.id;

//     switch (elementId) {
//         case "in":
//             let element0 = document.createElement("h4");
//             let element2 = document.createElement("label");

//             element0.textContent = category.value;
//             element2.textContent = amount;

//             let parentElement0 = document.getElementById('i1');
//             parentElement0.appendChild(element0);
//             let parentElement2 = document.getElementById('r2');
//             parentElement2.appendChild(element2);

//             break;
//         case "ex": ;


//             break;
//         case "i1":
//             // alert("you have deleted a transaction");
//             removeChild.closest();
//             break;
//         default:
//         // alert("not executed anything");
//     }

// }




// const category = document.getElementById("inco");
// const amount = document.querySelector("#am");

// console.log(category.textContent);

// let element = document.querySelector("#main");
// element.addEventListener("click", eventHandler);

// function eventHandler(event) {
//     // Access the ID of the clicked element
//     let elementId = event.target.id;

//     switch (elementId) {
//         case "in":
//             let element0 = document.createElement("h4");
//             let element2 = document.createElement("label");

//             element0.textContent = category.value;
//             element2.textContent = amount.value;

//             let parentElement0 = document.getElementById('h22');
//             parentElement0.appendChild(element0);
//             let parentElement2 = document.getElementById('r2');
//             parentElement2.appendChild(element2);
//             element.style.borderColorRight = "green"

//             break;
//         case "ex":

//             let element3 = document.createElement("h4");
//             let element4 = document.createElement("label");

//             element3.textContent = category.value;
//             element4.textContent = amount.value;

//             let parentElement3 = document.getElementById('h22');
//             parentElement3.appendChild(element3);
//             let parentElement4 = document.getElementById('r2');
//             parentElement4.appendChild(element4);
//             element.style.borderColorRight = "red"
//             break;
//         case "i1":
//             let transactionElement = event.target.closest('.transaction');
//             if (transactionElement) {
//                 transactionElement.remove();
//             }
//             break;
//         default:
//     }
// }
const category = document.getElementById("inco");
const amount = document.querySelector("#am");

console.log(category.textContent);

let element = document.querySelector("#main");
element.addEventListener("click", eventHandler);

function eventHandler(event) {
    // Access the ID of the clicked element
    let elementId = event.target.id;

    switch (elementId) {
        case "in":
            let element0 = document.createElement("h4");
            let element2 = document.createElement("label");

            element0.textContent = category.value;
            element2.textContent = amount.value;

            let parentElement0 = document.getElementById('h22');
            parentElement0.appendChild(element0);
            let parentElement2 = document.getElementById('r2');
            parentElement2.appendChild(element2);
            element.style.borderRightColor = "green";
            break;
        case "ex":
            let element3 = document.createElement("h4");
            let element4 = document.createElement("label");

            element3.textContent = category.value;
            element4.textContent = amount.value;

            let parentElement3 = document.getElementById('h22');
            parentElement3.appendChild(element3);
            let parentElement4 = document.getElementById('r2');
            parentElement4.appendChild(element4);
            element.style.borderRightColor = "red";
            break;
        case "i1":
            let transactionElement = event.target.closest('.transaction');
            if (transactionElement) {
                transactionElement.remove();
            }
            break;
        default:
    }
}
