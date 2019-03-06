$(document).ready(() => {
    $('#show').hide();
    $('#profile').hide();
    console.log('Running');

    $("#submit").click((event)=> {
      //  event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#pwd").val();
    var addr = $("#add").val();
    if(name == ""){
    
        event.preventDefault();
        $('#name').focus();
        $('#name').addClass('input-error');
        $('#error-message').text('Username cannot be left blank');
    }else if(password == ""){

        event.preventDefault();
        $('#pwd').addClass('input-error');
        $('#pwd').focus();
        $('#error-message').text('Password cannot be left blank');
    }else if(email == ""){

        event.preventDefault();
        $('#email').addClass('input-error');
        $('#email').focus();
        $('#error-message').text('Email cannot be left blank');
    }
    else if(addr == ""){

        event.preventDefault();
        $('#add').addClass('input-error');
        $('#add').focus();
        $('#error-message').text('Address cannot be left blank');
    }else{
         
        localStorage.setItem('nm',name);
        localStorage.setItem('ad',addr);
        localStorage.setItem('em',email);
        $('#name1').html(localStorage.getItem('nm'));
        $('#add1').html(localStorage.getItem('ad'));
        $('#mail1').html(localStorage.getItem('em'));
    
        $('#profile').show();
        $('#show').show();
    }
    //$('#pop').show();

   
   

});
});
