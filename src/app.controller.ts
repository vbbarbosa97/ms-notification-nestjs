import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern('task_notification')
  public taskNotification(data: any) {
    console.log(data);
  }
}
