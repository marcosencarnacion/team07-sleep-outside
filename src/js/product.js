import { setLocalStorage } from './utils.mjs'
import ProductData from './ProductData.mjs'

const dataSource = new ProductData('tents')

function addProductToCart(product) {
  // check to see if theres anything in localstorage
  // if theres nothing, add new 'empty array'
  if (localStorage.getItem('so-cart') === null) {
    localStorage.setItem('so-cart', '[]')
  }
  // get empty array or existing array and push product to array
  const productArray = JSON.parse(localStorage.getItem('so-cart'))
  productArray.push(product)

  // add to updated array to localstorage
  setLocalStorage('so-cart', productArray)
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id)
  addProductToCart(product)
}

// add listener to Add to Cart button
document.getElementById('addToCart').addEventListener('click', addToCartHandler)
