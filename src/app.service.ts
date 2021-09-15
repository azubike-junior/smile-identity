import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  private axiosInstance = axios.create({
    baseURL: 'https://testapi.smileidentity.com/v2/verify_async',
    params: {
      api_key: '501933d8-1720-48a9-8dd5-d349ee6bb053'
    }
  })

  async smileValidator(user_id: string, id_type: string, id_number: string) {
    try {
      const date = new Date()
      const timestamp = date.getTime()
      await this.axiosInstance.post('/',
        {
          partner_id: '1535',
          sec_key: 'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FDcDluZVYxSWtHaHBrSW12ZnJEZVhGcUErRgo3VlNRZFpNNnQ0aHVPMnFpdnArOUxiYjQyeVlhZjJ2UFBTbi9tYWNWS001cGNwbmt3S21Wc0ExTSthd0loRHRTCk9RSzJRVnJwdStKTlpPam1HTndtTFIxU2NUTVdFQ2x2d2lnRTZkTGJ5Mnh5NDhudkdQNUFBYjB6aXd4MStIcXYKdnd0RXRzM1pnYVZyWkdJVVh3SURBUUFCCi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQo=',
          timestamp,
          country: 'NG',
          id_type,
          id_number,
          callback_url: "example.webhook.com",
          firstname: 'azubike',
          lastname: 'orji',
          partner_params: { job_id: 'jsnsnsjnsjsjnsjn', user_id }
        }
      )
      
    } catch (e) {
      console.log(e);
    }
  }
}
