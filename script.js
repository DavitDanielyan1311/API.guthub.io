const imageContainer = document.getElementById("imageContainer");
const getImageBtn = document.getElementById("getImageBtn");
const citySelect = document.getElementById("citySelect");

getImageBtn.addEventListener("click", () => {
  const selectedCity = citySelect.value;
  getImage(selectedCity);
});

async function getImage(cityName) {
  try {
    const response = await fetch(
      `https://source.unsplash.com/featured/?${cityName}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }
    const imageUrl = response.url;
    displayImage(imageUrl, cityName);
  } catch (error) {
    imageContainer.innerHTML = `<p>${error.message}</p>`;
  }
}

function displayImage(imageUrl, cityName) {
  imageContainer.innerHTML = `
        <img src="${imageUrl}" alt="Random Image from ${cityName}">
        <p>City: ${cityName}</p>
    `;
}
