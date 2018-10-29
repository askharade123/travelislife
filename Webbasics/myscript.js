// // const myelement=document.querySelectorAll('p')
// // //myelement.textContent="college"
// // myelement.forEach(function(p)
// // {
// //      p.textContent='hi'
// // })
// // const myelement2=document.querySelector('button').addEventListener('click',(event) =>{
// //     console.log(event.target.textContent="i was clicked")
// // })
// function getOption() {
//     var obj = document.getElementById("city");
 
//    let travelcity=obj.options[obj.selectedIndex].text;


// // if (travelcity == "Pune") {
// document.getElementById("hiddendiv").style.visibility="visible"
// document.getElementById("hiddendiv").style.display="block"
// document.getElementById("UI").style.visibility="hidden"


// } 
// else{
//     document.getElementById("hiddendiv").style.visibility="hidden"
// }
// }
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);    
}
function searched_place1(){
var a=document.getElementById("searched_place").value
a=a.toLowerCase();
if(a=="pune")
{
    window.open("https://www.geodirect.in/pune_sightseeing","newsite");
console.log(a);
}

    else if(a=="chennai")
    {

        window.open("https://www.tripadvisor.in/Attractions-g304556-Activities-Chennai_Madras_Chennai_District_Tamil_Nadu.html");
    }
    else if(a=="banglore"){
          window.open("https://www.tripadvisor.in/Attractions-g297628-Activities-Bengaluru_Bangalore_District_Karnataka.html")
    }
    else if(a=="hyderabad")
    {
        window.open("https://www.tripadvisor.in/Attractions-g297586-Activities-Hyderabad_Hyderabad_District_Telangana.html")
    }

    else if(a=="kolkata")
    {
        window.open("https://www.holidayiq.com/Kolkata-Sightseeing-418.html")
    }
     else if(a=="mumbai")
    {
        window.open("https://www.holidayiq.com/Mumbai-Sightseeing-468.html")
    }
     else if(a=="jaipur")
    {
        window.open("https://www.tourmyindia.com/blog/top-places-to-visit-in-jaipur/")
    }
     else if(a=="ahmedabad")
    {
        window.open("https://www.tripadvisor.in/Attractions-g297608-Activities-Ahmedabad_Ahmedabad_District_Gujarat.html")
    }
     else if(a=="kochi")
    {
        window.open("https://www.tripadvisor.in/Attractions-g297633-Activities-Kochi_Cochin_Ernakulam_District_Kerala.html")
    }
     else if(a=="new delhi")
    {
        window.open("https://www.tripadvisor.in/Attractions-g304551-Activities-New_Delhi_National_Capital_Territory_of_Delhi.html")
    }
     else if(a=="surat")
    {
        window.open("https://www.tourmyindia.com/states/gujarat/surat.html")
    }
     else if(a=="agra")
    {
        window.open("https://www.holidify.com/places/agra/sightseeing-and-things-to-do.html")
    }
    else if(a=="varanasi")
    {
        window.open("https://www.holidayiq.com/Varanasi-Sightseeing-588.html")
    }
    else if(a=="chandigarh")
    {
        window.open("http://www.transindiatravels.com/punjab/chandigarh/places-to-visit-in-chandigarh/")
    }
    }


