import { Controller, Get } from '@nestjs/common';

@Controller('tuits')
export class TuitsController {
    @Get()
    getTuits(){
        return 'Hello World from Tuitter';
    }
}
 