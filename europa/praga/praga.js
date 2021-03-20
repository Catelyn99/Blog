
document.addEventListener('DOMContentLoaded', function () {

document.querySelector('.next').addEventListener('click', function(){
    const imagesMoving = [];
        for (let i=0; i<=document.querySelectorAll('.p-right > .slide-fade').length-1; i++){
        imagesMoving.push(i);
    }
    return imagesMoving;
})
});

