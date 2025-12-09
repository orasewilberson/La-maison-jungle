import monstera from '../assets/monstera.jpg';
import lyrata from '../assets/lyrata.jpg';
import photos from '../assets/pothos.jpg';
import basil from '../assets/basil.jpg';
import cactus from '../assets/cactus.jpg';
import calathea from '../assets/calathea.jpg';
import mint from '../assets/mint.jpg';
import olivier from '../assets/olivier.jpg'
import succulent from '../assets/succulent.jpg'


export const plantList = [
    {
        name: 'monstera',
        category: 'classique',
        bestSale: true,
        id: '1ed',
        ligth: 2,
        water: 3, 
        price : 15,
        cover: monstera
       
    },
    {
        name: 'ficus lyrata',
        category: 'classique',
        id: '2ab',
        ligth: 3,
        water: 1,
        cover: lyrata,
        price : 16
    },
    {
        name: 'pothos argenté', 
        category: 'classique',
        id: '3sd',
        ligth: 1,
        water: 2,
        cover: photos,
        price : 9
    },
    {
        name: 'yucca',
        category: 'classique',
        id: '4kk',
        ligth: 3,
        water: 1,
        cover: calathea,
        price : 20
    },
    {
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        ligth: 3,
        water: 1,
        cover: olivier,
        price : 25
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
        ligth: 2,
        water: 2,
        cover: cactus,
        price : 6
	},
	{
		name: 'basilique',
		category: 'extérieur',
        bestSale: true,
		id: '7ie',
        isBestSale : 'true',
        ligth: 2,
        water: 3,
        cover: basil,
        price : 5
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
        light: 2,
        water: 1,
        cover: succulent,
        price : 8
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
        ligth: 2,
        water: 1,
        cover: mint,
        price : 4
	}
]