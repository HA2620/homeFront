document.getElementById('signupForm').addEventListener('submit', async e => {
  e.preventDefault()

  const isSeller = document.getElementById('isSeller').checked
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  console.log({ isSeller, name, email, password })

    const res = await fetch('http://localhost:5001/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isSeller, name, email, password })
    })

  const data = await res.json()
//   console.log('data = ', data)
  if (data.token) {
    localStorage.setItem('token', data.token)
    window.location.href = 'index.html'
  } else {
    alert('Error during registration')
  }
})
if (localStorage.getItem('token')) {
    document.getElementById(
      'login-status'
    ).innerHTML = `<span id="login-s"><button onclick='onLogoutClicked()'>logout</button></span>`
  }
  
  function onLogoutClicked () {
    window.localStorage.removeItem('token')
    window.location.href = 'index.html'
  }
