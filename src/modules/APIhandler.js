// Unique identifier of the created app
const appId = 'kUgCgfStndTaZOctty77';

const fetchTVAPI = async () => {
  const TVResponse = await fetch('https://api.tvmaze.com/shows');
  const getShowResult = await TVResponse.json();
  return getShowResult.slice(0, 6);
};

const fetchInvolvementAPI = async () => {
  const involvementAPIResponse = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`);
  const getLikeResult = await involvementAPIResponse.json();
  return getLikeResult;
};

const submitLike = async (newLike) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: newLike,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default { fetchTVAPI, fetchInvolvementAPI, submitLike };