
const open_btn = document.querySelector('.modal-btn');
const box_modal = document.querySelector(".box-modal");
const open_modal = document.querySelector(".open-modal");
const box_container = document.querySelector(".box_container");

const modal = document.querySelector(".modal")
const modalBackdrop = document.querySelector(".modal-backdrop")
const modalCloseBtn = document.querySelector(".modal-close-btn");

open_btn.addEventListener('click',function(){
    modal.classList.remove("hide");
})

modalBackdrop.addEventListener("click", closeModal)

modalCloseBtn.addEventListener("click", closeModal)

function closeModal() {
    modal.classList.add("hide");
}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(e){
//     console.log((e.target.closest(".box_container")));
//     if ((!e.target.closest(".box_container" )) || e.target == box_container) {
//         open_modal.style.display = "none";
//         box_modal.classList.remove('blur');
//         open_btn.style.pointerEvents = "auto"; 
//       }
// }
