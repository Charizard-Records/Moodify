import React from 'react'


const MainPage = () => {
  function handleClick() {
    console.log('button clicked')
    fetch('http://localhost:8080/login')
    // .then((data) => data.json())
    .then((response) => window.location.href = response.url)
  }


  return (
    <div>
      <p>Main Page</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default MainPage
