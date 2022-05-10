/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                onclick="showImage(event)"
                style="background-image:url('${image}')"
                data-index="${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};

initScreen();

let currentIndex = 0;

const showImage = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.style.backgroundImage);
    console.log(`elem is: ${elem}`);
    let background = document.querySelector('.featured_image');
    currentIndex = parseInt(elem.dataset.index);
    console.log(`index is ${currentIndex}`)
    background.style.backgroundImage = elem.style.backgroundImage;

};


// const handleThumbnailClick = ev => {
//     // consolge.log(ev);
//     const elem = ev.currentTarget;
//     console.log(elem)
//     const bgImage = elem.style.backgroundImage;
//     document.querySelector('.featured_image').style.backgroundImage = bgImage;

// }

// const imageElements = document.querySelectorAll('.image');
// for (const elem of imageElements) {
//     elem.onclick = showImage;
// }

//Hint 2: currentIndex as a global variable:


// create event handler:
// const showImage2 = (ev) => {
//     const elem = ev.currentTarget;
//     currentIndex = parseInt(elem.dataset.index);
//     console.log(currentIndex);
    


//     // update .featured_image
// };

const showNext = (ev) => {
    if (currentIndex > 6){
        currentIndex = 0;
     }else {currentIndex += 1;
     }
   
    // console.log("currentIndex:", currentIndex);
    const elem = ev.currentTarget;
    index = elem.dataset.index;
    let background = document.querySelector('.featured_image').style.backgroundImage;
    console.log(`background is: ${background}`);
    console.log(`element is: ${elem.dataset}`);
    let image = images[`${currentIndex}`]
    //console.log(images);
    console.log(`image is ${image}`);
    console.log(`currentIndex is: ${currentIndex}`);
    document.querySelector('.featured_image').style.backgroundImage = `url(${image})`;
   


    
    


    

    // const elem = ev.currentTarget;
    // currentIndex = parseInt(elem.dataset.index);
    // let background = document.querySelector('.featured_image');
    // feature = elem.dataset.index;
    // console.log(`feature is ${feature}`);
    // background.style.backgroundImage = elem.style.backgroundImage;

    
    


    
    // update .featured_image

};

const showPrev = (ev) => {
    if (currentIndex <1){
        currentIndex = 7;
     }else { currentIndex -= 1;
     }
    console.log("currentIndex:", currentIndex);
    const elem = ev.currentTarget;
    index = elem.dataset.index;
    let background = document.querySelector('.featured_image').style.backgroundImage;
    console.log(`background is: ${background}`);
    console.log(`element is: ${elem.dataset}`);
    let image = images[`${currentIndex}`]
    //console.log(images);
    console.log(`image is ${image}`);
    document.querySelector('.featured_image').style.backgroundImage = `url(${image})`;

    // update .featured_image
    

};


// attach event handler to all of the image tags 
// (after initScreen() has been invoked).
// const imageElements2 = document.querySelectorAll('.image');
// for (const elem of imageElements2) {
//     elem.onclick = showImage;
// }

document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;
