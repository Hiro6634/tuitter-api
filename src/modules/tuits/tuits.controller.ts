import { Controller, Get, Param, Post, Patch, Delete, Body, Query } from '@nestjs/common';
import { CreateTuitDto, PaginationQueryDto, UpdateTuitDto } from './dto';
import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {
    constructor(private readonly tuitService: TuitsService){ }

    // @Get()
    // getTuits(@Query() filterQuery): Promise<Tuit[]>{
    //     const {searchTerm, orderBy} = filterQuery;

    //     return this.tuitService.getTuits();
    // }

    @Get()
    getTuits(@Query() pagination: PaginationQueryDto): Promise<Tuit[]>{
      return this.tuitService.getTuits(pagination);
    }

    @Get(':id')
    getTuit(@Param('id') id: number): Promise<Tuit>{
        return this.tuitService.getTuit(id);
    }

    @Post()
    createTuit(@Body() message: CreateTuitDto): Promise<Tuit>{
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
 