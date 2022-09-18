// ITERATION 1

// function updateSubtotal(product) {
//   const price = product.querySelector('.price span').innerHTML;

//   const quantity = product.querySelector('.quantity input').innerHTML;

//   let subTotalPrice = Number(price * quantity);

//   let subTotal = product.querySelector('.subtotal span').innerHTML;
//   subTotal = subTotalPrice;

//   return subtotal;
// }

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = Number(price.textContent * quantity.value);
  return subtotal.textContent;
}

// ITERATION 2
// ITERATION 3

function calculateAll() {
  const products = document.querySelectorAll('.product');
  const total = document.querySelector('#total-value span');
  let totalPrice = 0.0;
  products.forEach((element) => {
    totalPrice += parseFloat(updateSubtotal(element));
  });
  total.textContent = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const product = target.parentNode.parentNode;
  const parent = product.parentNode;
  parent.removeChild(product);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.getElementById('createName').value;
  const productPrice = document.getElementById('createPrice').value;
  const productParent = document.querySelector('tbody');
  const newProduct = document.createElement('tr');
  newProduct.className = 'product';
  newProduct.innerHTML += `
          <td class="name">
            <span>${productName}</span>
          </td>
          <td class="price">$<span>${parseFloat(productPrice)}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `;
  productParent.appendChild(newProduct);
  document.getElementById('createName').value = '';
  document.getElementById('createName').ariaPlaceholder = 'Product Name';
  document.getElementById('createPrice').value = 0;
  addEvents();
}

function addEvents() {
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach((element) => {
    element.addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const create = document.getElementById('create');
  create.addEventListener('click', createProduct);
  addEvents();
});
