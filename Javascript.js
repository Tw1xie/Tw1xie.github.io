document.addEventListener('DOMContentLoaded', (event) => {
  const sentences = [
      "<span class='normal'> Welcome to my Website!</span>",
      "<span class='normal'> I'm a young <span class='highlight'>Web Developer.</span></span>",
      "<span class='normal'> Owner of <span class='highlight'>ApathyMC.</span></span>",
      "<span class='normal'> Stay tuned for more updates.</span>"
  ];

  const typingElement = document.getElementById('typer-text');
  let sentenceIndex = 0;

  function type() {
      typingElement.innerHTML = ""; // Clear previous content
      const currentSentence = sentences[sentenceIndex];
      let index = 0;
      let typing = setInterval(() => {
          typingElement.innerHTML += currentSentence[index];
          index++;
          if (index >= currentSentence.length) {
              clearInterval(typing);
              setTimeout(deleteText, 1000);
          }
      }, 100);

      function deleteText() {
          let indexToDelete = currentSentence.length;
          typing = setInterval(() => {
              indexToDelete--;
              if (indexToDelete >= 0) {
                  typingElement.innerHTML = currentSentence.substring(0, indexToDelete);
              } else {
                  clearInterval(typing);
                  sentenceIndex = (sentenceIndex + 1) % sentences.length;
                  setTimeout(type, 1000);
              }
          }, 50);
      }
  }

  type();
});
