// student interface definition
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

//Two student objects
const student1: Student = {
  firstName: "Temi",
  lastName: "Ajsey",
  age: 18,
  location: "Tympany",
};

const student2: Student = {
  firstName: "Anna",
  lastName: "Argo",
  age: 22,
  location: "Tympany",
};

//array of student objects
const studentsList: Student[] = [student1, student2];

// rendering the table with Vanillajs
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const cell1 = document.createElement("td");
  cell1.textContent = student.firstName;

  const cell2 = document.createElement("td");
  cell2.textContent = student.location;

  row.appendChild(cell1);
  row.appendChild(cell2);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
