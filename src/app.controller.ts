import { MailerService } from '@nestjs-modules/mailer';
import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

export type NotificationDTO = {
  email: string;
  startAt: Date;
  endAt: Date;
  name: string;
  title: string;
  description: string;
};

@Controller()
export class AppController {
  constructor(private mailerService: MailerService) {}

  @EventPattern('task_notification')
  public async taskNotification(data: NotificationDTO) {
    await this.mailerService.sendMail({
      to: data.email,
      subject: 'Notificação da tarefa',
      from: 'taskmanager@nestjscurso.com.br',
      text: `Olá ${data.name}! Você tem a atividade ${data.title} que se inicia em ${data.startAt} e finaliza ${data.endAt}`,
    });
  }
}
