
module.exports =
  schema: true
  tableName: 'things'
  attributes:
    id:
      type: 'string'
      unique: true
      primaryKey: true
      columnName: 'id'
      autoIncrement: true
    name:
      type: 'string'
      required: true
      columnName: 'name'
    money:
      type: 'float'
      required: true
      columnName: 'money'
      defaultsTo: 0.0
    toJSON: () =>
      obj = this.toObject
