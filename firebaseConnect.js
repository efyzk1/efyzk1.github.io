// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCQMkvQhJfd5wBkqpQvd3AlveZEYdb-Ftk",
    authDomain: "wrud-f4d80.firebaseapp.com",
    databaseURL: "https://wrud-f4d80-default-rtdb.firebaseio.com",
    projectId: "wrud-f4d80",
    storageBucket: "wrud-f4d80.appspot.com",
    messagingSenderId: "190462988332",
    appId: "1:190462988332:web:b0034d4a7ea0916d6d4189"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var database=firebase.database()

function save(){
    var email=document.getElementById('email').value
    var username=document.getElementById('username').value
    var address=document.getElementById('address').value
    var second_address=document.getElementById('second_address').value
    var postcode=document.getElementById('postcode').value
    var city=document.getElementById('city').value
    var contact_number=document.getElementById('contact_number').value
    

    database.ref('users/'+username).set({
        email:email,
        username:username,
        address:address,
        second_address:second_address,
        postcode:postcode,
        city:city,
        contact_number:contact_number,
        
    })
     
    alert('Saved')
}

