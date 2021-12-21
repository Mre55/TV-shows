const displayListOfShows = document.querySelector('.display-list-of-shows');

// Unique identifier of the created app
const appId = 'ZrzK7KRIzPnG4aqv9ic4';

const fetchDataFromAPI = async () => {
  const TVResponse = await fetch('https://api.tvmaze.com/shows');
  const getShowResult = await TVResponse.json();

  const showArray = getShowResult.slice(0, 6);

  const involvementAPIResponse = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`);
  const getLikeResult = await involvementAPIResponse.json();

  const values = showArray.map((result) => `<div class="display-show">
    <img src="${result.image.medium}" alt="">
    <p>${result.name}</p>
    <p>${getLikeResult.filter((like) => like.item_id === result.id)[0].likes} likes</p>
    <button>Comments</button>
    </div>`).join('');

  displayListOfShows.innerHTML = values;
};

export default { fetchDataFromAPI };