import { Client } from 'src/app/shared/models/client.model';

export const fakeClients: Client[] = [
  new Client({
id : 'id1',
name : 'OZZY',
email : 'ozzy@gmail.com'
  }),
   new Client({
id : 'id2',
name : 'SHARON',
email : 'sharon@gmail.com'
   })
 ];
