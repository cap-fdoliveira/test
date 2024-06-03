import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { InternalAxiosRequestConfig } from 'axios'

@Injectable()
export class AppService {
  private readonly jwtToken: string

  constructor(private readonly httpService: HttpService) {
    this.jwtToken = process.env.INTERMEDIATE_AUTH

    this.httpService.axiosRef.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.headers['Authorization'] = `Bearer ${this.jwtToken}`
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }

  getHttpService(): HttpService {
    return this.httpService
  }
}
