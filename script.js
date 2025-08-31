const textInput = document.getElementById.("textInput");
const charCount = document.getElementById.("charCount");
const wordCount = document.getElementById.("wordCount");
const sentenceCount = document.getElementById.("sentenceCount");

textInput.addEventListener("input", () =>{
    let text = textInput.value;

// Count characters (excluding spaces)
charCount.textContent = text.length;

// Count words (split by spaces, filter empty)
//Example: "Hello world!" → ["Hello", "world"].
let words = text.trim().split(/\s+/);
wordCount.textContent = text.trim() === "" ? 0 : words.length;

// Count sentences (split by ., !, ?)
let sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    sentenceCount.textCount = sentences.length;
});
