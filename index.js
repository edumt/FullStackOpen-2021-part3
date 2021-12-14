const express = require("express");
const app = express();

app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const generateID = () => Math.floor(Math.random() * 1e9);

app.get("/info", (request, response) => {
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>`
  );
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const person = persons.find((p) => p.id === +request.params.id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.post("/api/persons", (request, response) => {
  const person = { id: generateID(), ...request.body };
  if (!(person.name && person.number)) {
    return response
      .status(400)
      .send({ error: "The name or number is missing." });
  }

  if (persons.some((_person) => _person.name === person.name)) {
    return response
      .status(409)
      .send({ error: "The name already exists in the phonebook." });
  }
  persons = [...persons, person];
  response.status(204).end();
});

app.delete("/api/persons/:id", (request, response) => {
  persons = persons.filter((p) => p.id !== +request.params.id);
  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
