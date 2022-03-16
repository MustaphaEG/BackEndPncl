# BackEndPncl
 
This small docs about the task
# Live task
**To start visit:** [Index Page](http://elkaisar.com:8080/).

The input is used for search 
Test Case `Sugar`

the out should be 
```
    1- Reducing sugars (Benedict's solution)
    2- State the structure of DNA in terms of the bases, sugar and phosphate groups found in each of their nucleotides
    3- Biological Molecules

```


# localhost

if you want to start the task at localhost you need to change database path in file `[DB/DB.js](https://github.com/MustaphaEG/BackEndPncl/blob/main/DB/DB.js).`

**To add Topics to database**
vist link `host:port/PrepareTopics` to prepare Topics 

vist link `host:port/PrepareQue` to prepare Questions


# DataBase Model
**Topics Schema**
```javascript
{
 _id: {
    type: String,
    required: true,
  },
  Path2Root: {
    type: Array,
    default: [],
  },
  keyWords: {
    type: Array,
    default: [],
  }
 }
```
**Document Sample**
```javascript
{
 "_id":"Identify the following ....",
 "Path2Root":[
   "Cell Structure and Organisation",
   "Identify the following ...."
   ],
   "keyWords":       ["Cell","Structure","and","Organisation","Identify",...."micrographs"]
}
````

**Questions Schema**
```javascript
{
 _id:{
    type: String
  },
  idTopic: {
    type: String,
    default: "Science",
  },
  annotation: {
    type: String
  }
 }
```
**Document Sample**
```javascript
{
  "_id":"Define and state the equation, ....",
  "idTopic":"Define and state the equation, .....",
  "annotation": "Define and state the equation, ....."
  "__v":0
}
```

For simplicity i used question annotaion as id and topic annotaion as id
id should be `int` on `ObjectId()`


