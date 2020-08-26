// addEventListener('load', function(e){
//     e.preventDefault();
//     console.log('coucou');
//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', '../../application/class/test.php');
//     xhr.send();

//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log('lol');
//         }
//     };
// });

// AJAX chargement initial des annonces ___________________________________________
const content = document.getElementsByTagName('SECTION');

addEventListener('load', function loadProducts(){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'ajax-postList', true);
    // xhr.send("search=" + search + "&pageStart=" + page);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            content[0].innerHTML = xhr.responseText;
        }
    };
});

// Affichage du modal d'ajout d'annonce ______________________________________________
const addPost = document.getElementById('addPost');

addPost.addEventListener('click', () => {
    const modalAdd = document.getElementById('modalAdd');
    modalAdd.classList.add('active');

    // Cache le modal lors d'un click en dehors de la fenêtre
    modalAdd.addEventListener('click', () => {
        // modalAdd.classList.remove('active');
    });
});

// Display image modal d'ajout ____________________________________________________
function handleFiles(file) {
    let picture = file[0];
    let img = document.getElementById('imgPicture');
    img.file = picture;

    let reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(picture);
}

// Ajax formulaire d'ajout ____________________________________________________
const form = document.getElementById('modalAdd').children[0];
console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('on est dedans');
    let data = new FormData;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'ajax-post-add', true);
    xhr.send(data);

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('lol');
        }
    };
});