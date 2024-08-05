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
console.log("================================");

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
console.log("================================");
const items2 = [
  { name: "apple", value: 10 },
  { name: "banana", value: 5 },
  { name: "cherry", value: 8 },
];

const addIdInItems = () => {
  // todo code
};

console.log(addIdInItems());
// คำตอบ
//	[
//		{id: 0, name: 'apple', value: 10 },
//		{id: 1, name: 'banana', value: 5 },
//		{id: 2, name: 'cherry', value: 8 }
//	]
