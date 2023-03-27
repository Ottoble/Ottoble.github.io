const prevPages = {
    "loginPage": "index.html",
    "createAccPage" : "index.html",
    'uploadPage' : 'createAcc.html',
    "rent" : 'main.html',
    'rentTime': 'rent.html',
    'return': "selectCar.html",
    'doTime' : 'dropOff.html',
    'selCar' : 'pickupTime.html'
}


function newPage(currPage){
    window.location.href = prevPages[currPage];
}

function createAcc(){
    let form = document.getElementById('createUserIdForm')
    if(form[0].value != ""){
        if (form[1].value != ""){
            let email = form[2].value;
            if(email.includes('@') && email.includes('.')){
                if(form[3].value != ""){
                    window.location.href = 'upload.html';
                }else{
                    event.preventDefault();
                    alert("Please enter a password")
                    document.getElementById('password').focus()
                }
            }else{
                event.preventDefault();
                alert("Invalid Email")
                document.getElementById('email').focus()
            }
        }else{
            event.preventDefault();
            alert("Please enter a last name")
            document.getElementById('lastName').focus()
        } 
    }else{
        event.preventDefault();
        alert("Please enter a first name")
        document.getElementById('firstName').focus()
    }

    return true;
}

function uploadImg(){
    event.preventDefault()
    window.location.href = 'main.html'
    return true;
}

let showingMenu = true;
function menu(element){
    if(element = 'menu'){
        let list = document.getElementById("list");

        if(showingMenu){
            list.style.display = 'none'
            showingMenu = false;
        }else{
            list.style.display = 'block'
            showingMenu = true;
        }
    }
}

function showSuggested(){
    document.getElementById("suggested").style.display = 'block';
}

function hideSuggested(){
    document.getElementById("suggested").style.display = 'none';
}

function fillLocation(field, value){
    console.log('here')
    let input = document.getElementById(field);
    input.value = value;
    console.log(input.id, input.value)
    return true
}

function selectPoint(field, pointNum){
    let location = document.getElementById(field);
    if(pointNum == 1){
        location.value = 'Location 1';
    }else if(pointNum == 2){
        location.value = 'Location 2';
    }else if(pointNum == 3){
        location.value = 'Location 3';
    }

    console.log(location.value);
}

function puloc(){
    event.preventDefault()
     if(document.getElementById('pickUpLoc').value != ""){
        window.location.href = 'pickupTime.html'
    }
    return true
}

function puTime(){
    event.preventDefault()
    window.location.href = 'selectCar.html'
    return true
}

function doloc(){
    event.preventDefault()
     if(document.getElementById('dropOfLoc').value != ""){
        window.location.href = 'dropOffTime.html'

    }
    return true
}
const car0 = {
    img: 'car1.png',
    price :'$100',
    model: 'Model 1',
    year: '2019',
    tag : ['5 Seats','4 Wheels','Automatic']
}

const car1 = {
    img: 'car2.png',
    price: '$300',
    model: 'Model 2',
    year: '2021',
    tag : ['3 Seats','Electric','Manual']
}

const listOfCars = [car0, car1];
    
function loadCar(car){
    if(car == 0){
        document.getElementById('leftArrow').style.visibility = 'hidden';
    }//else{
    //     document.getElementById('leftArrow').style.visibility = 'visible';
    // }
    if(car == listOfCars.length){
        document.getElementById('rightArrow').style.visibility = 'hidden';
    }
    // else{
    //     document.getElementById('rightArrow').style.visibility = 'visible';
    // }
    let carNum = listOfCars[car];
    let img = document.getElementById('carImg');
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let price = document.getElementById('price');

    img.src = carNum.img;
    model.innerHTML  = carNum.model;
    year.innerHTML  = carNum.year;
    price.innerHTML  = carNum.price;
    document.getElementById('tag1').innerHTML  = carNum.tag[0];
    document.getElementById('tag2').innerHTML  = carNum.tag[1];
    document.getElementById('tag3').innerHTML  = carNum.tag[2];
}

function nextCar(){
    try{
        loadCar(car++)
    }catch(error){
        console.log(error, "out of bound")
    }
}
window.onload = function(){
    currPage = document.getElementsByTagName("body")[0].id;
    console.log(currPage);

    if(currPage != 'startPage' && currPage != 'main'){
        document.getElementById("backBtn").onclick = function(){
            newPage(currPage);
        };

        if(currPage == 'uploadPage'){
            let img = document.getElementById('license');
            img.addEventListener("input", function(){
                console.log(img.value);
                if(img.value){
                    document.getElementById('loginBtn').style.backgroundColor = 'orange';
                }
            })
        }

        if(currPage == 'selCar'){
            loadCar(0);
            
        }


    }else if(currPage == 'startPage'){
        document.getElementById("signIn").onclick = function(){
            window.location.href = 'login.html';
        };
        document.getElementById('createAcc').onclick = function(){
            window.location.href = 'createAcc.html';
        }
           
    }else if(currPage == 'loginPage'){
        document.getElementById('loginBtn').onclick = function(){
            window.open('test.html', '_self');
        }
    }
}
