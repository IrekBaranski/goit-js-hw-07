//1) policzenie: kategorii w ul#categories, czyli elementów li.item.
// - pętla forEach();
// .querySelectorAll() - dzieli element rodzica na tablice elmentów spełniających nazwę 'tagu' lub '.classy'
//kolejene elementy powstałej tablicy zawierają pełny kod HTML - do liczenia kolejnych punktów.
//parametr .length - określa ilość znalezionych elmenów.

const categoryItems = document.querySelectorAll('#categories .item');

console.log('kolejne elementy categoryItems[]:');
categoryItems.forEach(item => {
    console.log(item.innerHTML);
});
console.log(`Number of categories:`, categoryItems.length);

//2) Dla każdego li.item na liście ul#categories znaleźć i wypisać : tekst nagłówka elementu (tagu <h2>) oraz liczbę el. zagnieżdżonych.
//=> .forEach dla kolejnych elementów tablicy categoryItems[].

categoryItems.forEach(item => {
  console.log(`Category:`, item.querySelector("h2").textContent);
  console.log(`Elements:`, item.querySelectorAll("li").length);
});