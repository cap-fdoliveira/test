import { Injectable } from '@nestjs/common'
import { AppService } from 'src/app.service'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class EventsService {
  constructor(private readonly appService: AppService) {}

  async getEvents() {
    const httpService = this.appService.getHttpService()
    console.log(process.env.INTERMEDIATE_API)
    try {
      const response = await firstValueFrom(
        httpService.get(
          `${process.env.INTERMEDIATE_API}/eventos/dados?produto=9&evento=1038`,
        ),
      )
      console.log(response.data)
      return response.data
    } catch (error) {
      return error.message
    }
  }
}
