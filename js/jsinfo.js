
/* Stops Navbar from hiding initial content when jumping to in-page anchor*/

var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
