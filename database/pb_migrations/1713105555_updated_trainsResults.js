/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zdkiikegk65yqw1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vup8wut9",
    "name": "queue",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zdkiikegk65yqw1")

  // remove
  collection.schema.removeField("vup8wut9")

  return dao.saveCollection(collection)
})
