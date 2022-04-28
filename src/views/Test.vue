<script setup>

</script>

<template>
    <div class="welcome">

        <div class="loading">
            <span>加</span>
            <span>载</span>
            <span>中</span>
            <span>...</span>
        </div>
        <button class="btn2 btn-primary btn-ghost btn-shine">hover me</button>

        <button class="btn btn-pink btn-bubbles">Click Me</button>

        <div style="background: black;padding: 30px;width: 200px">
            <h1 class="glowIn">
                <span style="animation-delay: 0s;">H</span>
                <span style="animation-delay: 0.05s;">e</span><span style="animation-delay: 0.1s;">l</span>
                <span style="animation-delay: 0.15000000000000002s;">l</span><span style="animation-delay: 0.2s;">o</span>
                <span style="animation-delay: 0.25s;"> </span><span style="animation-delay: 0.30000000000000004s;">W</span>
                <span style="animation-delay: 0.35000000000000003s;">o</span><span style="animation-delay: 0.4s;">r</span>
                <span style="animation-delay: 0.45s;">l</span><span style="animation-delay: 0.5s;">d</span>
            </h1>
        </div>

        <div class="loading2"></div>

        <input type="checkbox" id="burger-toggle">
        <label for="burger-toggle" class="burger-menu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>
        <div class="overlay"></div>
    </div>
</template>

<style lang="less" scoped>

.welcome {
    color: #2c3e50;
    margin-top: 60px;
}

.loading {
    background: #547290;
    display: inline-block;
    padding: 14px 14px 6px;
    border-radius: 8px;
    box-shadow: 1px 1px 1px #ccc;

    span {
        color: white;
        animation: bounce 0.75s cubic-bezier(0.22, 0.61, 0.36, 1) infinite alternate;
        display: inline-block;
        transform: translate3d(0, 0, 0);
        margin-top: 0.5em;
        text-shadow: rgb(255 255 255 / 40%) 0 0 0.05em;
        font: normal 500 1rem 'Varela Round', sans-serif;

        &:nth-child(1) {
            animation-delay: 0s;
        }

        &:nth-child(2) {
            animation-delay: 0.0833333333s;
        }

        &:nth-child(3) {
            animation-delay: 0.1666666667s;
        }

        &:nth-child(4) {
            animation-delay: 0.25s;
        }

        &:nth-child(5) {
            animation-delay: 0.3333333333s;
        }

        &:nth-child(6) {
            animation-delay: 0.4166666667s;
        }

    }
}

@keyframes bounce {
    0% {
        transform: translate3d(0, 0, 0);
        text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
    }

    100% {
        transform: translate3d(0, -1em, 0);
        text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;
    }
}

.btn2 {
    --hue: 190;
    position: relative;
    padding: 1rem 3rem;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    background-color: hsl(var(--hue), 100%, 41%);
    border: 1px solid hsl(var(--hue), 100%, 41%);
    outline: transparent;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    transition: 0.25s;
}

.btn2:hover {
    background: hsl(var(--hue), 100%, 31%);
}

.btn-primary {
    --hue: 187;
}

.btn-ghost {
    color: hsl(var(--hue), 100%, 41%);
    background-color: transparent;
    border-color: hsl(var(--hue), 100%, 41%);
}

.btn-ghost:hover {
    color: white;
}

.btn-shine {
    color: white;
}

.btn-shine::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, hsla(var(--hue), 100%, 41%, 0.5), transparent);
    transform: translateX(-100%);
    transition: 0.6s;
}

.btn-shine:hover {
    background: transparent;
    box-shadow: 0 0 20px 10px hsla(var(--hue), 100%, 41%, 0.5);
}

.btn-shine:hover::before {
    transform: translateX(100%);
}

.btn {
    --hue: 190;
    --btn-bg-color: hsl(var(--hue), 100%, 50%);
    --btn-bg-color-darker: hsl(var(--hue), 100%, 45%);
    position: relative;
    padding: 0.75rem 1.5rem;
    margin: 1rem;
    font-size: 1rem;
    font-family: Lato, sans-serif;
    line-height: 1.5;
    color: white;
    text-decoration: none;
    background-color: var(--btn-bg-color);
    border: 1px solid var(--btn-bg-color);
    border-radius: 4px;
    box-shadow: 0 0.1px 0.7px rgba(233, 30, 99, 0.141), 0 0.1px 1.7px rgba(233, 30, 99, 0.202), 0 0.3px 3.1px rgba(233, 30, 99, 0.25), 0 0.4px 5.6px rgba(233, 30, 99, 0.298), 0 0.8px 10.4px rgba(233, 30, 99, 0.359), 0 2px 25px rgba(233, 30, 99, 0.5);
    outline: transparent;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    transition: 0.25s;
}

.btn-pink {
    --hue: 330;
}

.btn-bubbles {
    overflow: visible;
    transition: transform ease-in 0.1s, background-color ease-in 0.1s, box-shadow ease-in 0.25s;
}

