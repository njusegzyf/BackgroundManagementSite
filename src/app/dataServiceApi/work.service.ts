import { IWork } from '../dataModel/work';

/**
 * @template TWorkSet Represents a set of `IWork`s.
 */
export interface IWorkService<TId, TWork extends IWork<any>, TWorkSet> {

  getAllAsync(): Promise<TWorkSet>;

  // getAll(): TWorkSet;

  getByIdAsync(id: TId): Promise<TWork>;

  // getById(id: TId): TWork;

  saveAsync(item: TWork): Promise<TWork>;

  deleteAsync(item: TWork): Promise<boolean>;
}
