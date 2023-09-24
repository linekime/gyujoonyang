// Define an array of image data
const imageData = [
  {
    src: "images/검은산수시리즈/2)'검은산수2211' 130x130cm, Acrylic, mixed media on canvas, 2022.jpg",
    title: "Title 1",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/3)'검은산수2214' 3피스, 각각162x130cm, Acrylic, mixed media on canvas, 2022.jpg",
    title: "Title 2",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/4)'검은산수2217' 89.4x130cm, Acrylic, mixed media on canvas, 2022.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/5)'검은산수2212' 116.8x72.8cm, Acrylic, mixed media on canvas, 2022.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/6)'검은산수2216' 4피스, 각각130x97cm, Acrylic, mixed media on canvas, 2022.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/7)'검은산수2215' 130x130cm, Acrylic, mixed media on canvas, 2022.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/8)'검은산수2213' 100x72.7cm, Acrylic, mixed media on canvas, 2022.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/9)'검은산수2220' 60.6cm 정방형, Acrylic, mixed media on canvas, 2022, 통인화랑.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/10)'검은 산수2015', 5피스 각각 130x130cm , 캔버스 위에 아크릴, 2020.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/11)'검은산수2011', 65x100cm, acrylic on canvas, 2020.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/12)'검은산수2020', 65x100cm, acrylic on canvas, 2020.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈//13)'검은산수2013', 91x117cm, acrylic on canvas, 2020.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/14)'검은산수2014', 91x117cm, acrylic on canvas, 2020.JPG",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/15)'검은산수2012', 162x130cm each, acrylic on canvas, 2020.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/16)'검은산수2017', 130x97cm each, acrylic on canvas, 2020.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/17)'검은산수2016', 162x112cm each, acrylic on canvas, 2020.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/18)'검은산수1819', 2피스 각각 162x130cm, Acrylic, mixed media on canvas, 2018.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/18)'검은산수1819', 2피스 각각 162x130cm, Acrylic, mixed media on canvas, 2018.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/19)'검은산수1818', 2피스 각각 162x 130cm, 캔버스위에아크릴, 복합재료, 2018.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/20)'검은산수1823', 130x162cm, Acrylic & mix media on canvas, 2018.JPG",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/21)'검은 산수1822', 130x162cm, Acrylic & mix media on canvas, 2018.JPG",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/22)'검은산수1824', 72.7x60.6cm, Acrylic & mix media on canvas, 2018.JPG",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/23)'검은산수1820', 194x130cm each, Acrylic, mixed media on canvas, 2018.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/24)'검은산수1821', 130x97cm each, Acrylic & mix media on canvas, 2018.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/25-뒷면)'검은산수-사이', 20x39x133cm, Acrylic & mixed media on Cement block, 2018.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/25-앞면)'검은산수-사이', 20x39x133cm, Acrylic & mixed media on Cement block, 2018.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/26)'검은산수1825', 162x112cm each, Acrylic & mixed media on canvas, 2018.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/27)Wind1814, 91x117cm, 캔버스위에 젯소, 아크릴, 바니쉬, 2018.JPG",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/28)Wind1715, 53x53cm, Acrylic on canvas, 2017.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/29)Wind1714, 53x53cm, Acrylic on canvas, 2017.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/30)Wind1811, 91x117cm, 캔버스위에 아크릴, 복합재료, 2018.JPG",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/31)흐름1712, 130X130cm, Acrylic on canvas, 2017, 오산문화재단.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/32)Wind1611, 73x73cm, Acrylic on canvas, 2016.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/33)Wind1707, 73x73cm, Acrylic on canvas, 2017.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/34)Wind1708, 73x73cm, Acrylic on canvas, 2017.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/35)흐름1713,  117x91cm, Acrylic on canvas, 2017.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/36)Wind1815, 91x117cm, 캔버스위에 젯소, 아크릴, 바니쉬, 2018 -.JPG",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/37)'검은산수1910', 100x100cm, Acrylic & mix media on canvas, 2019.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/38)'검은산수1911', 2피스 130x97cm each, Acrylic & mix media on canvas, 2019.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  {
    src: "images/검은산수시리즈/39)'검은산수1912', 4피스, 102x72.7cm each, Acrylic & mix media on paper, 2019.jpg",
    title: "Title 3",
    info: "Information about Image 1.",
  },
  // Add more objects for other images
];
// Function to show the loading indicator
function showLoadingIndicator() {
  const loadingIndicator = document.getElementById("loading-indicator");
  loadingIndicator.style.display = "block";
}

// Function to hide the loading indicator
function hideLoadingIndicator() {
  const loadingIndicator = document.getElementById("loading-indicator");
  loadingIndicator.style.display = "none";
}

// Function to create and display images and image info
function createImages() {
  const imageContainer = document.getElementById("image-container");

  // Number of images to load before showing the loading indicator
  const imagesToLoadBeforeIndicator = 3;
  let loadedImageCount = 0;

  imageData.forEach((data, index) => {
    const imageItem = document.createElement("div");
    imageItem.classList.add("image-item");

    const image = document.createElement("img");
    image.src = data.src;
    image.alt = `Image ${index + 1}`;

    const imageInfo = document.createElement("div");
    imageInfo.classList.add("image-info");
    imageInfo.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.info}</p>
    `;

    imageItem.appendChild(image);
    imageItem.appendChild(imageInfo);

    // Append the image item to the image container
    imageContainer.appendChild(imageItem);

    // Increment the loaded image count
    loadedImageCount++;

    // Check if it's time to show the loading indicator
    if (loadedImageCount % imagesToLoadBeforeIndicator === 0) {
      showLoadingIndicator();
    }
  });

  // Hide the loading indicator when all images are loaded
  hideLoadingIndicator();
}

// Display the loading indicator initially
showLoadingIndicator();

// Simulate a delay (e.g., loading images from a server)
setTimeout(function () {
  // Call the function to create and display images
  createImages();
}, 2000); // Adjust the delay time as needed (e.g., 2000 milliseconds)
