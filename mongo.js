const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://fullstack:${password}@cluster0.ublay.mongodb.net/phonebook?retryWrites=true`;
mongoose.connect(url);

const entrySchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Entry = mongoose.model("Entry", entrySchema);

if (process.argv.length === 3) {
  Entry.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((entry) => {
      console.log(entry.name, entry.number);
    });
    mongoose.connection.close();
  });
} else {
  const name = process.argv[3];
  const number = process.argv[4];

  const entry = new Entry({
    name: name,
    number: number,
  });

  entry.save().then((result) => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
}
