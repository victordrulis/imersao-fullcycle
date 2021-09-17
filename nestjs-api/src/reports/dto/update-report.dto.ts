// import { PartialType } from '@nestjs/mapped-types';
// import { CreateReportDto } from './create-report.dto';
import { IsString, IsNotEmpty, IsIn, MaxLength } from 'class-validator';
import { ReportStatus, ReportStatusList } from '../entities/report.entity';

// extends PartialType(CreateReportDto)
export class UpdateReportDto {

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  file_url: string;

  @IsIn(ReportStatusList)
  @IsNotEmpty()
  status: ReportStatus;

}
