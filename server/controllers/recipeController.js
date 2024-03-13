require('../models/database');
const Category = require('../models/category');

/**
 * Get /
 * Homepage
 */
exports.homepage = async (req, res) => {
    try{

        const limitNumber = 3;
        const categories = await Category.find({}).limit(limitNumber);;

        res.render('index', { title: 'Cooking Blog - Homepage!', categories: categories });
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



// async function insertDummycategoryData() {
//     try {
//         await Category.insertMany([
//             {
//                 "name": "Thai",
//                 "image": "https://i.pinimg.com/originals/1f/23/ef/1f23efa9c6f7662eda40fc10e308f2d4.png"
//             },
//             {
//                 "name": "American",
//                 "image": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FEdit%2Fshutterstock_284608058"
//             },
//             {
//                 "name": "Chinese",
//                 "image": "https://wallpaperaccess.com/full/4337523.jpg"
//             },
            
//         ]);
//     } catch (error) {
//         console.log('err', error);
//     }
// }

// // Call the function to insert dummy data
// insertDummycategoryData();
