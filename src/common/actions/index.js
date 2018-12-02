import search from '../lib/youtube-api-search';
export const SEARCH_STARTED = 'SEARCH_STARTED';
export const SEARCH_FINISHED = 'SEARCH_FINISHED';

export const searchStarted = () => ({
  type: SEARCH_STARTED,
});

export const searchFinished= videos => ({
  type: SEARCH_FINISHED,
  payload: {videos}
});

export default keyword => dispatch => {
 if(keyword){
    dispatch(searchStarted());
    const API_KEY='AIzaSyCRWo2eCLr9CtZb5x4HAxH7CP64q6a6x5k';
    search(API_KEY, keyword)
      .then(data => {
        const videos=data.items.map((item) =>{
          return{
            id:item.id.videoId,
            title:item.snippet.title,
            description:item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.default.url
          }
        });
        dispatch(searchFinished(videos));
        console.log(videos);
      })
      .catch(error => console.error(error))
 };
};
