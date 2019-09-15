import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {environment} from '../../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Player} from '../models/player';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private playerRef: AngularFirestoreDocument<Player>;

  constructor(
      private db: AngularFirestore,
      private navCtrl: NavController,
  ) {
    this.playerRef = this.db.doc<Player>('games/:id');
  }
  getPlayerObservable(): Observable<Player> {
    return this.playerRef.valueChanges();
  }
  savePlayer(player: Player) {
    this.playerRef.set(player);
  }
  editPlayer(player: any) {
    this.playerRef.update(player);
  }
}
