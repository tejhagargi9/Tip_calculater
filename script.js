const bill = document.getElementById("billInput");
const tip = document.getElementById("tipInput");
const people = document.getElementById("num");
const perPersonTotal = document.getElementById("result");

// console.log(numberOfPeople);
perPersonTotal.innerText = `$${0}`;


const calculatebill = () => {
  const billinput = Number(bill.value);

  const tipinput = Number(tip.value);

  const perc = tipinput / 100;

  const totaltip = billinput * perc

  let total = (billinput + totaltip) / Number(people.value);

  perPersonTotal.innerText = `$${total.toFixed(1)}`;
};

const increasepeople = () => {
  people.value++;
  calculatebill();
};
const decreasepeople = () => {
  people.value--;
  if (people.value == 0) {
    people.value = 1;
  }

  calculatebill();
};
