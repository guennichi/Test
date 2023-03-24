function employé(){
    var employés = JSON.parse(localStorage.getItem('employlist')) || []
    console.log(employés)
    var FirstName = document.getElementById('FirstName')
    var lastName = document.getElementById('lastName')
    var Adress = document.getElementById('Adress')
    var Email = document.getElementById('Email')
    var validForm=true

    if (FirstName.value == '') {
        FirstName.classList.add('is-invalid')
        FirstName.classList.remove('is-valid')

        validForm = false
    }
    else {
        FirstName.classList.add('is-valid')
        FirstName.classList.remove('is-invalid')
    }
    if (lastName.value == '') {
        lastName.classList.add('is-invalid')
        lastName.classList.remove('is-valid')

        validForm = false
    }
    else {
        lastName.classList.add('is-valid')
        lastName.classList.remove('is-invalid')
    }
    if (Adress.value == ''  ) {
        Adress.classList.add('is-invalid')
        Adress.classList.remove('is-valid')

        validForm = false
    }
    else {
        Adress.classList.add('is-valid')
        Adress.classList.remove('is-invalid')
    }

    if (Email.value == '' ) {
        Email.classList.add('is-invalid')
        Email.classList.remove('is-valid')

        validForm = false
    }
    else {
        Email.classList.add('is-valid')
        Email.classList.remove('is-invalid')
    }

    if (validForm) {
        var data = {
            FirstName: FirstName.value,
            lastName: lastName.value,
            Adress: Adress.value,
            Email: Email.value,
        }
        alert(' Le produit est ajouté avec succés')
        console.log(data);
        employés.push(data)
        console.log(employés);
        localStorage.setItem('employlist', JSON.stringify(employés))
        window.location.href = 'product.html'
    }
    
}
