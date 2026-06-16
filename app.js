let songIndex = 0;

 let audioElement = new Audio(`./song0.mp3`);

let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar")
let mastername = document.getElementById("mastername")

let songItems=Array.from(document.querySelectorAll(".songItem"));

let gif=document.getElementById("gif");

let p=document.getElementById("p");

let b=document.getElementById("b");

let songs = [
    {songName: "Rah E Najaf", filePath: "./song0.mp3", coverPath: "./rahenajaf.png"},
    {songName: "Surah Younas By Omar Hiham Al Arabi", filePath: "./song1.mp3", coverPath: "./rahenajaf.png"},
    {songName: "Zahe Muqadar by Atif Aslam", filePath: "./song2.mp3", coverPath: "./rahenajaf.png"},
    {songName: "Salam Ya Omar Al Farooq Nasheed", filePath: "./song3.mp3", coverPath: "./rahenajaf.png"},
    {songName: "Love Me Like You Do", filePath: "./song4.mp3", coverPath: "./rahenajaf.png"},
    {songName: "My Prime Song", filePath: "./song5.mp3", coverPath: "./rahenajaf.png"},
    {songName: "Peera Ve Peera", filePath: "./song6.mp3", coverPath: "./rahenajaf.png"},
    {songName: "FONk", filePath: "./song7.mp3", coverPath: "./rahenajaf.png"},
    {songName: "Barbaad by Ahan Panday", filePath: "./song8.mp3", coverPath: "./rahenajaf.png"},
];

// Handle play pause




let masterIcon = document.getElementById("masterIcon");

masterPlay.addEventListener("click", () => {

    if (audioElement.paused) {
        audioElement.play();
        mastername.innerText=songs[songIndex].songName;
        masterIcon.classList.remove("fa-play");
        masterIcon.classList.add("fa-pause");
        gif.style.opacity=1;

    } else {
        audioElement.pause();
        mastername.innerText=songs[songIndex].songName;
        masterIcon.classList.remove("fa-pause");
        masterIcon.classList.add("fa-play");
        gif.style.opacity=0;
    }
});
audioElement.addEventListener("timeupdate", () => {
    //update line

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressbar.value=progress;

});

myprogressbar.addEventListener("input",()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration)/100;
})

songItems.forEach((element, i) => {
    if (i < songs.length) {
        element.getElementsByClassName("song")[0].innerText = songs[i].songName;
    }
});

const makeAllPlays=()=>{
    Array.from(document.querySelectorAll(".songItemPlay")).forEach((element)=>{
         element.classList.add("fa-pause");
       element.classList.add("fa-play")});  
      
}
Array.from(document.querySelectorAll(".songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause")
        audioElement.src=`./song${songIndex}.mp3`;
        mastername.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
         gif.style.opacity=1;
        masterIcon.classList.remove("fa-play")
        masterIcon.classList.add("fa-pause");
    })
})

document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=8){
    songIndex=0;
    }
    else{
        songIndex +=1;
    }
      audioElement.src=`./song${songIndex}.mp3`;
      mastername.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
         gif.style.opacity=1;
        masterIcon.classList.remove("fa-play")
        masterIcon.classList.add("fa-pause");
})

document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
    songIndex=0;
    }
    else{
        songIndex -=1;
    }
      audioElement.src=`./song${songIndex}.mp3`;
      mastername.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
         gif.style.opacity=1;
        masterIcon.classList.remove("fa-play")
        masterIcon.classList.add("fa-pause");
})
