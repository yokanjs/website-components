const collapseButton = document.getElementById("collapse");
const playlist = document.getElementById("playlist");

collapseButton.onclick = function () {
  if (collapseButton.className == "fas fa-angle-down") {
    collapseButton.className = "fas fa-angle-up";
    playlist.style.display = "block";
  } else {
    collapseButton.className = "fas fa-angle-down";
    playlist.style.display = "none";
  }
};

const test = document.getElementById("test");
var arr = [
  {
    id: 1,
    title: "Youtube Video - #1",
    owner: "Ali",
    image:
      "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    length: "2:55",
  },
  {
    id: 2,
    title: "Youtube Video - #2",
    owner: "Ayse",
    image:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    length: "3:45",
  },
  {
    id: 3,
    title: "Youtube Video - #3",
    owner: "Fatma",
    image:
      "https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    length: "5:12",
  },
  {
    id: 4,
    title: "Youtube Video - #4",
    owner: "Mehmet",
    image:
      "https://images.unsplash.com/photo-1559291001-693fb9166cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    length: "3:43",
  },
  {
    id: 5,
    title: "Youtube Video - #5",
    owner: "Murat",
    image:
      "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    length: "1:35",
  },
  {
    id: 6,
    title: "Youtube Video - #6",
    owner: "Omer",
    image:
      "https://images.unsplash.com/photo-1524946274118-e7680e33ccc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    length: "5:35",
  },
  {
    id: 7,
    title: "Youtube Video - #7",
    owner: "Nuran",
    image:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    length: "6:11",
  },
  {
    id: 8,
    title: "Youtube Video - #8",
    owner: "Cengiz",
    image:
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    length: "10:00",
  },
  {
    id: 9,
    title: "Youtube Video - #9",
    owner: "Necati",
    image:
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    length: "4:50",
  },
  {
    id: 10,
    title: "Youtube Video - #10",
    owner: "Kemal",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    length: "3:47",
  },
];

arr.forEach(function (data, index) {
  var item = document.createElement("div");

  item.innerHTML = `
  <div class="listItem">
  <div class="itemImage">
    <img src="${data.image}" alt="" />
    <button class="itemLength">${data.length}</button>
  </div>
  <div class="itemInfo">
    <p class="videoTitle">${data.title}</p>
    <p class="videoOwner">${data.owner}</p>
  </div>
  </div>
    `;
  playlist.appendChild(item);
  console.log(data);
});
