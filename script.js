var message = ["Kniaziu", "Kusiu", "Sztywny", "Kamien", "Gniewko", "Boczek", "Kornik", "Bochniak", "Dega"],
        pel = document.getElementById("text"),
        idx = 0,
    getNext = e => pel.innerText = e.target.id == "right" ?
    message[idx = ++idx%message.length]
  : message[idx = (message.length - (message.length - --idx)%message.length)%message.length];
document.getElementById("right").onclick = getNext;
document.getElementById("left").onclick = getNext;