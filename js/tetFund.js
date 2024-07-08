const footerImages = document.querySelectorAll('.pop-up-footer-images > img');
const imageDisplay = document.querySelectorAll('.popup-image-container');
const firstImage = document.getElementById('image-Display1');
const secondImage = document.getElementById('image-Display2'); 
const thirdImage = document.getElementById('image-Display3');
const firstFooter = document.getElementById('footer1');
const secondFooter = document.getElementById('footer2');
const thirdFooter = document.getElementById('footer3');


footerImages.forEach(fImage => {
    fImage.addEventListener('click', event => {
        footerImages.forEach(footerItem => {
            if(footerItem.classList.contains('activeFooter')){
                footerItem.classList.remove('activeFooter');
            };
        })
        imageDisplay.forEach(imgDisp => {
            if(imgDisp.classList.contains('imageActive')){
                imgDisp.classList.remove('imageActive');
            };
        })
        console.log(event.target.classList);
        if(event.target.classList.contains('footer1')) {
            firstFooter.classList.add('activeFooter');
            firstImage.classList.add('imageActive');
            console.log(firstImage);
        }
        else if(event.target.classList.contains('footer2')) {
            secondFooter.classList.add('activeFooter');
            secondImage.classList.add('imageActive');
            console.log(secondImage);
        }
        else if(event.target.classList.contains('footer3')) {
            thirdFooter.classList.add('activeFooter');
            thirdImage.classList.add('imageActive');
            console.log(thirdImage);
        }
    })
})