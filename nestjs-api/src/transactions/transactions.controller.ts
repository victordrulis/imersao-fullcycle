import { Controller, Get, Post, Body, UseGuards, Req
    // Patch, Param, Delete 
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TenantGuard } from 'src/tenant/tenant.guard';
// import { TenantService } from 'src/tenant/tenant/tenant.service';
// import { UpdateTransactionDto } from './dto/update-transaction.dto';

// Colocar em ordem seq: Primeiro autenticacao, depois extrair o tenant do token
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('transactions')
export class TransactionsController {

  constructor(
    private readonly transactionsService: TransactionsService,
    // Apenas para verificar no console.log
    // private tenantService: TenantService,
    ) {}

  // @Body() pra extrair o conteudo do body da requisição.
  // Para ativar a validação feita do DTO apenas neste controller, inserir o pipe -> @Body(new ValidationPipe)
  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll(@Req() request) {
    // Apenas para verificar no console.log
    // console.log(this.tenantService.tenant, request.user);
    return this.transactionsService.findAll();
  }

  // NÃO ESTÁ SENDO UTILIZADO.
  // Mantido apenas estudos.

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.transactionsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
  //   return this.transactionsService.update(+id, updateTransactionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.transactionsService.remove(+id);
  // }
}
