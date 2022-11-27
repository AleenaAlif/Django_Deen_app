function displayFavItems(){
    let FavItems = localStorage.getItem("ItemsInFav")
    FavItems = JSON.parse(FavItems)
    let favItemContainer = document.querySelector(".imageContainer")

    if (FavItems && favItemContainer){
        console.log("running")
        favItemContainer.innerHTML = ''

        Object.values(FavItems).map(items => {
            
            favItemContainer.innerHTML += `
            <div class="imageContainer">
                <img src="./img/${items.tag}.jpg">
            </div>

            `
        })
    }


    console.log(FavItems)
}

function displayFavVideo(){
    let FavVideos = localStorage.getItem("VideoInFav")
    FavVideos = JSON.parse(FavVideos)
    let favItemContainer = document.querySelector(".container")

    if (FavVideos && favItemContainer){
        console.log("running")
        favItemContainer.innerHTML = ''

        Object.values(FavVideos).map(items => {
            console.log(items.tag)
            
            favItemContainer.innerHTML += `
            
            
        <div class="container">
            <video width="320" height="240" class="videoBox" controls>
            </video>
        </div>

            
            
        

            `
        })
    }


    console.log(FavVideos)
}

displayFavVideo()

displayFavItems()