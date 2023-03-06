console.log("Person1: shows ticket");
console.log("Person2: shows ticket");

const preMovie = async () => {
  const promiseTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve("popcorn"), 3000);
  });
  const getButter = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Butter"), 3000);
  });
  const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Cold Drinks"), 3000);
  });

  let ticket = await promiseTicket;

  console.log(`here the ${ticket}`);
  console.log("We should go");
  console.log("no I am hungry");

  let popcorn = await getPopcorn;

  console.log(`u have ${popcorn}, We should go`);
  console.log("no I need butter");

  let butter = await getButter;

  console.log(`Got some ${butter} lets go`);
  console.log('I need a cold drink with popcorn')

  let drink = await getColdDrinks;

  console.log(`Got the ${drink} now please lets go`)

  return ticket;
};

preMovie().then((m) => console.log(`Person3: shows ${m}`));

//  const promiseTicket = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Ticket')
//     },3000)
//  })

//  const getPopcorn = promiseTicket.then((t)=>{
//     console.log('here the ticket')
//     console.log('We should go')
//     console.log('no I am hungry')
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
//  })
// const getButter = getPopcorn.then((t)=>{
//     console.log('u have popcorn, We should go')
//     console.log('no I need butter')
//     return new Promise((resolve,reject)=>resolve(`${t} butter`))
// })
// const getColdDrinks = getButter.then((t)=>{
//     console.log('u have butter on popcorn lets goo')
//     console.log('I need a cold drink with popcorn')
//     return new Promise((resolve,reject)=>resolve(`${t} cold drink`))
// })

//  getColdDrinks.then((t)=>console.log(t))

console.log("Person4: shows ticket");
console.log("Person5: shows ticket");
