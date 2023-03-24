var employés = JSON.parse(localStorage.getItem('employlist')) || []
function list() {
    var tbody = document.getElementById('tbody')
    employés.map((element, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${element.FirstName}</td>
            <td>${element.lastName}</td>
            <td>${element.Adress}</td>
            <td>${element.Email} Dt</td>
            <td><button onclick='loadData(${index})'type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Edit
          </button>
            <button onclick='supp(${index})' class="btn btn-danger btn-sm delete">Delete</button></td>
        </tr>
        `

    })
}
list()

function supp(i) {

    employés.splice(i, 1)
    localStorage.setItem('employlist', JSON.stringify(employés))
    window.location.reload()
}

var nom = document.getElementById('FirstName')
var des = document.getElementById('lastName')
var qt = document.getElementById('Adress')
var pr = document.getElementById('Email')
var index = 5
function loadData(i) {
    FirstName.value = employés[i].FirstName
    lastName.value = employés[i].lastName
    Adress.value = employés[i].Adress
    Email.value = employés[i].Email
    index = i
}

function saveChanges() {

    var data = {
        FirstName:FirstName.value ,
        lastName :lastName.value ,
        Adress :Adress.value,
        Email:Email.value 
    }
    employés.splice(index,1,data);
    localStorage.setItem('employlist',JSON.stringify(employés))
    window.location.reload()
}