console.log("==============================8=============================");
const products = [
  { id: 1, name: "apple", price: 10, stock: 0 },
  { id: 2, name: "banana", price: 5, stock: 20 },
  { id: 3, name: "cherry", price: 8, stock: 15 },
];
const customers = [
  {
    id: 1,
    name: "Alice",
    isMember: true,
    purchases: [
      { productId: 2, quantity: 5 },
      { productId: 3, quantity: 2 },
    ],
  },
  {
    id: 2,
    name: "Bob",
    isMember: false,
    purchases: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 10 },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    isMember: true,
    purchases: [{ productId: 3, quantity: 3 }],
  },
];

// 1. คำนวณราคาสินค้าทั้งหมดที่ลูกค้าซื้อไป
const calculateTotalSpent = (customer) => {
  // เขียนโค้ดที่นี่
  const newproduct = customer.purchases.map((item) => {
    const product = products.find((product) => {
      return product.id === item.productId;
    });
    const newItem = { ...product, quantity: item.quantity };
    return newItem;
  });
  const total = newproduct.reduce((prev, item) => {
    return prev + item.quantity * item.price;
  }, 0);
  return total;
};

// 2. หาว่าสินค้าใดที่ลูกค้าซื้อบ่อยที่สุด
const findMostPurchasedProduct = (customer) => {
  // เขียนโค้ดที่นี่
  const newproduct = customer.purchases.map((item) => {
    const product = products.find((product) => {
      return product.id === item.productId;
    });
    const newItem = { ...product, quantity: item.quantity };
    return newItem;
  });
  /*
    prev = {id:1, q:1} , item = {id:1 , q:1}
    prev = {id:1 ,q:1}, item = {id:1 , q:10}
    prev {id:1 , q:10}
  */
  const value = newproduct.reduce((prev, currentItem) => {
    return currentItem.quantity > prev.quantity ? currentItem : prev;
  }, newproduct[0]);
  return value;
};

// 3. ลบสินค้าที่หมดสต็อกออกจากรายการสินค้า
const removeOutOfStockProducts = (products) => {
  // เขียนโค้ดที่นี่
  const productOutIndex = products.findIndex((product) => {
    return product.stock === 0;
  });
  const newproduct = [...products];
  newproduct.splice(productOutIndex, 1);
  return newproduct;
};

// 4. แยกชื่อสินค้าและราคา ออกมาแสดงแค่สองอย่างนี้
const extractProductNamesAndPrices = (products) => {
  // เขียนโค้ดที่นี่
  const productOutIndex = products.map((item) => {
    return { name: item.name, price: item.price };
  });
  return productOutIndex;
};

// 5. เพิ่มจำนวนสต็อกของสินค้าที่มีอยู่
const restockProducts = (products, id, stock) => {
  // เขียนโค้ดที่นี่
  const stockIndex = products.findIndex((product) => {
    return id === product.id;
  });
  const Stock = { ...products[stockIndex], stock: stock };
  const newStocked = [...products];
  newStocked.splice(stockIndex, 1, Stock);
  return newStocked;
};

// 6. ค้นหาลูกค้าที่ใช้จ่ายมากที่สุด
const findTopSpender = (customers) => {
  // เขียนโค้ดที่นี่
  const newCustomers = customers.map((customer) => {
    const newPurchaes = customer.purchases.map((purchase) => {
      const product = products.find(
        (product) => product.id === purchase.productId
      );
      const { quantity } = purchase;
      const newPurchae = { ...product, quantity };
      return newPurchae;
    });

    const newCustumer = { ...customer, purchases: newPurchaes };
    return newCustumer;
  });

  const mostBuyProduct = newCustomers.reduce((max, customer) => {
    const reducedCustomer = customer.purchases.reduce((prev, purchase) => {
      return prev + purchase.quantity * purchase.price;
    }, 0);

    const reducedMax = max.purchases.reduce((prev, purchase) => {
      return prev + purchase.quantity * purchase.price;
    }, 0);

    return reducedCustomer > reducedMax ? customer : max;
  }, newCustomers[0]);

  return mostBuyProduct.name;
};

// 7. คำนวณราคา ส่วนลด สำหรับลูกค้าทุกคนแล้วแสดงข้อมูลที่อัพเดทแล้วออกมา ไปดูเงื่อนไขข้อ 7
const calculateDiscountedPrices = (customers) => {
  // เขียนโค้ดที่นี่
};

console.log(calculateTotalSpent(customers[0])); // 60
console.log(findMostPurchasedProduct(customers[1])); // { id: 2, name: 'banana', price: 5, stock: 20 }
console.log(removeOutOfStockProducts(products));
// [
//   { id: 2, name: 'banana', price: 5, stock: 20 },
//   { id: 3, name: 'cherry', price: 8, stock: 15 }
// ]
console.log(extractProductNamesAndPrices(products));
// [
//   { name: 'apple', price: 10 },
//   { name: 'banana', price: 5 },
//   { name: 'cherry', price: 8 }
// ]

console.log(restockProducts(products, 1, 10));
// [
//   { id: 1, name: 'apple', price: 10, stock: 10 },
//   { id: 2, name: 'banana', price: 5, stock: 20 },
//   { id: 3, name: 'cherry', price: 8, stock: 15 }
// ]

console.log(findTopSpender(customers)); // Bob

// console.log(calculateDiscountedPrices(customers));
