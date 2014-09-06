document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('testButton');
    link.addEventListener('click', function() {
    	console.info('clicked');
        testDowload();
    });
});