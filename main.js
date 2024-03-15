document.addEventListener('DOMContentLoaded', function() {
  function changeText(){
    let button = document.getElementById("convertBtn");
    button.textContent = "Patience";
    button.disabled = true;
  }
  
  function revertText(){
    let button = document.getElementById("convertBtn");
    button.textContent = "Search";
    button.disabled = false
  }
  let button = document.getElementById("convertBtn");
  button.onclick = function() {
    changeText()
    let user = document.getElementById("userInput").value;

    const url = `https://spotify-downloader6.p.rapidapi.com/spotify?spotifyUrl=${user}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f55bc051f2msh236fb47b098e612p16087cjsn5d197e666ca0',
        'X-RapidAPI-Host': 'spotify-downloader6.p.rapidapi.com'
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        revertText()
        let singer = data.artist;
        let thumbnail = data.cover;
        let label = data.title;
        let downloadUrl = data.download_link;
        
        let photo = document.getElementById("thumb");
        photo.src = thumbnail;
        photo.style.width = "100px";
        let sing = document.getElementById("main").textContent = singer;
        let dlBtn = document.createElement("button");
        dlBtn.style.marginTop = "5px";
        dlBtn.textContent = "DOWNLOAD";
        let container = document.getElementById("results");
        container.appendChild(dlBtn);
        dlBtn.addEventListener('click', function() {
          window.location.href = downloadUrl;
        });
      });
  };
});