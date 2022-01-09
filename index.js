require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const Person = require("./models/person");
app.use(express.static("build"));
app.use(express.json());
app.use(cors());

morgan.token("sent-data", function (req, res) {
  if (req.method === "POST") return JSON.stringify(req.body);
});
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :sent-data"
  )
);

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

app.get("/info", (request, response) => {
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>`
  );
});

app.get("/api/persons", (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get("/api/persons/:id", (request, response) => {
  const person = persons.find((p) => p.id === +request.params.id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).send({
      error: `The provided id (${request.params.id}) doesn't have any matches in the phonebook.`,
    });
  }
});

app.post("/api/persons", (request, response) => {
  if (!(request.body.name && request.body.number)) {
    return response
      .status(400)
      .send({ error: "The name or number is missing." });
  }

  const person = new Person({ ...request.body });
  /* if (persons.some((_person) => _person.name === person.name)) {
    return response
      .status(409)
      .send({ error: "The name already exists in the phonebook." });
  } */

  person.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

app.delete("/api/persons/:id", (request, response) => {
  persons = persons.filter((p) => p.id !== +request.params.id);
  response.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
