import { Controller, Get, Param, Post, Patch, Delete, Body, Query } from '@nestjs/common';
import { CreateTuitDto, UpdateTuitDto } from './dto';
import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {
    constructor(private readonly tuitService: TuitsService){ }

    @Get()
    getTuits(@Query() filterQuery): Tuit[]{
        const {searchTerm, orderBy} = filterQuery;

        return this.tuitService.getTuits();
    }

    @Get(':id')
    getTuit(@Param('id') id: number): Tuit{
        return this.tuitService.getTuit(id);
    }

    @Post()
    createTuit(@Body() message: CreateTuitDto): void{
      console.log(message instanceof CreateTuitDto);
      return this.tuitService.createTuit(message);
    }  

    @Patch(':id')
    updateTuit(@Param('id') id: number, @Body() tuit: UpdateTuitDto){
      return this.tuitService.updateTuit(id, tuit);
    }  

    @Delete(':id')
    deleteTuit(@Param('id') id: number){
        return this.tuitService.removeTuit(id);
    }  
}
 