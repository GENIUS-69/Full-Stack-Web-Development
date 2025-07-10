# MongoDB Commands for Beginner Developers

This document provides essential MongoDB commands with brief descriptions for beginner developers.

## 1. Start MongoDB Shell
```
mongo
```
*Starts the MongoDB shell.*

## 2. Show Databases
```
show dbs
```
*Lists all databases.*

## 3. Create/Use a Database
```
use myDatabase
```
*Switches to (or creates) a database named `myDatabase`.*

## 4. Show Collections
```
show collections
```
*Lists all collections in the current database.*

## 5. Create a Collection
```
db.createCollection("myCollection")
```
*Creates a new collection named `myCollection`.*

## 6. Insert Documents
```
db.myCollection.insertOne({ name: "Alice", age: 25 })
db.myCollection.insertMany([{ name: "Bob" }, { name: "Charlie" }])
```
*Inserts one or multiple documents into `myCollection`.*

## 7. Find Documents
```
db.myCollection.find()
db.myCollection.find({ age: 25 })
```
*Finds all documents or those matching a query.*

## 8. Update Documents
```
db.myCollection.updateOne({ name: "Alice" }, { $set: { age: 26 } })
db.myCollection.updateMany({}, { $set: { active: true } })
```
*Updates one or multiple documents.*

## 9. Delete Documents
```
db.myCollection.deleteOne({ name: "Bob" })
db.myCollection.deleteMany({ age: { $lt: 20 } })
```
*Deletes one or multiple documents.*

## 10. Drop Collection or Database
```
db.myCollection.drop()
db.dropDatabase()
```
*Deletes a collection or the current database.*

## 11. Count Documents
```
db.myCollection.countDocuments()
```
*Counts the number of documents in a collection.*

## 12. Sort and Limit Results
```
db.myCollection.find().sort({ age: 1 }).limit(5)
```
*Sorts results by age (ascending) and limits to 5 documents.*

## 13. Get Distinct Values for a Field
```
db.myCollection.distinct("fieldName")
```
*Returns an array of unique values for the specified field in `myCollection`.*

## 14. List All Collections in the Database
```
db.getCollectionNames()
```
*Lists all collection names in the current database.*

## 15. List All Fields in a Collection (Sample-Based)
```
db.myCollection.aggregate([
  { $project: { fieldNames: { $objectToArray: "$$ROOT" } } },
  { $unwind: "$fieldNames" },
  { $group: { _id: null, fields: { $addToSet: "$fieldNames.k" } } }
])
```
*Aggregates and lists all unique field names found in documents of `myCollection` (sample-based, not guaranteed exhaustive for very large collections).*
---
These commands cover the basics for working with MongoDB as a beginner developer.