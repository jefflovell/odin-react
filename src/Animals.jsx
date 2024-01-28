export default function Animals() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalsList = animals.map( animal => <li key={animal}>{animal}</li>)
}