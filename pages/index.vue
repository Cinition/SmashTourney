<template>
	<div class="container">
		<div>
			<p class="title quicksand"><b>Welcome</b></p>
			<p class="subtitle montserrat">To the <b>Official</b> and <b>Annual</b></p>
			<p class="subtitle montserrat">Super Mega Smash New Years Worlds 2022 Tournament</p>
		</div>
		<img src="@/static/banner.jpg" alt="">
		<div class="signup">
			<p class="signup_title quicksand" >Signup here!</p>
			<!--Create sign up form here-->
			<div class="signup_form">
				<p class="montserrat" >Full Name</p>
				<input type="text" v-model="full_name" />
				<p class="montserrat" >Shortened Name</p>
				<input style="text-transform: uppercase;" type="text" v-model="short_name" maxlength="3" />
				<button @click="addPlayer">Add</button>
			</div>
			<hr>
			<div class="RegisteredPlayers">
				<p class="quicksand">Contendors</p>
				<div v-for="item in players">
					<p class="montserrat">{{item.full_name}}</p>
					<p class="montserrat">|</p>
					<p class="montserrat">{{item.short_name}}</p>
				</div>
			</div>
		</div>
		<a class="button quicksand" href="/groups">Start Tournament</a>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {player} from "~/assets/scripts/player";

export default Vue.extend({
	name: 'IndexPage',
	data() {
		return {
			id: 0,
			full_name: "",
			short_name: "",
		}
	},
	beforeCreate() {
		if( localStorage.getItem( "players" ) ) {
			this.$store.commit('players/reset');
		}
	},
	computed: {
		players() {
			return this.$store.state.players.players
		}
	},
	methods: {
		addPlayer() {
			let new_player        = new player();
			new_player.id         = this.id;
			new_player.full_name  = this.full_name;
			new_player.short_name = this.short_name.toUpperCase();
			this.$store.commit('players/addPlayer', new_player);
			this.full_name  = "";
			this.short_name = "";
			this.id++;
		}
	}
})
</script>

<style>

.container {
	height: 100%;
	width: 100%;
	padding: 125px 0 0 0;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: var(--Background);
}

img {
	height: 150px;
	border-radius: 10px;
	margin: 25px 0;
}

.title {
	text-align: center;
	font-size: 50px;
	color: var(--Primary);
	text-decoration: #FFFFFF underline;
	margin: 0 0 25px 0;
}

.subtitle {
	text-align: center;
	font-size: 30px;
	font-weight: 300;
	color: var(--Blank);
	margin: 0;
}

.signup {
	padding: 20px;
	background-color: var(--Primary);
	border-radius: 20px;
}

.signup hr {
	margin: 10px 0;
	border: 1px var(--Blank) solid;
}

.signup_title {
	text-align: center;
	font-size: 35px;
	font-weight: 300;
	color: var(--Shade);
	margin: 0 0 15px 0;
}

.signup_form {
	display: flex;
	width: 350px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.signup_form p {
	margin: 0;
	font-weight: 300;
}

.signup_form input {
	margin-bottom: 10px;
	width: 250px;
	height: 30px;
	border: 2px var(--Shade) solid;
	border-radius: 5px;
	background-color: var(--Primary);
	text-align: center;
	font-size: 25px;
}

.signup_form button {
	margin: 10px 0 0 0;
	width: 100px;
	font-weight: 300;
	padding: 8px;
	font-size: 15px;
	background-color: var(--Shade);
	border-radius: 10px;
	border: none;
	color: var(--Blank);
	text-decoration: none;
}

.RegisteredPlayers {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.RegisteredPlayers p {
	text-align: center;
	margin: 0 0 5px 0;
	font-size: 20px;
	color: var(--Shade);
}

.RegisteredPlayers div {
	background-color: var(--Shade);
	border-radius: 15px;
	margin: 5px 55px;
	padding: 12px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

.RegisteredPlayers div p {
	color: var(--Blank);
	margin: 0;
	font-size: 15px;
	font-weight: 300;
}

.button {
	padding: 20px;
	font-size: 20px;
	font-weight: 300;
	background-color: #CBAC57;
	border-radius: 20px;
	color: var(--Shade);
	text-decoration: none;
	margin: 25px 0;
}

</style>
