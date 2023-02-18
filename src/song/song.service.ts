import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './entities/song.entity';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song) private readonly songRepository: Repository<Song>,
  ) {}
  async create(createSongDto: Song): Promise<Song> {
    return await this.songRepository.save(createSongDto);
  }

  async findAll(): Promise<Song[]> {
    return this.songRepository.find();
  }
}
