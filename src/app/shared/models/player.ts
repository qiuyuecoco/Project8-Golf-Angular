import {Hole} from './hole';

export class Player {
    constructor(
        public name: string,
        public id: number,
        public holes: Array<Hole>
    ) {}
    addHoles(playerId, holeNum) {
        const hole = new Hole(holeNum, playerId);
        // @ts-ignore
        this.holes.push(hole);

    }
}
