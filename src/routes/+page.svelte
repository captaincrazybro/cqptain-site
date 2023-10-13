<script lang="ts">
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
        width: 30%;
    }
    .descript-container {
        width: 100%;
    }
    .resume-icon {
        color: black;
    }
    .resume-icon:hover {
        color: rgb(65, 65, 65);
        cursor: pointer;
    }
</style>

<div class="home-container">
    <div class="descript-container">
        <h1>Welcome to Cqptain's Website</h1>
        <p>
            Hello! My name is Levi and I am an aspiring Computer Engineering student at High Point University. <br />
            My internet alias is Cqptain with a q instead of the a, the first a not the second a; the second a is just a regular a. And the c is usually capitalized; although sometimes it isn't. <br />
            <br />
            I am pursuing a degree in Computer Engineering with a Minor in Physics. <br />
            Prior to the start of my degree, I had also done a lot of programming and some Computer/Electrical Engineering activities. <br />
            Bellow is a link to download my resume.
        </p>
        <a class="resume-icon" href="https://drive.google.com/file/d/1A9kZnF01-w7NU4LzWkr2lXz8PSZmXIFd/view?usp=sharing">
            <Fa icon={faFileArrowDown} size="5x"/>
        </a>
        <br />
        <br />
        <br />
        <br />
        <div>Logos designed using <a href="https://www.designevo.com/" title="Free Online Logo Maker">DesignEvo free logo designer</a></div>
    </div>
    <div class="picture-container">
        <img src="/logo.png" alt="Logo" />
    </div>
</div>