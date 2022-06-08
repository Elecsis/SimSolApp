import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Surveys extends BaseSchema {
  protected tableName = 'surveys'

  public async up () {
    this.schema.createTable(this.tableName, (table)=>{
      table.increments('id').primary()
      table.string('question_1', 220 ).notNullable()
      table.string('question_2', 220 ).notNullable()
      table.string('question_3', 220 ).notNullable()
      table.string('question_4', 220 ).notNullable()
      table.string('question_5', 220 ).notNullable()
      table.timestamps(true,true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName);
  }
}
