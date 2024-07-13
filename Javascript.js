document.addEventListener('DOMContentLoaded', (event) => {
    const text = "I'm a young Web Developer";
    const typingElement = document.getElementById('typer-text');
    let index = 0;
    let deleting = false;
  
    function type() {
      if (!deleting && index < text.length) {
        typingElement.textContent += text[index];
        index++;
        setTimeout(type, 200);
      } else if (deleting && index > 0) {
        typingElement.textContent = typingElement.textContent.slice(0, -1);
        index--;
        setTimeout(type, 100);
      } else if (index === text.length) {
        deleting = true;
        setTimeout(type, 1000);
      } else if (index === 0) {
        deleting = false;
        setTimeout(type, 500);
      }
    }
  
    type();
  });