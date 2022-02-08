export default function admin_main_header() {
    const _DropDowns = document.querySelectorAll('.main-header .dropdown a'); 
    _DropDowns.forEach( (ele) => {
        ele.addEventListener('click',(event)=>{
            event.preventDefault();
            const dropdowns = document.querySelectorAll('.main-header .dropdown');
            dropdowns.forEach(ele=>{
                ele.classList.remove('show');
            })
            ele.parentElement.classList.toggle('show');
            for (let sibling of ele.parentNode.children) {
                if (sibling !== ele) sibling.classList.remove('show');
            }
        })
    })
    document.addEventListener('click',close_menu);
    document.addEventListener('touchstart',close_menu);
}

//Close dropdown menu of header menu
function close_menu(event){
    event.stopPropagation();
    const dropTarg = event.target.closest('.main-header .dropdown');
    const dropdowns = document.querySelectorAll('.main-header .dropdown');
    if(!dropTarg){
        dropdowns.forEach(ele=>{
            ele.classList.remove('show');
        })
    }
}