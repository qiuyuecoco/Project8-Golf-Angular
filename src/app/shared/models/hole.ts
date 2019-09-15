export class Hole {
    constructor(
        public holeNum: string,
        public holeScore: number
    ) {}
    setScore(score) {
        this.holeScore = score;
        console.log(this);
    }
}
