<template>
    <nav>
        <input id="nav-toggle" type="checkbox">
        <div class="logo"><router-link to="/">Site name</router-link></div>
        <ul class="links">
            <li :class ="navigation.about?'active': ''"><router-link to ="/">About me</router-link></li>
            <li :class ="navigation.goals?'active': ''"><router-link to ="/goals">Goals</router-link></li>
            <li :class ="navigation.food?'active': ''"><router-link to ="/food">Food</router-link></li>
        </ul>
        <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>
    </nav>
</template>
<script>
import M from 'minimatch'
    export default{
        name: "Navigation",
        data(){
            return{
                navigation:{
                    about: true,
                    goals: false,
                    food: false,
                }
            }
        },
        watch:{
            $route(to, from){
				for (const property in this.navigation){
					property == to.name.toLowerCase() ? (this.navigation[property] = true) : (this.navigation[property] = false);
				}
            }
        }
    }
</script>
<style scoped>

nav {
	position: fixed;
	z-index: 10;
	left: 0;
	right: 0;
	top: 0;
	padding: 0 5%;
	height: var(--nav-height);
	background-color: var(--nav-color);
}
nav .logo {
	float: left;
	height: 100%;
	display: flex;
	align-items: center;
	font-size: 36px;
    font-weight:bolder;
	/* color: var(--logo-color); */
}

nav .logo a{
    text-decoration: none;
    color: var(--logo-color);
}

nav .links {
	float: right;
	padding: 0;
	margin: 0;
	height: 100%;
	display: flex;
	align-items: center;
}
nav .links li {
	list-style: none;
}
nav .links a {
	display: block;
	padding: 1em;
	font-size: 24px;
	font-weight: bold;
	color: var(--nav-link-color);
	text-decoration: none;
    transition: 0.2s;
}
#nav-toggle {
	position: absolute;
	top: -100px;
}
nav .icon-burger {
	display: none;
	position: absolute;
	right: 5%;
	top: 50%;
	transform: translateY(-50%);
}
nav .icon-burger .line {
	width: 30px;
	height: 5px;
	background-color: var(--nav-link-color);
	margin: 5px;
	border-radius: 3px;
	transition: all .3s ease-in-out;
}
nav .links .active a{
    color: var(--nav-selectedlink-color);
}
nav .links a:hover{
    transform: translateY(-5px);
}
@media screen and (max-width: 768px) {
	nav .logo {
		float: none;
		width: auto;
		justify-content: center;
	}
	nav .links {
		float: none;
		position: fixed;
		z-index: 9;
		left: 0;
		right: 0;
		top: var(--nav-height);
		bottom: 100%;
		width: auto;
		height: auto;
		flex-direction: column;
		justify-content: space-evenly;
		background-color: var(--drop-down-nav-color);
		overflow: hidden;
		box-sizing: border-box;
		transition: all .5s ease-in-out;
	}
	nav .links a {
		font-size: 20px;
	}
	nav :checked ~ .links {
		bottom: 0;
	}
	nav .icon-burger {
		display: block;
	}
	nav :checked ~ .icon-burger .line:nth-child(1) {
		transform: translateY(10px) rotate(225deg);
	}
	nav :checked ~ .icon-burger .line:nth-child(3) {
		transform: translateY(-10px) rotate(-225deg);
	}
	nav :checked ~ .icon-burger .line:nth-child(2) {
		opacity: 0;
	}
	
}

</style>