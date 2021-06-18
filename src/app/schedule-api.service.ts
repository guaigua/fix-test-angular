import {
  InMemoryDbService,
  RequestInfo,
  ResponseOptions,
  STATUS,
} from 'angular-in-memory-web-api';
import { schedules, channels } from './fake-api';

export class ScheduleAPIService implements InMemoryDbService {
  private schedules: any = [];

  constructor() {
    this.schedules = schedules;
  }

  createDb() {
    return {
      schedules: this.schedules,
      channels,
    };
  }

  post(reqInfo: RequestInfo) {
    const collectionName = reqInfo.collectionName;
    console.log('post::', collectionName);

    if (collectionName === 'schedules') {
      return this.createSchedule(reqInfo);
    }

    return undefined;
  }

  private createSchedule(reqInfo) {
    const body = reqInfo.utils.getJsonBody(reqInfo.req);

    console.log({ body });
    this.schedules.data.push(scheduleFactory(body));

    const options: ResponseOptions = {
      body: { data: body },
      status: STATUS.OK,
      headers: reqInfo.headers,
      url: reqInfo.url,
    };

    return reqInfo.utils.createResponse$(() => options);
  }
}

export const scheduleFactory = (data) => ({
  id: Math.floor(Math.random() * 1000),
  created_at: new Date(),
  status: 'waiting',
  now: false,
  date: data.date,
  caption: 'Lorem ipsom',
  ig_code: null,
  is_history: false,
  is_album: false,
  is_igtv: false,
  is_reels: false,
  ig_image_url: null,
  type: data.type,
  media_type: 'photo',
  image: {
    id: Math.floor(Math.random() * 1000),
    filename: data.image.name,
    is_album: false,
    url:
      'https://media.postgrain.com/uploads/images/2021/03/30/46519/9dbfcf76d9e30edbae8faef13f2ac700236ae25e.jpg',
    type: null,
  },
  channel: {
    id: data.channel.id,
    username: data.channel.user.username,
    profile_pic: data.channel.user.profile_pic,
  },
  socials: [],
});
