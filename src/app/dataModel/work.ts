export interface IWork<TId> {
  readonly _id: TId;
  name: String;
  sourcePath: String;
  description: String;
  author: TId;
  uploadTime: Date;
  upCount: Number;
}

export class WorkBase<TId> implements IWork<TId> {
  _id: TId;
  name: String;
  sourcePath: String;
  description: String;
  author: TId;
  uploadTime: Date;
  upCount: Number;

  constructor(
    id: TId,
    name: String,
    sourcePath: String,
    description: String,
    author: TId,
    uploadTime: Date = new Date(),
    upCount: Number = 0) {

    this._id = id;
    this.name = name;
    this.sourcePath = sourcePath;
    this.description = description;
    this.author = author;
    this.uploadTime = uploadTime;
    this.upCount = upCount;
  }
}
