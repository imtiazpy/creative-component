const card = document.querySelector('.card');
const see_more = document.querySelector('.see-more');
const go_back = document.querySelector('.go-back');

see_more.addEventListener('click', () => card.classList.toggle('flipped'));
go_back.addEventListener('click', () => card.classList.toggle('flipped'));