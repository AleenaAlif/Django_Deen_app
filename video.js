const videoBtn = document.querySelectorAll('.videoBtn')

let favVideos = [
    {
        name: 'Video01',
        videoInFav: 0,
        tag : 'video'

    },

    {
        name: 'Video02',
        videoInFav: 0,
        tag : 'video1'


    }

    
]




for(let i=0; i < videoBtn.length; i++){
    videoBtn[i].addEventListener('click', (e) => {
        console.log(i)
        favItemNumber(favVideos[i])
    })
}


function favItemNumber(favVideos) {
    // console.log("The Post selected is", favItems)
    let favVideoNumber = localStorage.getItem('favVideoNumber')
    favVideoNumber = parseInt(favVideoNumber)
    
    if(favVideoNumber){
        localStorage.setItem('favVideoNumber', favVideoNumber + 1);

    }else{
        localStorage.setItem('favVideoNumber', 1)
    }
    setFavItem(favVideos)
}


function setFavItem(favVideos){
    let FavVideos = localStorage.getItem('VideoInFav')
    FavVideos = JSON.parse(FavVideos)

    if(FavVideos != null){

        if (FavVideos[favVideos.name] == undefined){
            
            FavVideos = {
                ...FavVideos,
                [favVideos.name]: favVideos
            }

        }
        FavVideos[favVideos.name].videoInFav += 1
    }
    else{
        favVideos.videoInFav = 1
        FavVideos = {
            [favVideos.name] : favVideos
        }
    }

   
    localStorage.setItem('VideoInFav', JSON.stringify(FavVideos))
}