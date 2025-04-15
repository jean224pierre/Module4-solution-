// Encapsulation dans une IIFE
var byeSpeaker = (function () {
  var speakWord = "Au revoir";

  function speak(name) {
    console.log(speakWord + " " + name);
  }

  return {
    speak: speak
  };
})();