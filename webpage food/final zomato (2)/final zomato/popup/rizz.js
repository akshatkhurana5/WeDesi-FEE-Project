window.addEventListener('load', function() {
    
    var container = document.getElementById('pop');
    var scrollPosition = 0;

    
    var scrollSpeed = 20; 


    var scrollDirection = 1; // Change this value to adjust scroll direction


    function scrollAnimation() {
        
        scrollPosition += scrollSpeed * scrollDirection;

        
        container.scrollTop = scrollPosition;

       
    }

    
    var scrollInterval = setInterval(scrollAnimation, 50); // Change interval for smoother or faster scrolling
});


