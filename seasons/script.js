const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seasons = [
    {
        "title":"seasons",
        "image":"img/seasons.jpg",
        "background":"gray"
    },
    {
        "title":"spring",
        "image":"img/spring.jpg",
        "background":"green"
    },
    {
        "title":"summer",
        "image":"img/summer.jpg",
        "background":"yellow"
    },
    {
        "title":"autumn",
        "image":"img/autumn.jpg",
        "background":"brown"
    },
    {
        "title":"winter",
        "image":"img/winter.jpg",
        "background":"white"
    }
];

// let season ={
//     "title":"lente",
//     "image":"img/spring.jpg"
// };

function show(index){
    myTitle.innerHTML = seasons[index].title;
    myImage.src = seasons[index].image;
    document.body.style.background = seasons[index].background;
}