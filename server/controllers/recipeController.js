require('../models/database');
const Category = require('../models/category');
const Recipe = require('../models/recipe');


/**
 * Get /
 * Homepage
 */
exports.homepage = async (req, res) => {
    try{

        const limitNumber = 3;
        const categories = await Category.find({}).limit(limitNumber);;

        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        const thai = await Recipe.find({ 'category': 'Thai' }).limit(limitNumber);
        const american = await Recipe.find({ 'category': 'American' }).limit(limitNumber);
        const chinese = await Recipe.find({ 'category': 'Chinese' }).limit(limitNumber);
        
    

    const food = { latest, thai, american, chinese };

    res.render('index', { title: 'Cooking Blog - Home', categories, food } );
    }
    catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }
}

/**
 * Get Categories/
 * Categories
 */
exports.exploreCategories = async (req, res) => {
    try{

        const limitNumber = 3;
        const categories = await Category.find({}).limit(limitNumber);;

        res.render('categories', { title: 'Cooking Blog - Categories!', categories: categories });
    }
    catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }
}

/**
 * Get Categories/ id
 * Categories id
 */
exports.exploreCategoriesById = async(req, res) => { 
    try {
      let categoryId = req.params.id;
      const limitNumber = 20;
      const categoryById = await Recipe.find({ 'category': categoryId }).limit(limitNumber);
      res.render('categoryById', { title: 'Cooking Blog - Category', categoryById });
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
  } 




  /**
 * Search
 */
  exports.searchRecipe = async(req, res) => {
    try {
      let searchTerm = req.body.searchTerm;
      let recipe = await Recipe.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
      res.render('search', { title: 'Cooking Blog - Search', recipe } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
    
  }


  
// async function insertDummyRecipeData() {
//   try {
//     await Recipe.insertMany([
//       { 
//     "name": "Kung Pao Chicken",
//     "description": `Kung Pao Chicken is a classic Chinese stir-fry dish that features tender chunks of chicken, peanuts, and vegetables tossed in a flavorful sauce. This dish is known for its bold and spicy flavor profile, which comes from the combination of dried chili peppers, Sichuan peppercorns, and chili paste. The chicken is stir-fried until golden brown and crispy, then combined with crunchy peanuts and crisp vegetables like bell peppers and green onions. Served over steamed rice, Kung Pao Chicken is a delicious and satisfying meal that is sure to please.`,
//     "email": "00015881@wiut.uz",
//     "ingredients": [
//         "Chicken breast, diced",
//         "Peanuts",
//         "Bell peppers, diced",
//         "Green onions, chopped",
//         "Garlic, minced",
//         "Ginger, minced",
//         "Dried chili peppers",
//         "Sichuan peppercorns",
//         "Soy sauce",
//         "Hoisin sauce",
//         "Chili paste",
//         "Cornstarch",
//         "Vegetable oil",
//         "Steamed rice"
//     ],
//     "category": "Chinese", 
//     "image": "kungpaochicken.jpeg"
//   },
//   { 
//     "name": "Dim Sum Dumplings",
//     "description": `Dim Sum Dumplings are a popular Chinese appetizer made with thin sheets of dough filled with various ingredients and steamed to perfection. These bite-sized dumplings can be filled with a variety of fillings, such as pork, shrimp, chicken, or vegetables, and are often seasoned with ginger, garlic, and soy sauce. Dim Sum Dumplings are typically served with a dipping sauce made from soy sauce, vinegar, and chili oil, adding a burst of flavor to each bite.`,
//     "email": "00015881@wiut.uz",
//     "ingredients": [
//         "Dumpling wrappers",
//         "Ground pork or shrimp",
//         "Green onions, finely chopped",
//         "Ginger, grated",
//         "Garlic, minced",
//         "Soy sauce",
//         "Sesame oil",
//         "Cornstarch",
//         "Vegetable oil (for steaming)",
//         "Dipping sauce: Soy sauce, vinegar, chili oil"
//     ],
//     "category": "Chinese", 
//     "image": "dimsumdumplings.jpeg"
//   },
// {
//   "name": "Mapo Tofu",
//         "description": 'Mapo Tofu is a classic Sichuan dish known for its spicy and flavorful sauce. It features soft tofu cubes cooked in a savory and spicy sauce made with fermented black beans, garlic, ginger, and Sichuan peppercorns. Ground pork or beef is often added for extra flavor. Mapo Tofu is typically served with steamed rice and garnished with chopped green onions.',
//         "email": "00015881@wiut.uz",
//         "ingredients": [
//             "Soft tofu",
//             "Ground pork or beef",
//             "Fermented black beans",
//             "Garlic",
//             "Ginger",
//             "Soy sauce",
//             "Sichuan peppercorns",
//             "Chili bean paste",
//             "Chicken or vegetable broth",
//             "Cornstarch",
//             "Green onions",
//             "Vegetable oil"
//         ],
//         "category": "Chinese", 
//         "image": "mapotofu.jpeg"
//       },
//   {
//     "name": "BBQ Pulled Pork Sandwich",
//     "description": "The BBQ Pulled Pork Sandwich is a classic American favorite, featuring slow-cooked pulled pork smothered in tangy barbecue sauce and piled high on a soft hamburger bun. It's often served with coleslaw for added crunch and freshness.",
//     "email": "00015881@wiut.uz",
//     "ingredients": [
//       "Pork shoulder",
//       "BBQ sauce",
//       "Hamburger buns",
//       "Coleslaw (optional)"
//     ],
//     "category": "American",
//     "image": "pulledporksandwich.jpeg"
//   },
//   { 
//     "name": "BBQ Ribs",
//     "description": "BBQ Ribs are a quintessential American dish featuring tender, juicy ribs coated in a tangy barbecue sauce. The ribs are slow-cooked until they are fall-off-the-bone tender and then glazed with a flavorful BBQ sauce. They're perfect for summer cookouts or any time you're craving delicious, finger-licking barbecue.",
//     "email": "00015881@wiut.uz",
//     "ingredients": [
//         "Pork ribs",
//         "BBQ sauce",
//         "Brown sugar",
//         "Paprika",
//         "Garlic powder",
//         "Onion powder",
//         "Salt",
//         "Pepper"
//     ],
//     "category": "American", 
//     "image": "bbqribs.jpeg"
//   }
//     ]);
//   } catch (error) {
//     console.log('err', + error)
//   }
// }

// insertDummyRecipeData();



/**
 * Get / recipe/ id
 * recipe
 */
exports.exploreRecipe = async(req, res) => {
    try {
      let recipeId = req.params.id;
      const recipe = await Recipe.findById(recipeId);
      res.render('recipe', { title: 'Cooking Blog - Recipe', recipe } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
  } 

















