var message = ["<a href=http://wp.pl>Technik Informatyk</a>", "Fototechnik", "Technik Obuwnik", "Technik przemyslu mody", "Technik technologii drewna", "Pracownik obslugi hotelowej", "Stolarz", "Tapicer", "Technik Organizacji reklamy"],
        pel = document.getElementById("text"),
        idx = 0,
    getNext = e => pel.innerText = e.target.id == "right" ?
    message[idx = ++idx%message.length]
  : message[idx = (message.length - (message.length - --idx)%message.length)%message.length];
document.getElementById("right").onclick = getNext;
document.getElementById("left").onclick = getNext;