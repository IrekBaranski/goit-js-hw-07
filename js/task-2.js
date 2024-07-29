//Napisz skrypt tworzący galerię obrazów na podstawie tablicy danych. HTML zawiera listę ul.gallery.


//tworzenie i dodanie elementu HTML: document.createElement() 
// publikowanie w DOM: elem.append(), 
//lub szablony ciągów i elem.insertAdjacentHTML().


const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

//pobranie zmiennej z html selektor -> '.gallery' - do osadzenia w elemencie images
//images [] - tablica images -> iterujemy po tablicy -> tworzymy dla każdego el tablicy: element, tag, class, atrybuty, -> przypisujemy kolejne img z images
//+ add Styles

const ulClearStyle = document.querySelector('ul');
ulClearStyle.style.padding = '0';
ulClearStyle.style.listStyle = 'none';

const gallery = document.querySelector('.gallery');

gallery.style.margin = '0 auto';
gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
gallery.style.justifyContent = 'center';
  
images.forEach(image => {
  const galleryList = document.createElement('li');
  const img = document.createElement('img');
  galleryList.classList.add('imageList');

  gallery.appendChild(galleryList);
  galleryList.appendChild(img);
  
  galleryList.style.listStyle = 'none';
  galleryList.style.display = 'flex';
  galleryList.style.backgroundColor = 'silk';
  galleryList.style.padding = '10px';
  galleryList.style.width = '50%';
  
  img.src = image.url;
  img.alt = image.alt;

  img.display = 'block';

  img.style.maxWidth = '100%';
  img.style.objectFit = 'cover';
  img.style.boxShadow = `5px 5px 10px grey`;
  img.style.borderRadius = '5px';

  
});
