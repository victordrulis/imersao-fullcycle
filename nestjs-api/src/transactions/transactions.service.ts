import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
// import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {

  // Colocando InjectModel para uso da inversão de dependência
  constructor(@InjectModel(Transaction) private transactionModel: typeof Transaction) {

  }

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionModel.create(createTransactionDto);
  }

  findAll() {
    return this.transactionModel.findAll();
  }

  // Não serão utilizadas. Manitdo comentadas para estudos apenas.

  // findOne(id: number) {
  //   return `This action returns a #${id} transaction`;
  // }

  // update(id: number, updateTransactionDto: UpdateTransactionDto) {
  //   return `This action updates a #${id} transaction`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} transaction`;
  // }
}
