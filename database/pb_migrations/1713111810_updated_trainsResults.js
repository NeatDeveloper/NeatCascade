/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zdkiikegk65yqw1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w58xsrnc",
    "name": "sequence",
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
  collection.schema.removeField("w58xsrnc")

  return dao.saveCollection(collection)
})
