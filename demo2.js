const posts = [
  { title: "Post1", body: "this is post one" },
  { title: "Post2", body: "this is post two" },
];
const post3 = { title: "Post3", body: "this is post three" };
function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post.title);
    });
  }, 1000);
}

const createPost = async () => {
  const newPost = new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post3);
      resolve();
    });
  });

  let newPost1 = await newPost;

  return newPost1;
};


createPost().then(() =>getPosts());
// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);

//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Error:Something went wrong");
//       }
//     }, 2000);
//   });
// }


// createPost(post3).then(updateLastUserActivityTime);

// const Promise1 = Promise.resolve("Hello world");
// const Promise2 = 10;
// const Promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Goodbye");
// });

// Promise.all([Promise1,Promise2,Promise3]).then((values)=>{
//     console.log(values)
// })
