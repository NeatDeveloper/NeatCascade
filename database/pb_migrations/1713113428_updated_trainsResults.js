/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zdkiikegk65yqw1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d2omcuaw",
    "name": "childAge",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5a8jjwmj",
    "name": "childGrade",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zdkiikegk65yqw1")

  // remove
  collection.schema.removeField("d2omcuaw")

  // remove
  collection.schema.removeField("5a8jjwmj")

  return dao.saveCollection(collection)
})
