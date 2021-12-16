const bookMark = () =>{
    if(document.querySelector('.selected-bookmark-svg').style.display === "block"){
        document.querySelector('.selected-bookmark-svg').style.display ="none";
        document.querySelector('.not-selected-bookmark-svg').style.display ="block";
        document.querySelector('.bookmark-text').style.color ="#00b894";
    }else{
        document.querySelector('.selected-bookmark-svg').style.display ="block";
        document.querySelector('.not-selected-bookmark-svg').style.display ="none";
        document.querySelector('.bookmark-text').style.color ="#000000";
    }

}


const  closePopUp = () =>{
    document.querySelector('.form-modal-container').style.display = "none";
}

const openPopUp = () =>{
    document.querySelector('.form-modal-container').style.display = "block";

}