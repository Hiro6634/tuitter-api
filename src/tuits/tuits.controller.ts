import { Controller, Get, Param } from '@nestjs/common';

@Controller('tuits')
export class TuitsController {
    @Get()
    getTuits(){
        return 'Hello World from Tuitter';
    }

    @Get(':id')
    getTuit(@Param('id') id: string): string{
        return `Your tuit id is ${id}`;
    }
}
 