import { player } from "../assets/scripts/player"

export const state = () => ({
	players: Array<player>()
})

export const mutations = {
	addPlayer( state: any, _player: player ) {
		state.players.push( _player );
		localStorage.setItem( "players", JSON.stringify( state.players ) );
	},
	getPlayer( state: any, _id: number ) {
		for(let p of state.players) {
			if( p.id == _id ) {
				return p;
			}
		}
	},
	reset( state: any ) {
		if( localStorage.getItem( "players" ) != "[]" )
		{
			state.players = JSON.parse( localStorage.getItem( "players" ) || "[]" );
		}
	}
}
