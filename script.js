const button = document.getElementById('audioIcon');   
const audio = document.getElementById('audio');       
const playIcon = document.getElementById('playIcon'); 
const muteIcon = document.getElementById('muteIcon'); 


let isPlaying = false;

button.addEventListener('click', () => {
  
  if (isPlaying) {
    audio.pause();                           
    playIcon.style.display = 'block';         
    muteIcon.style.display = 'none';         
    button.classList.remove('playing');      
  } else {
    audio.play();                            
    playIcon.style.display = 'none';         
    muteIcon.style.display = 'block';        
    button.classList.add('playing');         
  }
  
  
  isPlaying = !isPlaying;
});
