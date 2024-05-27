document.getElementById('loginForm').addEventListener('submit', async e => {
  e.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  console.log('reache here 1234')

  const res = await fetch('http://localhost:5001/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const data = await res.json()
  console.log('login - ', data)

  if (data.token) {
    localStorage.setItem('token', data.token)
    if (data.isSeller)
      window.location.href = `admin.html?id=${data._id}&email=${data.sellerEmail}&name=${data.sellerName}`
    else window.location.href = 'index.html'
  } else {
    alert('Invalid credentials')
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
