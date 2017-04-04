import { IMessage, MessageBase } from '../dataModel/message';

const LONG_MESSAGE_CONTENT: string =
`This article describes a lightweight class that handles free memory block management to accommodate variable-size allocation requests.
It is used by Diligent Engine to handle descriptor heap allocations, which will be covered in subsequent posts.
The class keeps track of free blocks of memory, and facilitates allocation by finding the smallest block that provides enough space.
Deallocated chunks of memory are merged with the existing free blocks. Runtime complexity is logarithmic with respect to the number of blocks for both allocation and deallocation.`

export const MOCK_MESSAGES: IMessage[] =
  [
    new MessageBase(
      'title',
      'content',
      'author',
      'email',
      'tel'
    ),
    new MessageBase(
      'NHibernate – Introduction, configuration & CRUD with MVC',
      'This practice demonstrates the basics of NHibernate and shows how to integrate NHibernate into .Net & MVC environment with an example CRUD application',
      'The Daily Build',
      'zhangyifan890508@msn.com',
      '1000-000-0000'
    ),
    new MessageBase(
      'NHibernate – Introduction, configuration & CRUD with MVC',
      LONG_MESSAGE_CONTENT,
      'The Daily Build',
      'zhangyifan890508@msn.com',
      '1000-000-0000'
    )
  ];
