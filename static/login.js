console.log('js loaded')

$('#signinButton').click(function() {
    loginBox = $('#loginBox').val()
    passwordBox = $('#passwordBox').val()
    packet = {"username": loginBox, "password": passwordBox}

    console.log('signinButton fetched credentials -\nLogin: ', 
    loginBox, '\nPassword:', passwordBox)

    $.ajax({
        type: "POST",
        // method: 'POST',
        url: '/login',
        dataType: "application/json",
        // dataType: "application/x-www-form-urlencoded",
        data: packet,
        // data: "grant_type=&username="+loginBox+"&password="+passwordBox+"&scope=&client_id=&client_secret=",
        success: (response) => {
          console.log('POST request ==> response success!',
          response)
          // location.href="/home"
        },
        error: (response) => {
          console.log('ERROR:', response)
          // location.href="/home"
        }
      });
})