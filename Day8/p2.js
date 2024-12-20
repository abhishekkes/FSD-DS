async function orderfood(name, time) {
  return new Promise((resolve, reject) => {
    if (name == "burger") reject("Burger Not Available");
    setTimeout(() => {
      resolve("Order " + name + " Prepared");
    }, time);
  });
}

async function restaurant() {
  console.log("Order Placed");
  const pizza = await orderfood("pizza", 1000);
  console.log(pizza);
  try {
    const burger = await orderfood("burger", 2000);
    console.log(burger);
  } catch (error) {
    console.log(error);
  }

  const noodles = await orderfood("noodles", 3000);
  console.log(noodles);
  console.log("All Order Served");
}

restaurant();
