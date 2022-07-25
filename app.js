const adList = ['ad', 'ads', 'ad-banner', 'ad-box', 'ad-badge'];

const detect = document.querySelector('#detect');
const button = document.querySelector('button');
const container = document.querySelector('.container');

for(let ad of adList){
    detect.classList.add(ad);
}

function checkAdBlock(){
    let property = window.getComputedStyle(detect).getPropertyValue('display');

    if(!container.classList.contains('show')){
        if(property === 'none'){
            container.classList.add('show');
        }
    }
}

button.addEventListener('click', () => {
    container.classList.remove('show');
});

document.addEventListener('mousedown', checkAdBlock);

checkAdBlock();