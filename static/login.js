console.log('js loaded')

$('#signinButton').click(function() {
    loginBox = $('#loginBox').val()
    passwordBox = $('#passwordBox').val()
    packet = "{'login':'tester', 'password':'321'}"

    console.log('signinButton fetched credentials -\nLogin: ', 
    loginBox, '\nPassword:', passwordBox)

    $.ajax({
        method: 'POST',
        dataType: "application/json",
        data: packet,
        url: '/login',
        success: (response) => {
          console.log('GET request ==> response success!',
          response)
        },
        error: (response) => {
          console.log(response)
        }
      });
})