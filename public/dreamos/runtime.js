  /* =========================================
   DREAMOS SCRIPT
   Most content is edited in HTML.
   Only change JS if you want to change behavior.
   ========================================= */
  var mahriPos = 0;
  var mahriComicIndex = 0;
  var mahriTopZ = 100;
  var mahriStarted = false;
  var mahriTrackIndex = 0;
  var mahriPetMood = 78;
  var mahriPetEnergy = 64;
  var mahriPetBond = 35;
  var mahriPetHunger = 70;
  var mahriPetClicks = 0;
  var mahriVisualizerTimer = null;
  var mahriErrorAudio = new Audio("https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg");
  mahriErrorAudio.volume = .12;
  var mahriTracks = [];
  var mahriGallery = [];

  function mahriCollectTracks() {
    mahriTracks = [];
    var buttons = document.querySelectorAll(".miniplaylist .track");
    for (var i = 0; i < buttons.length; i++) {
      (function(btn, index) {
        mahriTracks.push({
          title: btn.getAttribute("data-title") || btn.innerHTML,
          artist: btn.getAttribute("data-artist") || "",
          album: btn.getAttribute("data-album") || "",
          cover: btn.getAttribute("data-cover") || "",
          src: btn.getAttribute("data-src") || "",
          fullUrl: btn.getAttribute("data-full-url") || "",
          pet: btn.getAttribute("data-pet") || "",
          petExtra: btn.getAttribute("data-pet-extra") || "",
          petStatus: btn.getAttribute("data-pet-status") || "status: listening...",
          mouth: btn.getAttribute("data-mouth") || "ᴗ",
          mood: btn.getAttribute("data-msn-mood") || "",
          away: btn.getAttribute("data-msn-away") || ""
        });
        btn.onclick = function() {
          mahriLoadTrack(index, true);
        };
      })(buttons[i], i);
    }
  }


  
  var mahriAudio = document.getElementById("mahriAudio");
  var mahriSeek = document.getElementById("mahriSeek");
  var mahriVolume = document.getElementById("mahriVolume");
  mahriCollectTracks();
  mahriCollectGallery();
  mahriAudio.volume = .2;
  mahriLoadTrack(0, false);
  mahriUpdatePet();
  // Audio starts only when the visitor clicks Play. Avoid unwanted autoplay.

  function mahriBringFront(el) {
    mahriTopZ++;
    el.style.zIndex = mahriTopZ;
  }

  function mahriOpenWindow(id) {
    var win = document.getElementById(id);
    win.classList.add("active");
    mahriBringFront(win);
  }

  function mahriCloseWindow(id) {
    document.getElementById(id).classList.remove("active");
  }

  function mahriLoadTrack(index, autoplay) {
    var btn = document.getElementById("mahriButton");
    var cover = document.getElementById("mahriCover");
    mahriTrackIndex = index;
    if (mahriTrackIndex < 0) {
      mahriTrackIndex = mahriTracks.length - 1;
    }
    if (mahriTrackIndex >= mahriTracks.length) {
      mahriTrackIndex = 0;
    }
    cover.classList.remove("swap");
    void cover.offsetWidth;
    document.getElementById("mahriTitle").innerHTML = mahriTracks[mahriTrackIndex].title;
    document.getElementById("mahriArtist").innerHTML = mahriTracks[mahriTrackIndex].artist;
    var albumLink = document.getElementById("mahriAlbum");
    albumLink.textContent = "30s preview · full song ↗";
    albumLink.href = mahriTracks[mahriTrackIndex].fullUrl;
    albumLink.title = "Listen to " + mahriTracks[mahriTrackIndex].title + " by " + mahriTracks[mahriTrackIndex].artist + " on Apple Music";
    cover.src = mahriTracks[mahriTrackIndex].cover;
    cover.classList.add("swap");
    document.getElementById("mahriMsnSong").innerHTML = mahriTracks[mahriTrackIndex].title;
    document.getElementById("mahriMsnMood").innerHTML = mahriTracks[mahriTrackIndex].mood;
    document.getElementById("mahriMsnAway").innerHTML = mahriTracks[mahriTrackIndex].away;
    var listButtons = document.querySelectorAll(".miniplaylist button");
    for (var i = 0; i < listButtons.length; i++) {
      listButtons[i].classList.remove("active");
    }
    if (listButtons[mahriTrackIndex]) {
      listButtons[mahriTrackIndex].classList.add("active");
    }
    mahriPetTrackMood(mahriTracks[mahriTrackIndex].pet);
    mahriAudio.src = mahriTracks[mahriTrackIndex].src;
    mahriAudio.volume = mahriVolume.value;
    mahriAudio.load();
    mahriSeek.value = "0";
    document.getElementById("mahriCurrent").textContent = "00:00";
    document.getElementById("mahriDuration").textContent = "00:00";
    btn.innerHTML = "▶";
    mahriVisualizer(false);
    if (autoplay) {
      setTimeout(function() {
        mahriPlay();
      }, 80);
    }
  }

  function mahriPlay() {
    var btn = document.getElementById("mahriButton");
    if (mahriAudio.paused) {
      mahriAudio.play().then(function() {
        btn.innerHTML = "Ⅱ";
        mahriVisualizer(true);
      }).catch(function() {
        btn.innerHTML = "▶";
        mahriVisualizer(false);
        var albumLink = document.getElementById("mahriAlbum");
        if (albumLink) albumLink.textContent = "preview unavailable · listen ↗";
      });
    } else {
      mahriAudio.pause();
      btn.innerHTML = "▶";
      mahriVisualizer(false);
    }
  }

  function mahriPrev() {
    mahriLoadTrack(mahriTrackIndex - 1, true);
  }

  function mahriNext() {
    mahriLoadTrack(mahriTrackIndex + 1, true);
  }

  function mahriMute() {
    var mute = document.getElementById("mahriMute");
    mahriAudio.muted = !mahriAudio.muted;
    if (mahriAudio.muted) {
      mute.innerHTML = "×";
    } else {
      mute.innerHTML = "♡";
    }
  }

  function mahriVisualizer(active) {
    var visual = document.querySelector(".visualizer");
    var bars = document.querySelectorAll(".visualizer i");
    if (!visual) {
      return;
    }
    if (active) {
      visual.classList.add("playing");
      clearInterval(mahriVisualizerTimer);
      mahriVisualizerTimer = setInterval(function() {
        for (var i = 0; i < bars.length; i++) {
          var base = mahriTrackIndex == 2 ? 18 : mahriTrackIndex == 1 ? 10 : 14;
          var max = mahriTrackIndex == 2 ? 34 : mahriTrackIndex == 1 ? 24 : 30;
          bars[i].style.height = (Math.floor(Math.random() * (max - base)) + base) + "px";
          bars[i].style.opacity = (Math.random() * .35 + .65).toFixed(2);
        }
      }, 180);
    } else {
      visual.classList.remove("playing");
      clearInterval(mahriVisualizerTimer);
      for (var j = 0; j < bars.length; j++) {
        bars[j].style.height = (8 + (j % 4) * 4) + "px";
        bars[j].style.opacity = ".65";
      }
    }
  }

  function mahriTime(sec) {
    if (isNaN(sec)) {
      return "00:00";
    }
    var m = Math.floor(sec / 60);
    var s = Math.floor(sec % 60);
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    return m + ":" + s;
  }
  mahriAudio.addEventListener("loadedmetadata", function() {
    mahriSeek.max = Math.floor(mahriAudio.duration);
    document.getElementById("mahriDuration").innerHTML = mahriTime(mahriAudio.duration);
  });
  mahriAudio.addEventListener("timeupdate", function() {
    mahriSeek.value = Math.floor(mahriAudio.currentTime);
    document.getElementById("mahriCurrent").innerHTML = mahriTime(mahriAudio.currentTime);
  });
  mahriAudio.addEventListener("pause", function() {
    mahriVisualizer(false);
  });
  mahriAudio.addEventListener("play", function() {
    mahriVisualizer(true);
  });
  mahriSeek.addEventListener("input", function() {
    mahriAudio.currentTime = mahriSeek.value;
  });
  mahriVolume.addEventListener("input", function() {
    mahriAudio.volume = mahriVolume.value;
  });
  mahriAudio.addEventListener("ended", function() {
    mahriNext();
  });

