const OverwatchApiMethods = {
    getGameInfo: (guid) => {
        fetch(`https://www.giantbomb.com/api/game/${guid}`)
         .then((response) => {
             return response.json();
         }).catch(err => console.log(err));
    }
    
}


export default OverwatchApiMethods;