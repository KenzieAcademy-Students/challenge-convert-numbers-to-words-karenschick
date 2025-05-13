# 🧩 Kenzie Academy Challenge: Anagrams

A small project to find anagrams of an inputted word using vanilla JavaScript and DOM manipulation.

---

## 🛠️ Project Plan

### 1. HTML Structure

- An `<input>` with:
  - `id="searchAnagramInput"`
  - `type="text"`
  - `placeholder="Enter a word"`
- A `<button>` with:
  - `id="searchAnagramButton"`
  - Text: "Search"
- A `<div>` with:
  - `id="anagramResults"`

### 2. Global Variables

- Use `document.getElementById()` to select:
  - The input field (`searchAnagramInput`)
  - The results container (`anagramResultsDiv`)

### 3. Button Event Handler

- Clear previous results: `anagramResultsDiv.textContent = ""`
- Get the input value: `inputWord = searchAnagramInput.value`
- Call `renderAnagramResults(inputWord)`
- Clear input field: `searchAnagramInput.value = ""`

### 4. Helper Function: `sortLetters(word)`

- Split the string into an array of letters
- Sort the letters alphabetically
- Join the array back into a string
- Return the result

### 5. Core Logic: `findAnagrams(inputWord, wordsArray)`

- Sort `inputWord` using `sortLetters()`
- Use `filter()` to compare each word:
  - Sort each candidate word
  - Check if sorted value equals sorted `inputWord`
  - Exclude the original `inputWord` itself
- Return results as a comma-separated string

### 6. Displaying Results: `renderAnagramResults(inputWord)`

- Call `findAnagrams()` with `inputWord` and word list
- Update `anagramResultsDiv.textContent` with:
  - `Anagrams of "listen": silent, enlist, tinsel`
  - Or show a “no matches found” message

---

## 💭 Reflection

I considered removing the search button for a smoother UX (e.g., pressing Enter), but wasn’t sure how best to clear the input/results cleanly without it.

I also attempted a more complex approach using `.includes()` to match characters but ran into logic issues handling duplicate letters.

---

## 📚 Sources

- https://medium.com/@jenniferpazos/codewars-solving-an-easy-javascript-kata-edf2e5d6fd21

---

## ❓ Questions

- **Use `let` or `const` for `sortLetters`?**  
  ➤ Use `const` — the function reference doesn’t need to change.

- **`innerHTML` or `textContent`?**  
  ➤ Use `textContent` for plain text results.

- **Are button and input set up properly in HTML?**  
  ➤ Yep!

- **How do I not include input word in anagram results?**  
  ➤ Filter out words that exactly match the input.

- **What is the correct style for README writing?**  
  ➤ Structured, clear, and sectioned — like this.

- **Should I have comments explaining my code?**  
  ➤ Yes — brief, helpful comments improve readability.

- **How do I create a list for anagram results?**  
  ➤ Use `<ul>` and `<li>` in HTML or generate them dynamically with JS.

- **Do I need `inputWord` declared globally?**  
  ➤ No — declare it within your event handler for cleaner scope.

---

## 🌟 Possible Improvement Ideas

- Display results as a list (`<ul><li>word</li></ul>`)
- Add a heading that includes the input word
- Show a message when no matches are found
- Style the interface to make it visually appealing