function mahriCollectGallery(){
  mahriGallery=[];
  var buttons=document.querySelectorAll("#mahriPolas .galleryitem");

  for(var i=0;i<buttons.length;i++){
    (function(btn,index){
      var img=btn.getAttribute("data-img") || btn.querySelector("img").src;

      mahriGallery.push({
        title:btn.getAttribute("data-title") || btn.innerText,
        img:img,
        quote:btn.getAttribute("data-quote") || "",
        url:btn.getAttribute("data-url") || "",
        fallback:(btn.querySelector("img") && btn.querySelector("img").getAttribute("data-fallback")) || "",
        placeholder:(btn.querySelector("img") && btn.querySelector("img").getAttribute("data-placeholder")) || ""
      });

      btn.onclick=function(e){
        e.preventDefault();
        mahriOpenGallery(index);
      };
    })(buttons[i],i);
  }
}


  function mahriOpenGallery(index) {
    var win = document.getElementById("mahriGalleryWindow");
    var preview = document.getElementById("mahriGalleryImage");
    preview.setAttribute("data-fallback", mahriGallery[index].fallback || "/projects/avatar.svg");
    if (mahriGallery[index].placeholder) preview.setAttribute("data-placeholder", mahriGallery[index].placeholder);
    else preview.removeAttribute("data-placeholder");
    preview.src = mahriGallery[index].img;
    document.getElementById("mahriGalleryTitle").innerHTML = mahriGallery[index].title;
    document.getElementById("mahriGalleryQuote").textContent = mahriGallery[index].quote;
    document.getElementById("mahriGalleryLink").href = mahriGallery[index].url;
    win.classList.add("active");
    mahriBringFront(win);
  }

  function mahriCloseGallery() {
    document.getElementById("mahriGalleryWindow").classList.remove("active");
  }

  function mahriUpdatePet() {
    document.getElementById("mahriMood").style.width = mahriPetMood + "%";
    document.getElementById("mahriEnergy").style.width = mahriPetEnergy + "%";
    document.getElementById("mahriBond").style.width = mahriPetBond + "%";
  }

  function mahriPetTrackMood(type) {
    var pet = document.getElementById("mahriPet");
    var status = document.getElementById("mahriPetStatus");
    var mouth = document.getElementById("mahriMouth");
    var track = mahriTracks[mahriTrackIndex] || {};
    pet.classList.remove("happy", "sleepy", "music", "dreaming", "evolved");
    for (var i = 0; i < mahriTracks.length; i++) {
      if (mahriTracks[i].pet) {
        pet.classList.remove(mahriTracks[i].pet);
      }
      if (mahriTracks[i].petExtra) {
        var extras = mahriTracks[i].petExtra.split(" ");
        for (var x = 0; x < extras.length; x++) {
          if (extras[x]) {
            pet.classList.remove(extras[x]);
          }
        }
      }
    }
    if (track.pet) {
      pet.classList.add(track.pet);
    }
    if (track.petExtra) {
      var add = track.petExtra.split(" ");
      for (var j = 0; j < add.length; j++) {
        if (add[j]) {
          pet.classList.add(add[j]);
        }
      }
    }
    status.innerHTML = track.petStatus || "status: listening...";
    mouth.innerHTML = track.mouth || "ᴗ";
  }

  function mahriPetAction(type) {
    var pet = document.getElementById("mahriPet");
    var status = document.getElementById("mahriPetStatus");
    var mouth = document.getElementById("mahriMouth");
    var note = document.getElementById("mahriPetNote");
    pet.classList.remove("happy", "sleepy", "music", "dreaming");
    if (type == "pet") {
      mahriPetClicks++;
      mahriPetMood = Math.min(100, mahriPetMood + 9);
      mahriPetBond = Math.min(100, mahriPetBond + 10);
      status.innerHTML = "status: purring in pixels ♡";
      note.innerHTML = "Pixel likes the attention.";
      mouth.innerHTML = "ᴗ";
      pet.classList.add("happy");
      if (mahriPetClicks >= 12) {
        pet.classList.add("evolved");
        mahriToast("Pixel evolved! Tiny star mode unlocked.");
      }
    }
    if (type == "feed") {
      mahriPetHunger = Math.min(100, mahriPetHunger + 18);
      mahriPetMood = Math.min(100, mahriPetMood + 7);
      status.innerHTML = "status: snack restored ✧";
      note.innerHTML = "Pixel ate a codeberry.";
      mouth.innerHTML = "ᴗ";
      pet.classList.add("happy");
    }
    if (type == "sleep") {
      mahriPetEnergy = Math.min(100, mahriPetEnergy + 16);
      mahriPetMood = Math.min(100, mahriPetMood + 4);
      status.innerHTML = "status: soft sleep mode...";
      note.innerHTML = "zzZ... saving dream file.";
      mouth.innerHTML = "﹏";
      pet.classList.add("sleepy");
    }
    if (type == "music") {
      mahriPetMood = Math.min(100, mahriPetMood + 7);
      mahriPetBond = Math.min(100, mahriPetBond + 12);
      status.innerHTML = "status: listening with you ♪";
      note.innerHTML = "Pixel is reacting to " + mahriTracks[mahriTrackIndex].title + ".";
      mouth.innerHTML = "‿";
      pet.classList.add("music");
    }
    if (type == "dream") {
      mahriPetEnergy = Math.max(12, mahriPetEnergy - 8);
      mahriPetMood = Math.min(100, mahriPetMood + 12);
      mahriPetBond = Math.min(100, mahriPetBond + 7);
      status.innerHTML = "status: searching dream files...";
      mouth.innerHTML = "﹏";
      pet.classList.add("dreaming");
      var dreams = document.querySelectorAll("#mahriDreamLines span");
      var dream = dreams[Math.floor(Math.random() * dreams.length)].innerHTML;
      note.innerHTML = dream;
      mahriToast("Dream found: " + dream);
    }
    mahriUpdatePet();
    setTimeout(function() {
      pet.classList.remove("happy", "music", "dreaming");
      mahriPetTrackMood(mahriTracks[mahriTrackIndex].pet);
    }, 1200);
  }

  function mahriShowDialog() {
    var dialog = document.getElementById("mahriDialog");
    dialog.classList.add("active");
    mahriBringFront(dialog);
  }

  function mahriCloseDialog() {
    document.getElementById("mahriDialog").classList.remove("active");
  }

  function mahriDialogYes() {
    mahriCloseDialog();
    window.location.href = "mailto:sahils.0903@gmail.com?subject=Website%20project%20inquiry";
  }

  function mahriDialogNo() {
    mahriCloseDialog();
  }

  function mahriToast(text) {
    var toast = document.getElementById("mahriToast");
    document.getElementById("mahriToastText").innerHTML = text;
    toast.classList.add("active");
    setTimeout(function() {
      toast.classList.remove("active");
    }, 3800);
  }
  setInterval(function() {
    mahriPetMood = Math.max(18, mahriPetMood - 1);
    mahriPetEnergy = Math.max(12, mahriPetEnergy - 1);
    mahriPetHunger = Math.max(0, mahriPetHunger - 2);
    if (mahriPetHunger < 25) {
      document.getElementById("mahriPetStatus").innerHTML = "status: hungry for cloudberries...";
      document.getElementById("mahriMouth").innerHTML = "︵";
    } else if (mahriPetMood < 35) {
      document.getElementById("mahriPetStatus").innerHTML = "status: feeling blurry...";
      document.getElementById("mahriMouth").innerHTML = "︵";
    }
    mahriUpdatePet();
  }, 12000);
  var mahriEpisodeIndex = 0;

  function mahriTypeEpisode(ep) {
    var bubbles = ep.querySelectorAll(".bubble");
    for (var b = 0; b < bubbles.length; b++) {
      var text = bubbles[b].getAttribute("data-fulltext");
      if (!text) {
        text = bubbles[b].innerHTML;
        bubbles[b].setAttribute("data-fulltext", text);
      }
      bubbles[b].innerHTML = "";
      (function(el, txt) {
        var i = 0;
        var typing = setInterval(function() {
          el.innerHTML += txt.charAt(i);
          i++;
          if (i >= txt.length) {
            clearInterval(typing);
          }
        }, 24);
      })(bubbles[b], text);
    }
  }

  function mahriEpisodeGo(index) {
    var episodes = document.querySelectorAll(".episode");
    var buttons = document.querySelectorAll("#mahriEpisodeArchive button");
    mahriEpisodeIndex = index;
    if (mahriEpisodeIndex < 0) {
      mahriEpisodeIndex = episodes.length - 1;
    }
    if (mahriEpisodeIndex >= episodes.length) {
      mahriEpisodeIndex = 0;
    }
    for (var i = 0; i < episodes.length; i++) {
      episodes[i].classList.remove("active");
    }
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }
    episodes[mahriEpisodeIndex].classList.add("active");
    if (buttons[mahriEpisodeIndex]) {
      buttons[mahriEpisodeIndex].classList.add("active");
    }
    document.getElementById("mahriEpisodeFile").innerHTML = episodes[mahriEpisodeIndex].getAttribute("data-file");
    mahriTypeEpisode(episodes[mahriEpisodeIndex]);
  }

  function mahriEpisode(dir) {
    mahriEpisodeGo(mahriEpisodeIndex + dir);
  }
  mahriEpisodeGo(0);

  function mahriLookPreview(el) {
    var img = el.querySelector("img").src;
    var main = document.getElementById("mahriLookPreviewMain");
    if (main) {
      main.src = img;
    }
  }

// Original image fallback chain: bundled JPG -> original GitHub JPG -> SVG.
// Other gallery images keep their existing single fallback behavior.
function mahriImageFallback(img) {
  if (!img || img.tagName !== 'IMG' || !img.dataset) return;
  if (img.dataset.fallback) {
    var url = img.dataset.fallback;
    img.removeAttribute('data-fallback');
    img.src = url;
  } else if (img.dataset.placeholder) {
    var placeholder = img.dataset.placeholder;
    img.removeAttribute('data-placeholder');
    img.src = placeholder;
  }
}
document.addEventListener('error', function (event) {
  mahriImageFallback(event.target);
}, true);

// Recover images that failed before the JS listeners were installed.
document.querySelectorAll('img[data-fallback], img[data-placeholder]').forEach(function (img) {
  if (img.complete && img.naturalWidth === 0) mahriImageFallback(img);
});
