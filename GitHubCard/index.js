/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(data) {
  const div = document.createElement("div");
  div.classList.add("card");

  const img = document.createElement("img");
  img.setAttribute("src", data.avatar_url);

  const innerDiv = document.createElement("div");
  innerDiv.classList.add("card-info");

  const h3 = document.createElement("h3");
  h3.classList.add("name");
  h3.textContent = data.name;

  const p1 = document.createElement("p");
  p1.classList.add("username");
  p1.textContent = data.login;

  const p2 = document.createElement("p");
  p2.textContent = `Location: ${data.location ? data.location : "Earth"}`;

  const p3 = document.createElement("p");
  p3.textContent = `Profile: \n`;

  const linkToPage = document.createElement("a");
  linkToPage.setAttribute("href", data.html_url);
  linkToPage.textContent = data.html_url;

  p3.appendChild(linkToPage);

  const p4 = document.createElement("p");
  p4.textContent = `Followers: ${data.followers}`;

  const p5 = document.createElement("p");
  p5.textContent = `Following: ${data.following}`;

  const p6 = document.createElement("p");
  p6.textContent = `Bio: ${data.bio}`;

  innerDiv.appendChild(h3);
  innerDiv.appendChild(p1);
  innerDiv.appendChild(p2);
  innerDiv.appendChild(p3);
  innerDiv.appendChild(p4);
  innerDiv.appendChild(p5);
  innerDiv.appendChild(p6);

  div.appendChild(img);
  div.appendChild(innerDiv);
  return div;
}

console.log(
  createCard({
    avatar_url: "https://avatars3.githubusercontent.com/u/5380651?v=4"
  })
);

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
axios
  .get("https://api.github.com/users/walela")
  .then(res => {
    const userCard = createCard(res.data);
    document.querySelector(".cards").appendChild(userCard);
  })
  .catch(err => {
    console.error(err);
  });

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "ropeks",
  "brendajoshua",
  "gaearon",
  "ornicar",
  "lukechampine"
];

followersArray.forEach(follower => {
  axios
    .get(`https://api.github.com/users/${follower}`)
    .then(res => {
      const followerCard = createCard(res.data);
      document.querySelector(".cards").appendChild(followerCard);
    })
    .catch(err => {
      console.error(err);
    });
});

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
