const leftBtn = document.getElementById('scrollLeftBtn');
const rightBtn = document.getElementById('scrollRightBtn');
const scrollContainer = document.querySelector('.wrapperOne');


function scrollLft() {
    // document.querySelector('.wrapper').scrollLeft -= 240;
    document.querySelector('.wrapperOne').scrollLeft -= 240;
}

function scrollBtnLeft() {
    document.querySelector('.wrapperTwo').scrollLeft -= 240;
}

function scrollRight() {
    // document.querySelector('.wrapper').scrollLeft += 240;
    document.querySelector('.wrapperOne').scrollLeft += 240;
}

function scrollBtnRight() {
    document.querySelector('.wrapperTwo').scrollLeft += 240;
}

scrollContainer.addEventListener('scroll', () => {
    const scrollPosition = scrollContainer.scrollLeft;
    const maxScrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    if (scrollPosition <= 20) {
        leftBtn.innerHTML = `<img src="images/left_circle_empty_blue_arrow.svg" alt="" class="scroll-left" onclick="scrollBtnLeft()">`;
    }else{
        leftBtn.innerHTML = `<img src="images/left_circle_full_blue_arrow.svg" alt="" class="scroll-left" onclick="scrollBtnLeft()">`;
    }

    if (scrollPosition >= maxScrollWidth - 20) {
        rightBtn.innerHTML = `<img src="images/right_circle_empty_blue_arrow.svg" alt="" class="scroll-right" onclick="scrollBtnRight()">`
    }else {
    rightBtn.innerHTML = `<img src="images/right_circle_full_blue_arrow.svg" alt="" class="scroll-right" onclick="scrollBtnRight()">`
    }
});


// // CENTER FOR AFFLIATED INSTITUTION
// const leftCFOAIBtn = document.getElementById('scrollLeftBtnCFOAI');
// const rightCFOAIBtn = document.getElementById('scrollRightBtnCFOAI');
// const centerFOAIScrollContainer = document.querySelector('.wrapperTwo');


    
// //CFOAI

// centerFOAIScrollContainer.addEventListener('scroll', () => {
//     const scrollPosition = centerFOAIScrollContainer.scrollLeft;
//     const maxScrollWidth = (centerFOAIScrollContainer.scrollWidth - centerFOAIScrollContainer.clientWidth);

//     if (scrollPosition <= 20) {
//         leftCFOAIBtn.innerHTML = `<img src="images/left_empty_circle_gold_arrow.svg" alt="" class="scroll-left" onclick="scrollLft()">`;
//     }else{
//         leftCFOAIBtn.innerHTML = `<img src="images/left_circle_full_gold_arrow.svg" alt="" class="scroll-left" onclick="scrollLft()">`;
//     }

//     if (scrollPosition >= maxScrollWidth - 20) {
//         rightCFOAIBtn.innerHTML = `<img src="images/right_circle_empty_gold_arrow.svg" alt="" class="scroll-right" onclick="scrollRight()">`
//     }else {
//     rightCFOAIBtn.innerHTML = `<img src="images/right_circle_full_gold_arrow.svg" alt="" class="scroll-right" onclick="scrollRight()">`
//     }
// });
    


function name(params) {
    
}

/*
function scrollBtn(amount) {
    document.querySelector('.wrapperOne').scrollLeft += amount;
    scrollBtn(amount);
}
*/