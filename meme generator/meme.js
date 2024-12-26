const imageUpload = document.getElementById('imageUpload');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const canvas = document.getElementById('memeCanvas');
const downloadMeme = document.getElementById('downloadMeme');
const ctx = canvas.getContext('2d');


// Set default canvas size
canvas.width = 500;
canvas.height = 500;

function darkmode() {
  body.style.background = "black";
  
  

};

// Function to draw the meme
function drawMeme(image, topText, bottomText) {
  // Clear the canvas
  ctx.clearRect(image, 0, 0, canvas.width, canvas.height);

  // Draw the image
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  // Set text styles
  ctx.font = '90px clear ';
  ctx.fillStyle = 'white bold';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.textAlign = 'center';
 

  // Draw top text
  ctx.fillText(topText, canvas.width / 2, 50);
  ctx.strokeText(topText, canvas.width / 2, 50);

  // Draw bottom text
  ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
  ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
}

// Handle image upload
imageUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      drawMeme(img, topText.value, bottomText.value);
    };
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

// Update meme text dynamically
[topText, bottomText].forEach(input => {
  input.addEventListener('input', () => {
    const img = new Image();
    img.src = canvas.toDataURL();
    img.onload = () => {
      drawMeme(img, topText.value, bottomText.value);
    };
  });
});

// Download the meme
downloadMeme.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'meme.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
});


const generateMemeBtn = document.querySelector(
  ".meme-generator .meme-generator-btn"
);


const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = 'Meme by: ${author}';
};

const generateMeme = () => {
  fetch("http://apimeme.com/meme?meme=Advice-Dog")
  .then((response) => response.json())
  .then((data) => {
    updateDetails(data.url, data.author, data.title);
  });
};
generateMemeBtn.addEventListener("click", generateMeme);