fetch ('http://localhost:3000/ramens')
.then( response => response.json () )
.then( createRamens )



function createRamens(fetchedItems) {
    console.log(fetchedItems)
    fetchedItems.forEach( createRamenElement)
    displayRamen(fetchedItems[0])
}

function createRamenElement(ramenItem) {
    const img = document.createElement('img')

    img.src = ramenItem.image

    document.querySelector('#ramen-menu').append(img)

    img.addEventListener('click', (e) =>
    {
        e.preventDefault()
        displayRamen(ramenItem)
    })
}


document.querySelector('#new-ramen').addEventListener('submit', (e) =>
{
    e.preventDefault()
    
    const ramenName = document.querySelector('.name')
    const ramenRestaurant = document.querySelector('.restaurant')
    const detailImage = document.querySelector('.detail-image') 
    const rating = document.querySelector('#rating-display')
    const comment = document.querySelector('#comment-display')

    ramenName.textContent = e.target.new_name.value
    ramenRestaurant.textContent = e.target.new_restaurant.value
    detailImage.src = e.target.new_image.value
    rating.textContent = e.target.new_rating.value
    comment.textContent = e.target.new_comment.value

})

function displayRamen(ramenItem) {
    const ramenName = document.querySelector('.name')
    const ramenRestaurant = document.querySelector('.restaurant')
    const detailImage = document.querySelector('.detail-image') 
    const rating = document.querySelector('#rating-display')
    const comment = document.querySelector('#comment-display')

    ramenName.textContent = ramenItem.name
    ramenRestaurant.textContent = ramenItem.restaurant
    detailImage.src = ramenItem.image
    rating.textContent = ramenItem.rating
    comment.textContent = ramenItem.comment
}




        
