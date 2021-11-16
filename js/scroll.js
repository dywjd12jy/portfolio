let i = 1;
let y = window.innerHeight;
let scrollPosition = true;
let scrollDelay = false;
const scrollDelayTime = 1000;
setTimeout(() => {
    window.scrollTo(0,0);
}, 100);
function scrollEvent(e){
    if(!scrollDelay){
        i = scrollPosition?i = Math.max(i-1,1):i = Math.min(s.length,i+1);
        i = e !== 0? e:i;
        st.style.transform=`translateY(-${y*(i-1)}px)`;
        st.style.transition=`transform ${scrollDelayTime}ms`;
        scrollDelay = true;
        setTimeout(() => {
            scrollDelay = false;
        }, scrollDelayTime );
    }
    if(i === 3){
        s[3].classList.add('on');
    }else{
        s[3].classList.remove('on');
    }
}
function scrollResize(){
    st.style.transform=`translateY(-${y*(i-1)}px)`;
    st.style.transition='transform 0s';
}
window.addEventListener('resize',function(){
    y = window.innerHeight;
    scrollResize();
},{passive:false});
document.addEventListener('mousewheel',function(a){
    if(a.wheelDelta >= 0){
        scrollPosition = true;
    }else{
        scrollPosition = false;
    }
    scrollEvent(0);
},{passive:false});
