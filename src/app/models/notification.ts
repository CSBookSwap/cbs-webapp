export interface Notification {
  message: string;
  type: NotificationType;
  duration: number;
}

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning'
}
