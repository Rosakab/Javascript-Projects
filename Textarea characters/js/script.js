const textarea = document.querySelector("#textarea");
const textareaRemaining = document.querySelector("#textarea-remaining");

let MAX_CHARS = 250;

textarea.addEventListener("input", function () {
  const totalRemaining = MAX_CHARS - textarea.value.length; // textarea.value.length is  the number of characters in the textarea
  const color = totalRemaining > 25 ? "Green" : "red";
  textareaRemaining.textContent = `You have ${totalRemaining} of 250 characters remaining.`;
  textareaRemaining.style.color = color;

  if (totalRemaining === 0) {
    textareaRemaining.textContent = `You have reached maximum characters: ${totalRemaining}`;
  }
});
