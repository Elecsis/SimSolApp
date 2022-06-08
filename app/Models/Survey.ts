import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Survey extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public question_1: string

  @column()
  public question_2: string

  @column()
  public question_3: string

  @column()
  public question_4: string

  @column()
  public question_5: string
}
