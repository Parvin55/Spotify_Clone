console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songs =[
   { songName: "Dandelions - Ruth BListen", filePath: "songs/1.mp3", coverPath: "covers/1a.jpeg"},
   { songName: "Perfect - Ed Sheeran", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
   { songName: "Until I Found You - Stephen Sanchez", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
   { songName: "Love Story - Tailor Swift", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"},
   { songName: "Night Changes - One Direction ", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
   { songName: "Lovely - Billie Eillish", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"},
   { songName: "iAs It Was - Harry Styles", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg"},
]

//audioElemnt.play();

//Hnadle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})  

// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 

    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
    })


    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=7){
            songIndex = 1
        }
        else{
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    })
    
    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=1){
            songIndex = 1
        }
        else{
            songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })