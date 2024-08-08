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
  const purchases = customer.purchases.map((purchases) => {
    const product = products.find((product) => {
      return product.id === purchases.productId;
    });
    const newItem = { ...product, quantity: purchases.quantity };
    return newItem;
  });
  const total = purchases.reduce((prev, item) => {
    return prev + item.price * item.quantity;
  }, 0);
  return total;
};

// 2. หาว่าสินค้าใดที่ลูกค้าซื้อบ่อยที่สุด
const findMostPurchasedProduct = (customer) => {
  // เขียนโค้ดที่นี่
  const purchases = customer.purchases.map((purchases) => {
    const product = products.find((product) => {
      return product.id === purchases.productId;
    });
    const newItem = { ...product, quantity: purchases.quantity };
    return newItem;
  });
  const total = purchases.reduce((prev, item) => {
    return prev.quantity > item.quantity ? prev : item;
  }, 0);
  const { id, name, price, stock } = total;
  return { id, name, price, stock };
};

// 3. ลบสินค้าที่หมดสต็อกออกจากรายการสินค้า
const removeOutOfStockProducts = (products) => {
  // เขียนโค้ดที่นี่
  const productIndex = products.findIndex((product) => {
    return product.stock === 0;
  });
  const newproducts = [...products];
  newproducts.splice(productIndex, 1);
  return newproducts;
};

// 4. แยกชื่อสินค้าและราคา ออกมาแสดงแค่สองอย่างนี้
const extractProductNamesAndPrices = (products) => {
  // เขียนโค้ดที่นี่
  const newproduct = products.map((item) => {
    const { name, price } = item;
    return { name, price };
  });
  return newproduct;
};

// 5. เพิ่มจำนวนสต็อกของสินค้าที่มีอยู่
const restockProducts = (products, id, stock) => {
  // เขียนโค้ดที่นี่
  const productsIndex = products.findIndex((product) => {
    return product.id === id;
  });
  const newItem = { ...products[productsIndex], stock };
  const newproducts = [...products];
  newproducts.splice(productsIndex, 1, newItem);
  return newproducts;
};

// 6. ค้นหาลูกค้าที่ใช้จ่ายมากที่สุด
const findTopSpender = (customers) => {
  // เขียนโค้ดที่นี่
  const customer = customers.map((preson) => {
    const purchases = preson.purchases.map((purchase) => {
      const product = products.find((product) => {
        return product.id === purchase.productId;
      });

      const newpurchase = { ...product, quantity: purchase.quantity };

      return newpurchase;
    });

    const newcustomers = { ...preson, purchases: purchases };
    return newcustomers;
  });

  const CheckproductMax = customer.reduce((prev, max) => {
    const Checkprev = prev.purchases.reduce((prev, purchase) => {
      return prev + purchase.quantity * purchase.price;
    }, 0);
    const Checkmax = max.purchases.reduce((prev, max) => {
      return prev + max.quantity * max.price;
    }, 0);
    return Checkmax > Checkprev ? max : prev;
  }, customer[0]);
  return CheckproductMax.name;
};

// 7. คำนวณราคา ส่วนลด สำหรับลูกค้าทุกคนแล้วแสดงข้อมูลที่อัพเดทแล้วออกมา ไปดูเงื่อนไขข้อ 7 50 มีส่วนลดสำหรับคนที่มีเมมเบอร์ ถ้าต่ำกว่า 25 ไม่เสียไรเลย
const calculateDiscountedPrices = (customers) => {
  // เขียนโค้ดที่นี่
  const newCustomers = customers.map((preson) => {
    const purchases = preson.purchases.map((purchase) => {
      const product = products.find((product) => {
        return product.id === purchase.productId;
      });
      const newpurchase = { ...product, quantity: purchase.quantity };
      return newpurchase;
    });
    const newCustomer = { ...preson, purchases: purchases };
    return newCustomer;
  });

  const totalPriceAfterSell = newCustomers.map((customer) => {
    const totalPrice = customer.purchases.reduce((prev, purchase) => {
      const { quantity, price } = purchase;
      const currPrice = prev + quantity * price;

      const finalCal =
        customer.isMember && currPrice >= 40
          ? currPrice - currPrice * 0.1
          : currPrice;

      return finalCal;
    }, 0);

    return { name: customer.name, price: totalPrice };
  });

  return totalPriceAfterSell;
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
console.log(restockProducts(products, 1, 10));
// [
//   { id: 1, name: 'apple', price: 10, stock: 10 },
//   { id: 2, name: 'banana', price: 5, stock: 20 },
//   { id: 3, name: 'cherry', price: 8, stock: 15 }
// ]
console.log(findTopSpender(customers)); // Bob
console.log(calculateDiscountedPrices(customers));
