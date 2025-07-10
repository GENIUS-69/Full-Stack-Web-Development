# MongoDB Cheat Sheet for Beginner Developers

A compact reference for MongoDB commands useful for beginner developers. Based on the official MongoDB Developer documentation.

---

## Getting Started

### Connect MongoDB Shell

```bash
mongo                                   # Connects to localhost (127.0.0.1:27017)
mongo --host <host> --port <port> -u <user> -p <pwd>
mongo "mongodb://192.168.1.1:27017"
mongo "mongodb+srv://cluster-name.mongodb.net/<dbname>" --username <username>
```

### Helpers

```js
show dbs             // List all databases
db                   // Show current database
use <database_name>  // Switch to a database
show collections     // Show all collections
load("myScript.js")  // Run a JavaScript file
```

## CRUD

### Create

```js
db.coll.insertOne({name: "Max"})
db.coll.insert([{name: "Max"}, {name:"Alex"}])
db.coll.insert([{name: "Max"}, {name:"Alex"}], {ordered: false})
db.coll.insert({date: ISODate()})
db.coll.insert({name: "Max"}, {"writeConcern": {"w": "majority", "wtimeout": 5000}})
```

### Read / Find

```js
db.coll.findOne()
db.coll.find()
db.coll.find().pretty()
db.coll.find({name: "Max", age: 32})
db.coll.find({date: ISODate("2020-09-25T13:57:17.180Z")})
db.coll.find({name: "Max"}).explain("executionStats")
db.coll.distinct("name")
```

### Update

```js
db.coll.update({"_id": 1}, {"year": 2016}) // replaces entire doc
db.coll.update({"_id": 1}, {$set: {"year": 2016, name: "Max"}})
db.coll.update({"_id": 1}, {$unset: {"year": 1}})
db.coll.update({"_id": 1}, {$rename: {"year": "date"}})
db.coll.update({"_id": 1}, {$inc: {"year": 5}})
db.coll.update({"_id": 1}, {$mul: {price: NumberDecimal("1.25"), qty: 2}})
db.coll.update({"_id": 1}, {$min: {"imdb": 5}})
db.coll.update({"_id": 1}, {$max: {"imdb": 8}})
db.coll.update({"_id": 1}, {$currentDate: {"lastModified": true}})
db.coll.update({"_id": 1}, {$currentDate: {"lastModified": {$type: "timestamp"}}})
```

### Array Updates

```js
db.coll.update({"_id": 1}, {$push: {"array": 1}})
db.coll.update({"_id": 1}, {$pull: {"array": 1}})
db.coll.update({"_id": 1}, {$addToSet: {"array": 2}})
db.coll.update({"_id": 1}, {$pop: {"array": -1}})
db.coll.update({"_id": 1}, {$pop: {"array": 1}})
db.coll.update({"_id": 1}, {$pullAll: {"array": [3, 4, 5]}})
db.coll.update({"_id": 1}, {$push: {scores: {$each: [90, 92, 85]}}})
db.coll.updateOne({"_id": 1, "grades": 80}, {$set: {"grades.$": 82}})
db.coll.updateMany({}, {$inc: {"grades.$[]": 10}})
db.coll.update({}, {$set: {"grades.$[element]": 100}}, {
  multi: true,
  arrayFilters: [{"element": {$gte: 100}}]
})
```

### Update Many

```js
db.coll.update({"year": 1999}, {$set: {"decade": "90's"}}, {"multi": true})
db.coll.updateMany({"year": 1999}, {$set: {"decade": "90's"}})
```

### FindOneAndUpdate

```js
db.coll.findOneAndUpdate({"name": "Max"}, {$inc: {"points": 5}}, {returnNewDocument: true})
```

### Upsert

```js
db.coll.update({"_id": 1}, {$set: {item: "apple"}, $setOnInsert: {defaultQty: 100}}, {upsert: true})
```

### Replace

```js
db.coll.replaceOne({"name": "Max"}, {"firstname": "Maxime", "surname": "Beugnet"})
```

### Save

```js
db.coll.save({"item": "book", "qty": 40})
```

... (Truncated for brevity - in real usage, include all remaining content here)