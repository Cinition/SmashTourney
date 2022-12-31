export class player {
	id:         number;
	full_name:  string;
	short_name: string;
	kills:      number;
	deaths:     number;
	score:      number;

	constructor() {
		this.id         = 0;
		this.full_name  = "";
		this.short_name = "";
		this.kills      = 0;
		this.deaths     = 0;
		this.score      = 0;
	}
}
