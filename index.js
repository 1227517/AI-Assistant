
let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
  let text_speak=new SpeechSynthesisUtterance(text)
  text_speak.rate=1
  text_speak.pitch=1
  text_speak.volume=1
  text_speak.lang="hi-GB"
  window.speechSynthesis.speak(text_speak)
}
function wishMe(){
 let day=new Date()
 let hours=day.getHours()
 if(hours>=0 && hours<12){
  speak("Good Morning Khushi Chaudhary")
 }
 else if(hours>=12 && hours<16){
  speak("Good Afternoon Khushi Chaudhary")
 }
 else{
  speak("Good Evening Khushi Chaudhary")
 }
}
//window.addEventListener('load',()=>{
//  wishMe()
//}) 
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition= new speechRecognition()
recognition.onresult=(event)=>{
  let currentIndex=event.resultIndex
 let transcript= event.results[currentIndex][0].transcript
content.innerText=transcript
takeCommand(transcript)         
}

btn.addEventListener("click",()=>{
  recognition.start()
  btn.style.display="none"
  voice.style.display="block"
})

function takeCommand(message){
  btn.style.display="flex"
   voice.style.display="none"
  if(message.includes("hello")||message.includes("hey")){
    speak("hello Khushi Chaudhary,what can i help you?")
  }
  else if(message.includes("Who are you")){
    speak("I am virtual assistant,created by Khushi Chaudhary")
  }else if(message.includes("open youtube")){
    speak("opening youtube...")
    window.open("https://www.youtube.com")
  }
  else if(message.includes("open facebook")){
    speak("opening facebook...")
    window.open("https://www.facebook.com/")
  }
  else if(message.includes("open instagram")){
    speak("opening instagram...")
    window.open("https://instagram.com")
  }
  else if(message.includes("open whatshap")){
    speak("opening whatsapp...")
    window.open("https://whatsapp.com")
  }
  else if(message.includes("open linkedin")){
    speak("opening linkedin...")
    window.open("https://www.bing.com")
  }
  else{
    speak(`this is what i found on internet regarding ${message}`)
    window.open(`${message}`)
  }
}

