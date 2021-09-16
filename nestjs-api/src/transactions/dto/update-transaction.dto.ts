import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDto } from './create-transaction.dto';

// NÃO ESTÁ SENDO UTILIZADO.
// Mantido apenas estudos.
export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}
