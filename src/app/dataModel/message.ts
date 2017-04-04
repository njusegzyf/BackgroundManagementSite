export interface IMessage {
  title: string;
  content: string;
  author: string;
  email: string;
  tel: string;
  uploadTime: Date;
  isReplied: boolean;
}

export class MessageBase implements IMessage {
  title: string;
  content: string;
  author: string;
  email: string;
  tel: string;
  uploadTime: Date;
  isReplied: boolean;

  constructor(
    title: string,
    content: string,
    author: string,
    email: string,
    tel: string = '',
    uploadTime: Date = new Date(),
    isReplied: boolean = false) {

    this.title = title;
    this.content = content;
    this.author = author;
    this.email = email;
    this.tel = tel;
    this.uploadTime = uploadTime;
    this.isReplied = isReplied;
  }
}
