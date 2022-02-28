document.querySelectorAll('.aboutMe__galery img, .portfolio__content-img img').forEach(image =>{
image.onclick = () =>{
    document.querySelector('.popup-img, .portfolio__popup-img').style.display = 'block';
    document.querySelector('.popup-img img, .portfolio__popup-img img').src = image.getAttribute('src')
}
});

document.querySelector('.popup-img span, .portfolio__popup-img span').onclick = () =>{
    document.querySelector('.popup-img, .portfolio__popup-img').style.display = 'none';
}

    
