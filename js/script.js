let count = 230025;

function updateCounter() {
    count++;
    let formattedCount = ("000000000" + count).slice(-8).replace(/\B(?=(\d{3})+(?!\d))/g, "<span class='separator'> | </span>");
    document.getElementById("counter").innerHTML = formattedCount;
}

setInterval(updateCounter, 1000);