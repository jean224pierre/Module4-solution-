// Encapsulation dans une IIFE
var helloSpeaker = (function () {
  var speakWord = "Bonjour";

  function speak(name) {
    console.log(speakWord + " " + name);
  }

  return {
    speak: speak
  };
})();