document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const sushiType = params.get("sushiType");
  
    const sushiRecipesContainer = document.getElementsByClassName("sushiRecipes")[0];
    const pictureContainer = document.getElementsByClassName("picture")[0];
  
    const recipeUrls = {
      nigiri: "https://raw.githubusercontent.com/mjdutra/sushi-recipes/refs/heads/main/Nigiri.txt",
      uramaki: "https://raw.githubusercontent.com/mjdutra/sushi-recipes/refs/heads/main/Uramaki%20California%20Rolls.txt",
      maki: "https://raw.githubusercontent.com/mjdutra/sushi-recipes/refs/heads/main/Maki%20Spicy%20Tuna%20Roll.txt",
      temaki: "https://raw.githubusercontent.com/mjdutra/sushi-recipes/refs/heads/main/Temaki.txt",
    };
  
    const imgRecipe = {
      nigiri: "/assets/svg/nigiri.svg",
      uramaki: "/assets/svg/uramaki.svg",
      maki: "/assets/svg/maki.svg",
      temaki: "/assets/svg/temaki.svg",
    };
  
    function fetchAndDisplayRecipe(url, imgPath) {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then((data) => {
          sushiRecipesContainer.innerText = data;
  
  
          const sushiImage = document.createElement("img");
          sushiImage.src = imgPath;
          sushiImage.alt = `Image of ${sushiType}`;
          sushiImage.style.maxWidth = "100%"; 
          pictureContainer.innerHTML = ""; 
          pictureContainer.appendChild(sushiImage);
        })
        .catch((error) => {
          console.error("Error fetching content:", error);
          sushiRecipesContainer.innerText = "Error loading recipe.";
        });
    }
  
    if (sushiType) {
      document.getElementById("sushiTitle").textContent = sushiType;
      document.title = sushiType;
      const lowerCaseSushiType = sushiType.toLowerCase();
      if (recipeUrls[lowerCaseSushiType]) {
        fetchAndDisplayRecipe(
          recipeUrls[lowerCaseSushiType], 
          imgRecipe[lowerCaseSushiType]
        );
      } else {
        sushiRecipesContainer.innerText = "No recipe available for the selected type.";
      }
    } else {
      sushiRecipesContainer.innerText = "Please select a sushi type.";
    }
  });
  