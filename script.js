const api = "https://jsonplaceholder.typicode.com/users"
fetch(api).then(response => response.json())
.then(users => {
    const table = document.createElement('table')
    const header = ["ID","Name","Username","Email","Address"]
    const headerRow = document.createElement('tr');

    header.forEach(a =>
    {
        const th = document.createElement('th');
        th.textContent = a;
        headerRow.appendChild(th);
    }
    );
    table.appendChild(headerRow)
  
    users.forEach(user => {
        const row = document.createElement("tr");

        const id = document.createElement("td");
        id.textContent = user.id;

        const name = document.createElement("td");
        name.textContent = user.name;

        const username = document.createElement("td");
        username.textContent = user.username;

        const email = document.createElement("td");
        email.textContent = user.email;

        const address = document.createElement("td");
        const fullAddress = user.address.street + ", " + user.address.suite + ", " + user.address.city;
        address.textContent = fullAddress;

        row.appendChild(id)
        row.appendChild(name)
        row.appendChild(username)
        row.appendChild(email)
        row.appendChild(address)

        row.onclick = function(){
             alert("User ID: " + user.id + "\nUsername: " + user.username + "\nPhone: " + user.address.zipcode);
        }
        table.appendChild(row)
    })

    document.getElementById("my-table").appendChild(table)
})