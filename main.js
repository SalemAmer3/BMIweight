

let ss = document.querySelector('.ss')
document.querySelector(".btn").addEventListener('click', function(){
    
    let weight = document.querySelector('.wei').value;
    let height = document.querySelector('.hei').value;

    let mass = (weight/(height*height)); 
    let screen = document.querySelector('.ss');

    const bmi = `Your mass is ${mass.toFixed(3)} `;

    switch(true){

        case isNaN(mass):
            ss.setAttribute("style", "color: red;");
            screen.value = `Enter weight and height..!`;
            break;

        case(mass <18.5):
            ss.setAttribute("style", "color: blue;");
            screen.value = `${bmi} under weight`;
            break;
        
        case(mass <=24.5):
            ss.setAttribute("style", "color: green;");
            screen.value = `${bmi} Normal weight`;
            break;
    
        case(mass <=29.9):
            ss.setAttribute("style", "color: yellow;");
            screen.value = `${bmi} Over weight`;
            break;
    
        case(mass <=35):
            ss.setAttribute("style", "color: orange;");
            screen.value = `${bmi} OBESE `;
            break;
    
    
        default:
            ss.setAttribute("style", "color: red;");
            screen.value = `${bmi} Extremely obese`;
        
    }

});

