import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private db: AngularFirestore) { }

  getTodos() {
    return this.db.collection('productos').snapshotChanges().pipe(map (productos => {
      return productos.map(a => {
        const data = a.payload.doc.data() as Todo;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

}
