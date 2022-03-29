// const { time } = require("console");
const curTime = new Date().getTime();
window.addEventListener('load', function(){
    let tag = document.getElementById('LoadTime');
    let time = tag.textContent;
    const loadTime = (new Date()).getTime() - curTime;
    tag.textContent = 'client: ' + loadTime + ' ms, server: ' + time; 
});

