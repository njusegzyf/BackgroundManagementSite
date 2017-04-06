import { ObjectID } from 'mongodb';

import { IWork, WorkBase } from '../dataModel/work';
import { IWorkService } from '../dataServiceApi/work.service';

export class WorkMockService implements IWorkService<ObjectID, IWork<ObjectID>, IWork<ObjectID>[]> {

  mockWorks: WorkBase<ObjectID>[] = [];

  constructor() {
    let arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push(i);
    }
    this.mockWorks = arr.map((n: number) => {
      return new WorkBase(null, `work name ${n}`, `source path ${n}`, `description ${n}`, null);
    });
  }


  getAllAsync(): Promise<IWork<ObjectID>[]> {
    return Promise.resolve(this.mockWorks);
  }

  getAllSync(): IWork<ObjectID>[] {
    return this.mockWorks;
  }

  getByIdAsync(id: ObjectID): Promise<IWork<ObjectID>> {
    return this.getAllAsync()
      .then(res => res.filter(work => work._id === id)[0]);
  }

  saveAsync(item: IWork<ObjectID>): Promise<IWork<ObjectID>> {
    return Promise.resolve(item);
  }

  deleteAsync(item: IWork<ObjectID>): Promise<boolean> {
    let index = this.mockWorks.findIndex((v) => { return v.name === item.name; });
    if (index > 0) {
      this.mockWorks = this.mockWorks.splice(index);
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }
}
