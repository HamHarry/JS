console.log("================1================");
const items = [
  { price: 10, quantity: 2 },
  { price: 5, quantity: 5 },
  { price: 8, quantity: 3 },
]; // quantity คือจำนวนสินค้า

const calculateTotalPrice = () => {
  // todo code
  const totalPrice = items.reduce((prev, item) => {
    return prev + item.price * item.quantity;
  }, 0);
  return totalPrice;
};
console.log(calculateTotalPrice()); // คำตอบ 69
console.log("================2================");

const items1 = [
  { name: "apple", value: 10 },
  { name: "banana", value: 5 },
  { name: "cherry", value: 8 },
];

const removeItemByName = (itemName) => {
  // todo code
  const itemsIndex = items1.findIndex((item) => {
    return item.name === itemName;
  });
  const newItems1 = [...items1];
  newItems1.splice(itemsIndex, 1);
  return newItems1;
};
console.log(removeItemByName("banana"));
// คำตอบ [ { name: 'apple', value: 10 }, { name: 'cherry', value: 8 } ]
console.log("================================3===========================");
const items2 = [
  { name: "apple", value: 10 },
  { name: "banana", value: 5 },
  { name: "cherry", value: 8 },
];

const addIdInItems = () => {
  // todo code
  const newitems2 = items2.map((item, index) => {
    return { id: index, ...item };
  });
  return newitems2;
};

console.log(addIdInItems());
// คำตอบ
//	[
//		{id: 0, name: 'apple', value: 10 },
//		{id: 1, name: 'banana', value: 5 },
//		{id: 2, name: 'cherry', value: 8 }
//	]
console.log("==============================4=============================");
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const extractNames = () => {
  // todo code
  const newpeople = people.map((item) => {
    return item.name;
  });
  return newpeople;
};

console.log(extractNames()); // คำตอบ ['Alice', 'Bob', 'Charlie']
console.log("==============================5=============================");
const numbers = [1, 2, 3, 4, 5];

const doubleValues = () => {
  // todo code
  const newnumbers = numbers.map((item) => {
    return item * 2;
  });
  return newnumbers;
};

console.log(doubleValues()); // คำตอบ [2, 4, 6, 8, 10]
console.log("==============================6=============================");
const people1 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const findPersonByName = (name) => {
  // todo code
  const newpeople1 = people1.find((item) => {
    return item.name === name;
  });
  return newpeople1;
};

console.log(findPersonByName("Bob")); // คำตอบ { name: 'Bob', age: 30 }
console.log("==============================7=============================");
const getDiscountedPrice = (price, isMember) => {
  // todo code
  if (isMember === true && price > 100) {
    const newDiscountedPrice = price * ((100 - 10) / 100);
    return newDiscountedPrice;
  } else if (isMember === false && price > 100) {
    const newDiscountedPrice = price * ((100 - 5) / 100);
    return newDiscountedPrice;
  } else if (isMember === false && price < 100) {
    const newDiscountedPrice = price;
    return newDiscountedPrice;
  }
};

console.log(getDiscountedPrice(150, true)); // คำตอบ 135
console.log(getDiscountedPrice(150, false)); // คำตอบ 142.5
console.log(getDiscountedPrice(80, false)); // คำตอบ 80

const products = [
  { id: 1, name: "apple", price: 10, stock: 0 },
  { id: 2, name: "banana", price: 5, stock: 20 },
  { id: 3, name: "cherry", price: 8, stock: 15 },
];
console.log("==============================8=============================");
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
};

// 2. หาว่าสินค้าใดที่ลูกค้าซื้อบ่อยที่สุด
const findMostPurchasedProduct = (customer) => {
  // เขียนโค้ดที่นี่
};

// 3. ลบสินค้าที่หมดสต็อกออกจากรายการสินค้า
const removeOutOfStockProducts = (products) => {
  // เขียนโค้ดที่นี่
};

// 4. แยกชื่อสินค้าและราคา ออกมาแสดงแค่สองอย่างนี้
const extractProductNamesAndPrices = (products) => {
  // เขียนโค้ดที่นี่
};

// 5. เพิ่มจำนวนสต็อกของสินค้าที่มีอยู่
const restockProducts = (products, restocks) => {
  // เขียนโค้ดที่นี่
};

// 6. ค้นหาลูกค้าที่ใช้จ่ายมากที่สุด
const findTopSpender = (customers) => {
  // เขียนโค้ดที่นี่
};

// 7. คำนวณราคา ส่วนลด สำหรับลูกค้าทุกคนแล้วแสดงข้อมูลที่อัพเดทแล้วออกมา ไปดูเงื่อนไขข้อ 7
const calculateDiscountedPrices = (customers) => {
  // เขียนโค้ดที่นี่
};

console.log(calculateTotalSpent(customers[0])); // 60

console.log(findMostPurchasedProduct(customers[1]));
// { id: 2, name: 'banana', price: 5, stock: 20 }

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

console.log(restockProducts(products, [{ productId: 1, quantity: 10 }]));
// [
//   { id: 1, name: 'apple', price: 10, stock: 10 },
//   { id: 2, name: 'banana', price: 5, stock: 20 },
//   { id: 3, name: 'cherry', price: 8, stock: 15 }
// ]

console.log(findTopSpender(customers)); // Bob

console.log(calculateDiscountedPrices(customers));
