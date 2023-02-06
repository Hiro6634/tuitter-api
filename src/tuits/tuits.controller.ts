import { Controller, Get, Param, Post, Patch, Delete, Body, HttpCode, HttpStatus, Query } from '@nestjs/common';

@Controller('tuits')
export class TuitsController {
    @Get()
    getTuits(@Query() filterQuery): string{
        const {searchTerm, orderBy} = filterQuery;

        return `All ${searchTerm} tuits order by ${orderBy}`;
    }

    @Get(':id')
    getTuit(@Param('id') id: string): string{
        return `Your tuit id is ${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    createTuit(@Body('message') message: string): string{
      return `Yout tuit was: ${message}`;
    }  

    @Patch(':id')
    updateTuit(@Param('id') id: string): string{
      return `The tuit ${id} was updated`;
    }  

    @Delete(':id')
    deleteTuit(@Param('id') id: string, @Body() tuit): string{
        return `The tuit ${id} was deleted`;
    }  
}
 