(function() {
    window.startTime = (new Date()).getTime();
    window.addEventListener('load', function(){
        document.getElementById('LoadTime').innerHTML = ((new Date).getTime() - window.startTime) + 'ms'
    });
})();