.btn-bubbles::before {
    position: absolute;
    content: "";
    left: -2em;
    right: -2em;
    top: -2em;
    bottom: -2em;
    transition: ease-in-out 0.5s;
    background-repeat: no-repeat;
    background-image: radial-gradient(circle, transparent 20%, var(--btn-bg-color) 20%, transparent 30%), radial-gradient(circle, var(--btn-bg-color) 20%, transparent 20%), radial-gradient(circle, var(--btn-bg-color) 20%, transparent 20%), radial-gradient(circle, transparent 20%, var(--btn-bg-color) 20%, transparent 30%), radial-gradient(circle, transparent 20%, var(--btn-bg-color) 20%, transparent 30%), radial-gradient(circle, transparent 20%, var(--btn-bg-color) 20%, transparent 30%), radial-gradient(circle, transparent 20%, var(--btn-bg-color) 20%, transparent 30%), radial-gradient(circle, transparent 20%, var(--btn-bg-color) 20%, transparent 30%), radial-gradient(circle, var(--btn-bg-color) 20%, transparent 20%), radial-gradient(circle, var(--btn-bg-color) 20%, transparent 20%), radial-gradient(circle, transparent 20%, var(--btn-bg-color) 20%, transparent 30%), radial-gradient(circle, var(--btn-bg-color) 20%, transparent 20%), radial-gradient(circle, transparent 20%, var(--btn-bg-color) 20%, transparent 30%), radial-gradient(circle, transparent 20%, var(--btn-bg-color) 20%, transparent 30%), radial-gradient(circle, transparent 20%, var(--btn-bg-color) 20%, transparent 30%), radial-gradient(circle, transparent 20%, var(--btn-bg-color) 20%, transparent 30%);
    background-size: 18% 14%, 19% 12%, 10% 20%, 15% 11%, 19% 17%, 18% 12%, 19% 12%, 12% 16%, 16% 12%, 20% 14%, 11% 15%, 15% 20%, 19% 13%, 10% 11%, 12% 17%, 15% 17%;
    background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%, 65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%, 64% 70%, 80% 71%;
    animation: bubbles ease-in-out 0.75s forwards;
}

.btn-bubbles:active {
    transform: scale(0.95);
    background: var(--btn-bg-color-darker);
}

.btn-bubbles:active::before {
    animation: none;
    background-size: 0;
}

@keyframes bubbles {
    0% {
        background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%, 65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%, 64% 70%, 80% 71%;
    }
    50% {
        background-position: 10% 44%, 0% 20%, 15% 5%, 30% 0%, 42% 0%, 62% -2%, 75% 0%, 95% -2%, 0% 80%, 95% 55%, 7% 100%, 24% 100%, 41% 100%, 55% 95%, 68% 96%, 95% 100%;
    }
    100% {
        background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%, 100% -2%, -5% 80%, 100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%, 100% 100%;
        background-size: 0% 0%;
    }
}

.glowIn {
    color: white;
}

.glowIn span {
    animation: glow-in 0.8s both;
}

@keyframes glow-in {
    from {
        opacity: 0;
    }
    65% {
        opacity: 1;
        text-shadow: 0 0 25px white;
    }
    75% {
        opacity: 1;
    }
    to {
        opacity: 0.7;
    }
}

.loading2 {
    position: relative;
    width: 8em;
    height: 8em;
    background: black;
    border-radius: 50%;
    box-shadow: inset 0.5em -0.5em crimson;
    animation: spin 2s linear infinite;
}
.loading2::before, .loading2::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    box-shadow: inherit;
}
.loading2::before {
    filter: blur(5px);
}
.loading2::after {
    filter: blur(10px);
}

@keyframes spin {
    to {
        transform: rotate(1turn);
    }
}


#burger-toggle {
    appearance: none;
    opacity: 0;
}
#burger-toggle:checked ~ .overlay {
    opacity: 1;
    transform: scale(160);
}
#burger-toggle:checked ~ .burger-menu .line:nth-child(1) {
    transform: translateY(calc(var(--burger-menu-radius) / 5)) rotate(45deg);
}
#burger-toggle:checked ~ .burger-menu .line:nth-child(2) {
    transform: scaleX(0);
}
#burger-toggle:checked ~ .burger-menu .line:nth-child(3) {
    transform: translateY(calc(var(--burger-menu-radius) / -5)) rotate(-45deg);
}

.burger-menu {
    --burger-menu-radius: 4em;
    position: relative;
    z-index: 100;
    display: block;
    width: var(--burger-menu-radius);
    height: var(--burger-menu-radius);
    background: white;
    border: solid 2px rgba(149, 166, 167, 0.4);
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    transition: 0.5s ease-in-out;
}
.burger-menu .line {
    position: absolute;
    left: 25%;
    width: 50%;
    height: 3px;
    background: rgba(43, 61, 79, 0.3);
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.5s ease;
}
.burger-menu .line:nth-child(1) {
    top: 30%;
}
.burger-menu .line:nth-child(2) {
    top: 50%;
}
.burger-menu .line:nth-child(3) {
    top: 70%;
}
.burger-menu .line::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2980b9;
    transform: translateX(-100%);
    transition: all 0.25s ease;
}
.burger-menu .line:nth-child(2)::after {
    transition-delay: 0.1s;
}
.burger-menu .line:nth-child(3)::after {
    transition-delay: 0.2s;
}
.burger-menu:hover {
    box-shadow: 0.4px 0.4px 0.8px rgba(0, 0, 0, 0.042), 1px 1px 2px rgba(0, 0, 0, 0.061), 1.9px 1.9px 3.8px rgba(0, 0, 0, 0.075), 3.4px 3.4px 6.7px rgba(0, 0, 0, 0.089), 6.3px 6.3px 12.5px rgba(0, 0, 0, 0.108), 15px 15px 30px rgba(0, 0, 0, 0.15);
}
.burger-menu:hover .line::after {
    transform: translateX(0);
}

.overlay {
    position: absolute;
    width: 2em;
    height: 2em;
    background: rgba(40, 127, 184, 0.9);
    border-radius: 50%;
    opacity: 0;
    transition: 0.5s ease-in-out;
    will-change: transform;
}

</style>
