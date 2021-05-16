export class Quote {
    showDescription!: boolean;
  likes: number;
  dislikes: number;
    constructor(public author: string, public quote: string, public completeDate: Date, public upvote: number, public downvote: number) {
        this.showDescription = false;
    }
}
