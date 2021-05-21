export class Quote {
    showDescription!: boolean;
    constructor(public author: string, public quote: string, public completeDate: Date, public upvote: number, public downvote: number) {
        this.showDescription = false;
    }
}
