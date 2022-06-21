function main(val,title) {
    document.getElementById('frame').style.display = 'initial'
    val = val.replace("https://www.youtube.com/watch?v=","").replace("https://youtu.be/","")
    document.getElementById("frame").src = `https://www.youtube.com/embed/${val}`
    document.getElementById("views").src = `https://img.shields.io/youtube/views/${val}?style=for-the-badge&logo=youtube&label=VIEWS`
    document.getElementById("comments").src = `https://img.shields.io/youtube/comments/${val}?style=for-the-badge&logo=youtube&label=COMMENTS`
    document.getElementById("likes").src = `https://img.shields.io/youtube/likes/${val}?style=for-the-badge&logo=youtube&label=LIKES`
    // document.getElementById('title').innerText = title
    document.getElementById('title').innerHTML = `<a href="https://www.google.com/search?q=${title.split(' -')[0]}" target="_blank">${title}</a>`
}

const req = new XMLHttpRequest();
    req.open("GET",'https://raw.githubusercontent.com/PingHuskar/YoutubePlaylist/main/data.json', true);
    req.send();
    console.log(req.responseText)
    req.onload=function(){
      let json = JSON.parse(req.responseText);
      let html = ``
      json.forEach(function(val) {
        html += `<img src="https://img.youtube.com/vi/${val.vid}/maxresdefault.jpg" title="${val.title}" alt="${val.title}" onclick="topFunction();main('${val.vid}','${val.title}');this.style.filter=grayscale(0);"></a>`
      });
      document.getElementById("selectBoard").innerHTML = html;
    }
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}