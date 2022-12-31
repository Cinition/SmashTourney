<template>
	<div>
		<div>
			<h1><b>Welcome</b></h1>
			<h2>To the <b>Official</b> and <b>Annual</b></h2>
			<p>Super Mega Smash New Years Worlds 2022 Tournament</p>
		</div>
		<div>
			<h3>Signup here!</h3>
			<!--Create sign up form here-->
			<div class="SignupForm">
				<input type="text" v-model="full_name" />
				<input type="text" v-model="short_name" maxlength="3" />
				<button @click="addPlayer">Add</button>
			</div>
			<div class="RegisteredPlayers">
				<div v-for="item in players">
					<p>{{item.short_name}}</p>
				</div>
			</div>
		</div>
		<a href="/groups">Start Tournament</a>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
