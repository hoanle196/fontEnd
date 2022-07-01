// const btn = document.querySelector("button.showhide");
// btn.onclick = function() {
//     //     alert("OK");
//     const inputPass = document.querySelector('[name=password]');
//     const type = inputPass.type;
//     //     alert(type);
//     if (type == 'password') {
//         inputPass.setAttribute('type', 'text');
//         this.innerHTML = '<i class="fas fa-eye-slash"></i>';

//     } else {
//         inputPass.setAttribute('type', 'password');
//         this.innerHTML = '<i class="fas fa-eye"></i>';



//     }
// }
$('button.showhide').click(function(event) {
    // alert("Ok");
    const type = $('[name=password]').attr('type');
    if (type == 'password') {
        $('[name=password]').attr('type', 'text');
        $(this).html('<i class="fas fa-eye-slash"></i>');
    } else {

        $('[name=password]').attr('type', 'password');
        $(this).html('<i class="fas fa-eye"></i>');

    }

});