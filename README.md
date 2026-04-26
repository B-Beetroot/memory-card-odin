# Pokémon Memory Card Game

A React project built for **The Odin Project**:  
https://www.theodinproject.com/lessons/node-path-react-new-memory-card

This is a simple memory game where the player must click all 12 Pokémon **without clicking the same one twice**. After every click, the cards shuffle, making it harder to remember which ones were already selected.

---

## Purpose of the Project

This assignment was created to practice **core React concepts**, especially:

### useEffect
- Fetching Pokémon data from the PokéAPI
- Running effects only on component mount
- Avoiding infinite re-renders
- Separating side effects from UI logic

### State Management
- Tracking clicked cards using a Set
- Updating score and best score
- Resetting the game when the user clicks a duplicate

### Rendering & Shuffling
- Re-rendering based on state changes
- Shuffling cards without causing unnecessary effects
- Ensuring React updates happen predictably

---

## Key Takeaways

- `useEffect` is for *side effects*, not general logic  
- Fetching data on mount is a perfect use case for it  

---

## Features

- Fetches 12 Pokémon from PokéAPI
- Displays each Pokémon with its sprite
- Shuffles cards after every click
- Tracks score and best score
- Resets on duplicate click
- Win message when all 12 are clicked

---

## Technologies Used

- React  
- JavaScript (ES6+)  
- PokéAPI  
- CSS Grid & Flexbox
