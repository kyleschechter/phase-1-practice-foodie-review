const roastPorkURL = 'http://localhost:3000/dishes/1'
const foodTitle = document.querySelector('h2')
const foodImage = document.querySelector('img')
const foodDescription = document.querySelector('.description textarea')
const updateDishButton = document.querySelector('.description button')
const reviewInput = document.querySelector('.review-form textarea')
const reviewForm = document.querySelector('.review-form')
const existingReviews = document.querySelector('.reviews')

document.addEventListener('DOMContentLoaded', () => {
  fetch(roastPorkURL)
    .then(res => res.json())
    .then(dish => {
      foodTitle.innerHTML = dish.name
      foodImage.src = dish.image_url
      foodDescription.innerHTML = dish.description
      dish.reviews.forEach(review => {
        const reviewList = document.createElement('li')
        reviewList.innerHTML = `"${review}"`
        return existingReviews.append(reviewList)
      })
      updateDishButton.addEventListener('click', (e) => {
        e.preventDefault()
        const newDescription = foodDescription.value
        fetch(roastPorkURL, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            description: newDescription
          })
        })
          .then(res => res.json())
          .then(updatedDescription => foodDescription.innerHTML = updatedDescription.description)
      })
    })
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newReview = document.createElement('li')
    newReview.innerHTML = `"${reviewInput.value}" <br> -Kyle, The Wallstreet Journal`
    existingReviews.append(newReview)
    reviewInput.value = ''
  })
})
