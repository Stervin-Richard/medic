let images = ['galary/portrait-successful-mid-adult-doctor-with-crossed-arms.jpg',
    'galary/young-asian-female-dentist-white-coat-posing-clinic-equipment.jpg','galary/doctor-s-hand-holding-stethoscope-closeup.jpg']
let index = 0
function next(){
    index++;
    if(index === 3){
        index = 0
    }
}
let img = document.getElementById('photos');
let source = images[index];
img.src = source;
setInterval(() => {
    next();
    let source = images[index];
    img.src = source;
},3000)



