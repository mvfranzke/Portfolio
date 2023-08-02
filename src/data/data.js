/* import imaged from assets project folder */

import Recipe from "../assets/projects/recipe.jpg";
import nft from "../assets/projects/nft.jpg";

/* data object to hold all project. Each item have properties such as id #, name of project, image, github repo link and deployed repo link */
export const data = [
  {
    id: 1,
    name: "Recipe Generator",
    image: Recipe,
    github:
      "https://github.com/brianlucla/Recipe-Generator-Based-on-Ingredient-Availability",
    live: "https://brianlucla.github.io/Recipe-Generator-Based-on-Ingredient-Availability/",
  },
  {
    id: 2,
    name: "Network Fantasy Trading",
    image: nft,
    github: "https://github.com/pakuhn93/NFT-marketplace",
    live: "https://lit-hamlet-47263-654396d0d713.herokuapp.com/marketplace",
  },
  {
    id: 3,
    name: "Project 3",
    image: Recipe,
    github: "",
    live: "",
  },
  {
    id: 4,
    name: "Project 4",
    image: nft,
    github: "",
    live: "",
  },
  {
    id: 5,
    name: "Project 5",
    image: Recipe,
    github: "",
    live: "",
  },
  {
    id: 6,
    name: "Project 6",
    image: nft,
    github: "",
    live: "",
  }
];
