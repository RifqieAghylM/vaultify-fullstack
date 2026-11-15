import {
  IsString,
  MinLength,
  IsIn,
  IsNumber,
  Min,
  IsDateString,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateCollectionDto {
  @IsString()
  @MinLength(3, { message: 'Nama koleksi minimal 3 karakter' })
  nama: string;

  @IsString()
  @IsIn(['Diecast', 'Action Figure', 'Trading Card'], {
    message: 'Kategori harus Diecast, Action Figure, atau Trading Card',
  })
  kategori: string;

  @IsString()
  @IsIn(['MIB', 'Near Mint', 'Loose'], {
    message: 'Kondisi harus MIB, Near Mint, atau Loose',
  })
  kondisi: string;

  @IsNumber()
  @Min(0, { message: 'Harga tidak boleh negatif' })
  harga: number;

  @IsDateString({}, { message: 'Format tanggal harus YYYY-MM-DD' })
  @IsOptional()
  tanggalBeli?: string;

  @IsBoolean()
  @IsOptional()
  isRare?: boolean;
}