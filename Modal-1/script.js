
// ===== MODAL ===== 
const modalButton = document.getElementById('modal-button');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-modal-detail');

// ==Show-modal
modalButton.onclick = function(){
    modal.style.display = 'block';
}

// ==Close-button in the modal
closeButton.onclick = function(){
    modal.style.display = 'none';
}
// ==Close when anywhere user click outside modal
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = 'none';
    }
}
