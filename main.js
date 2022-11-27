const favBtn = document.getElementById("favBtn")
const favItem = document.querySelectorAll('.favBtn')


let favItems = [
    {
        name: 'Image 1',
        inFav: 0,
        tag : 'image'

    },

    {
        name: 'Image 2',
        inFav: 0,
        tag : 'image_1'


    },

    {
        name: 'Image 3',
        inFav: 0,
        tag : 'image_2'

    }
]


for(let i=0; i < favItem.length; i++){
    favItem[i].addEventListener('click', (e) => {
        // const ImageSrc = document.getElementById(i).src;
        console.log(i)
        favItemNumber(favItems[i])
    })
}

function favItemNumber(favItems) {
    // console.log("The Post selected is", favItems)
    let itemNumber = localStorage.getItem('itemNumber')
    itemNumber = parseInt(itemNumber)
    
    if(itemNumber){
        localStorage.setItem('itemNumber', itemNumber + 1);

    }else{
        localStorage.setItem('itemNumber', 1)
    }
    setFavItem(favItems)
}

function setFavItem(favItems){
    let FavItems = localStorage.getItem('ItemsInFav')
    FavItems = JSON.parse(FavItems)

    if(FavItems != null){

        if (FavItems[favItems.name] == undefined){
            
            FavItems = {
                ...FavItems,
                [favItems.name]: favItems
            }

        }
        FavItems[favItems.name].inFav += 1
    }
    else{
        favItems.inFav = 1
        FavItems = {
            [favItems.name] : favItems
        }
    }

   
    localStorage.setItem('ItemsInFav', JSON.stringify(FavItems))
}


// displayFavItems()