// const btnDisplays= document.getElementById('btnDisplays');
// btnDisplays.addEventListener('click', ()=>{
//     let Weight= document.getElementById('weight').value;
//     let Height= document.getElementById('height').value;
//     let Result= Weight * Height;
//     document.getElementById('Result').innerText= Result;
//     console.log(Result);
// });

const btnDisplayss= document.getElementById('btnDisplayss');
btnDisplayss.addEventListener('click', ()=>{
    let weight= document.getElementById('weight').value;
    let height= document.getElementById('height').value;
    let Result= 0;
    document.getElementById('Result').innerText= Result;
    console.log(Result);
});

let Result = document.getElementById('Result');
let Results = document.getElementById('Results');

function calculate(){
    let weight= document.getElementById('weight').value;
    let height= document.getElementById('height').value;
    let Result= (weight/((height* height) /10000)).toFixed(2);
    document.getElementById('Result').innerText= Result + "kg/m2";
    switch(true) {
    case (Result<=100 && Result>=45):
        document.getElementById('Results').innerText= `Sorry but you're fat`;
        break;
        case (Result<=44 && Result>=21):
            document.getElementById('Results').innerText= `Sorry but you\'re getting fat`;
        break;
        case (Result>101):
            document.getElementById('Results').innerText= `Sorry but extremely you're fat`;
        break;
            case (Result<=20 && Result>=11):
                document.getElementById('Results').innerText= `You are skinny enough`;
        break;
        case (Result<=10 && Result>=1):
            document.getElementById('Results').innerText= `Sorry but you\'re a little bit too skinny`;
        break;
        default :
        document.getElementById('Results').innerText= `it's not that deep, Bro just hit the gym`;
    }
}

