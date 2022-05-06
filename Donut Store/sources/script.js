$(document).ready(function(){
    $('.carousel').slick({
        adaptiveHeight:true,
        arrows:true,
        dots:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        zIndex:1
    });
    $('.review-carousel').slick({
        arrows:true,
        dots:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        zIndex:1
    });


    addReview('rgb(173, 216, 230)', 'Matt', 5, 'seriously some of the best donuts I have ever had. We ordered a bunch and ate them all the same day. Gonna get them again another time for sure, 5 stars')
    addReview('rgb(94, 205, 128)', 'Rob', 4, 'the boston cream donuts are actually really good. the fresh chocolate top and the cream on the inside all tasted really good. super good donuts to order for family and friends or anyone')
    addReview('rgb(94, 205, 128)', 'Shawn', 3, 'bought them a couple times, they were pretty good')
    addReview('rgb(255, 255, 75)', 'Papa', 5, "I've been buying TheDeer Donuts for many years now, never dissapointed. Recently I tried ordering the pancakes and they were just as delicious! The food from this place is absolutely delicious and of great quality.")
    addReview('rgb(255, 70, 70)', 'Tony', 4, 'decided to get some TheDeer Donuts for a little party and everyone loved them. yall should make sure to get the boston cream ones, they were actually really good')
    addReview('rgb(93, 255, 158)', 'Arianna', 5, 'we have got dozens of donuts multiple times. The double chocolate ones were favourites among our kids, they loved it. Great treats to order for children')
    


    document.getElementsByClassName('easter-egg')[0].addEventListener('click', () => {
        document.getElementsByClassName('easter-egg')[0].remove();
    })



});

function addReview(iconColor, name, stars, review){


    
    const reviewTemp = document.getElementById('review-template')
    const reviews = document.getElementById('review-carousel')
    let newReview = reviewTemp.cloneNode(true)
    
    newReview.content.children[0].children[0].children[0].children[0].children[0].style.backgroundColor = iconColor;
    newReview.content.children[0].children[0].children[0].children[1].children[0].textContent = name;
    newReview.content.children[0].children[0].children[1].innerHTML = review;

    for (var i = 0; i < 5; i++){
        if(i < stars){
            newReview.content.children[0].children[0].children[0].children[1].children[1].children[i].src = 'sources/star-active.png'
        } else {
            newReview.content.children[0].children[0].children[0].children[1].children[1].children[i].src = 'sources/star-inactive.png'
        }
    }
    
    newReview.content.children[0].children[0].children[0].children[1].children[1].children[1]
    newReview.content.children[0].children[0].children[0].children[1].children[1].children[2]
    newReview.content.children[0].children[0].children[0].children[1].children[1].children[3]
    newReview.content.children[0].children[0].children[0].children[1].children[1].children[4]

    $('.review-carousel').slick('slickAdd', newReview.content.children[0]);
}


function addNewReview(){
    const reviewTemp = document.getElementById('review-template')
    const reviews = document.getElementById('review-carousel')
    let newReview = reviewTemp.cloneNode(true)

    const inputValues = [
        document.getElementById('add-review-name'),
        document.getElementById('add-review-rate'),
        document.getElementById('add-review-review')
    ]
    
    const colorValues = [
        'rgb(173, 216, 230)',
        'rgb(94, 205, 128)',
        'rgb(94, 205, 128)',
        'rgb(255, 255, 75)',
        'rgb(255, 70, 70)',
        'rgb(93, 255, 158)'
    ]

    

    newReview.content.children[0].children[0].children[0].children[0].children[0].style.backgroundColor = colorValues[Math.floor(Math.random()*colorValues.length)];
    newReview.content.children[0].children[0].children[0].children[1].children[0].textContent = inputValues[0].value;
    newReview.content.children[0].children[0].children[1].innerHTML = inputValues[2].value;

    for (var i = 0; i < 5; i++){
        if(i < inputValues[1].value){
            newReview.content.children[0].children[0].children[0].children[1].children[1].children[i].src = 'star-active.png'
        } else {
            newReview.content.children[0].children[0].children[0].children[1].children[1].children[i].src = 'star-inactive.png'
        }
    }
    
    newReview.content.children[0].children[0].children[0].children[1].children[1].children[1]
    newReview.content.children[0].children[0].children[0].children[1].children[1].children[2]
    newReview.content.children[0].children[0].children[0].children[1].children[1].children[3]
    newReview.content.children[0].children[0].children[0].children[1].children[1].children[4]

    $('.review-carousel').slick('slickAdd', newReview.content.children[0]);

    closeReview();
    $('.review-carousel').slick(`slickGoTo`, false);

    inputValues[0].value = '';
    inputValues[1].value = '';
    inputValues[2].value = '';


}




function openReview(){
    const reviewBox = document.getElementById('add-review');
    reviewBox.style.display = 'block'
}

function closeReview(){
    const reviewBox = document.getElementById('add-review');
    reviewBox.style.display = 'none'
}


