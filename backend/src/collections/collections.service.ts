import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { Collection } from './entities/collection.entity';

@Injectable()
export class CollectionsService {
  private collections: Collection[] = [
    {
      id: 1,
      nama: 'Nissan Skyline GT-R R34',
      kategori: 'Diecast',
      kondisi: 'MIB',
      harga: 250000,
      tanggalBeli: '2026-05-10',
      isRare: true,
    },
    {
      id: 2,
      nama: 'SHFiguarts Son Goku',
      kategori: 'Action Figure',
      kondisi: 'Loose',
      harga: 750000,
      tanggalBeli: '2026-08-21',
      isRare: false,
    },
  ];

  create(createDto: CreateCollectionDto): Collection {
    const isDuplicate = this.collections.some(
      (item) => item.nama.toLowerCase() === createDto.nama.toLowerCase(),
    );
    if (isDuplicate) {
      throw new ConflictException(
        `Koleksi dengan nama "${createDto.nama}" sudah ada di Vaultify`,
      );
    }

    const newItem: Collection = {
      id: Date.now(),
      nama: createDto.nama,
      kategori: createDto.kategori,
      kondisi: createDto.kondisi,
      harga: createDto.harga,
      tanggalBeli:
        createDto.tanggalBeli || new Date().toISOString().split('T')[0],
      isRare: createDto.isRare ?? false,
    };

    this.collections.push(newItem);
    return newItem;
  }

  findAll(): Collection[] {
    return this.collections;
  }

  findOne(id: number): Collection {
    const item = this.collections.find((c) => c.id === id);
    if (!item) {
      throw new NotFoundException(`Koleksi dengan ID #${id} tidak ditemukan`);
    }
    return item;
  }

  update(id: number, updateDto: UpdateCollectionDto): Collection {
    const index = this.collections.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Koleksi dengan ID #${id} tidak ditemukan`);
    }

    this.collections[index] = {
      ...this.collections[index],
      ...updateDto,
    };
    return this.collections[index];
  }

  remove(id: number): { message: string } {
    const index = this.collections.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Koleksi dengan ID #${id} tidak ditemukan`);
    }

    this.collections.splice(index, 1);
    return { message: `Koleksi dengan ID #${id} berhasil dihapus` };
  }
}