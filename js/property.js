    
if (localStorage.getItem('token')) {
    document.getElementById(
      'login-status'
    ).innerHTML = `<span id="login-s"><button onclick='onLogoutClicked()'>logout</button></span>`
  }
  
  function onLogoutClicked () {
    window.localStorage.removeItem('token')
    window.location.href = 'index.html'
  }