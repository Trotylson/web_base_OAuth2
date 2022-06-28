console.log('js loaded')

$('#signinButton').click(function() {
    loginBox = $('#loginBox').val()
    passwordBox = $('#passwordBox').val()
    packet = "grant_type=&username="+loginBox+"&password="+passwordBox+"&scope=&client_id=&client_secret="

    console.log('signinButton fetched credentials -\nLogin: ', 
    loginBox, '\nPassword:', passwordBox)

    $.ajax({
        method: 'POST',
        dataType: "application/json",
        data: packet,
        url: '/token',
        success: (response) => {
          console.log('GET request ==> response success!',
          response)
        },
        error: (response) => {
          console.log(response)
        }
      });
})