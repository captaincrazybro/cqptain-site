<script>
    import Fa from 'svelte-fa'
    import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
</script>

<style>
    img {
        float: right;
        display: inline-flex;
        width: 75%;
    }
    .home-container {
        display: flex;
        width: 100%;
    }
    .picture-container {
        width: 15%;
    }
    .descript-container {
        width: 85%;
    }
</style>

<div class="home-container">
    <div class="descript-container">
        <h1>Welcome to Cqptain's Website</h1>
        <p>
            Hello! My name is Levi and I am an aspiring Computer Engineering student at High Point University. <br />
            My intern alias is Cqptain with a q instead of the a, the first a not the second a; the second a is just a regular a. And the c is usually capitalized; although sometimes it isn't. <br />
            <br />
            All jokes aside, I am pursuing a degree in Computer Engineering with a Minor in Physics. <br />
            Prior to the start of my degree, I had also done a lot of programming and some Computer/Electrical Engineering activities. <br />
            Bellow is a link to download my resume.
        </p>
        <a href="https://drive.google.com/file/d/1iIYNVWcOoEcKmzvHrUGhCZYF3YIc3G4q/view?usp=sharing">
            <Fa icon={faFileArrowDown} size="5x" color="black"/>
        </a>
    </div>
    <div class="picture-container">
        <img src="https://i.imgur.com/RMKjY1H.jpg" alt="professional-shot" />
    </div>
</div>