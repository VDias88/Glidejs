
function goDown(){
    window.scrollBy(0,window.innerHeight);
}

//glider
const glider1=new Glide('.glide',{
    type:'slider',
    focusAt:'center',
    startAt:0,
    perView: 1,
}).mount()