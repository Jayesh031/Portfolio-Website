let menuicon = document.querySelector('#menu-icon');
let navlinks = document.querySelector('.nav-links');

menuicon.onclick = () =>{
    navlinks.classList.toggle('active');
}


let typed2=new Typed('.post',{
    strings:[,'Frontend Developer','Learner','Tech-Explorer',' Engineer'],
    typeSpeed:100,
    backSpeed:100,
    cursorChar:'',
    loop:true,
});
