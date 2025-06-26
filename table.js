const heading = document.createElement("h2");
heading.textContent = "User Information Table";
heading.style.textAlign = "center";
heading.style.marginTop = "30px";
document.body.insertBefore(heading, document.body.firstChild);

const table = document.createElement("table");
document.body.appendChild(table);
table.style.width = "60%";
table.style.margin = "40px auto";
table.style.borderCollapse = "collapse";
table.style.border = "1px solid black";
table.style.textAlign = "center";

const headerRow = document.createElement("tr");
table.appendChild(headerRow);
const headers = ["Name", "Username", "Email", "Address"];
headers.forEach((headerText) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  th.style.border = "1px solid black";
  th.style.backgroundColor = "#f2f2f2";
  th.style.padding = "8px";
  th.style.textAlign = "center";
  headerRow.appendChild(th);
});

const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      const row = document.createElement("tr");
      table.appendChild(row);

      // Name
      const tdName = document.createElement("td");
      tdName.textContent = user.name;
      tdName.style.border = "1px solid black";
      tdName.style.padding = "8px";
      row.appendChild(tdName);

      // Username
      const tdUsername = document.createElement("td");
      tdUsername.textContent = user.username;
      tdUsername.style.border = "1px solid black";
      tdUsername.style.padding = "8px";
      row.appendChild(tdUsername);

      // Email
      const tdEmail = document.createElement("td");
      tdEmail.textContent = user.email;
      tdEmail.style.border = "1px solid black";
      tdEmail.style.padding = "8px";
      row.appendChild(tdEmail);

      // Address
      const tdAddress = document.createElement("td");
      const address = user.address;
      tdAddress.textContent = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
      tdAddress.style.border = "1px solid black";
      tdAddress.style.padding = "8px";
      row.appendChild(tdAddress);

      // Add click event to all cells in the row
      [tdName, tdUsername, tdEmail, tdAddress].forEach((cell) => {
        cell.addEventListener("click", () => {
          alert(
            `Name: ${user.name}\nUsername: ${user.username}\nEmail: ${user.email}\nAddress: ${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`
          );
        });
      });
    });
  });
