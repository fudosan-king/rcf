export default function admin_left_menu() {
	const slideMenu = document.querySelector('.side-menu');
	
	const _SideBars = document.querySelectorAll('[data-toggle=sidebar]');
	console.log(_SideBars);
	_SideBars.forEach( ele => {
		ele.addEventListener('click', (event) => {
			event.preventDefault();
			console.log(123);
			// console.log(document.querySelector('.app'));
			document.querySelector('.app').classList.toggle('sidenav-toggled');
		});	
	})	
	

	// Activate sidebar slide toggle
	const _Slides = document.querySelectorAll('[data-toggle=slide]');
	_Slides.forEach( (ele) => {
		ele.addEventListener('click',(event)=>{
			event.preventDefault();
			if( !ele.parentElement.classList.contains('is-expanded') ){
				const _Childs = slideMenu.querySelectorAll('[data-toggle=slide]');
				_Childs.forEach((ele_child)=>{
					ele_child.parentElement.classList.remove('is-expanded');
				})
			}
			ele.parentElement.classList.toggle('is-expanded');
		});
	});

	const _SubSlides = document.querySelectorAll('[data-toggle=sub-slide]');
	_SubSlides.forEach( (ele) => {
		ele.addEventListener('click',(event)=>{
			event.preventDefault();
			if( !ele.parentElement.classList.contains('is-expanded') ){
				const _Childs = slideMenu.querySelectorAll('[data-toggle=sub-slide]');
				_Childs.forEach((ele_child)=>{
					ele_child.parentElement.classList.remove('is-expanded');
				})
			}
			ele.parentElement.classList.toggle('is-expanded');
		});
	});

	// Set initial active toggle
	const hasExpandeds = document.querySelectorAll('[data-toggle="slide."].is-expanded');
	hasExpandeds.forEach((ele)=>{
		ele.parentElement.classList.toggle('is-expanded');
	});
	const hasSubExpandeds = document.querySelectorAll('[data-toggle="sub-slide."].is-expanded');
	hasSubExpandeds.forEach((ele)=>{
		ele.parentElement.classList.toggle('is-expanded');
	});

	// ______________Active Class
	const _SideBarActives = document.querySelectorAll('.app-sidebar a');
	_SideBarActives.forEach( ele =>{
		const pageUrl = window.location.href.split(/[?#]/)[0];
		if( ele.href === pageUrl ){
			ele.classList.add('active');
			ele.parentElement.classList.add('active');
			ele.parentElement.parentElement.previousSibling.classList.add('active');
			ele.parentElement.parentElement.parentElement.parentElement.classList.add('active');
			ele.parentElement.parentElement.previousSibling.click();
		}
	});

	const toggleSidebar = () => {
		const body = document.querySelector('body');
		if ( window.outerWidth <= 1024 ){
			body.classList.add('sidebar-gone');
			body.addEventListener('click', event => {
				event.preventDefault();
				if( event.target.classList.contains('sidebar-show') || event.target.classList.contains('search-show') ){
					body.classList.remove('sidebar-show');
					body.classList.add('sidebar-gone');
					body.classList.remove('search-show');
				}
			})
		} else {
			body.classList.remove('sidebar-gone');
		}
	}
	toggleSidebar();
	window.addEventListener('resize',toggleSidebar);

}	