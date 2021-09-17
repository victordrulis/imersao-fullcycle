import {Model, Column, Default, Table, PrimaryKey, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Account } from 'src/accounts/entities/account.entity';


export enum ReportStatus {
  PENDING = 'pending',
  COMPLETE = 'complete',
  ERROR = 'error',
}

export const ReportStatusList: string[] = Object.values(ReportStatus);

@Table({
  tableName: 'reports',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Report extends Model {

  @PrimaryKey
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4})
  id: string;

  @Column({allowNull: false})
  start_date: Date;

  @Column({allowNull: false})
  end_date: Date;

  @Column
  file_url: string;

  @Default(ReportStatus.PENDING)
  @Column({allowNull: false})
  status: ReportStatus;

  @ForeignKey(() => Account)
  @Column({allowNull: false, type: DataType.UUID, defaultValue: DataType.UUIDV4})
  account_id: string;

  @BelongsTo(() => Account)
  acoount: Account;

}
