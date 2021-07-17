<script>
    export let number = "0";
    export let legend = "days";
</script>

<div class="" style="position: relative; transform-style: preserve-3d;">
    <div class="counter counter--actual">
        <div class="counter__top">
            <div class="wrapper counter__top_borders">
                <span class="counter_number">{number.padStart(2, "0")}</span>
            </div>
        </div>
        <div class="counter__bottom">
            <div class="wrapper counter__bottom_borders">
                <span class="counter_number">{number.padStart(2, "0")}</span>
            </div>
        </div>
        <div class="counter_legend">
            <span>{legend}</span>
        </div>
    </div>

    <div class="counter counter--upsidedown">
        <div class="counter__top">
            <div class="wrapper counter__top_borders">
                <span class="counter_number">{(Number(number)+1).toString().padStart(2, "0")}</span>
            </div>
        </div>
        <div class="counter__bottom">
            <div class="wrapper counter__bottom_borders">
                <span class="counter_number">{(Number(number)+1).toString().padStart(2, "0")}</span>
            </div>
        </div>
    </div>

    <div class="counter counter--next">
        <div class="counter__top">
            <div class="wrapper counter__top_borders">
                <span class="counter_number">{(Number(number)+1).toString().padStart(2, "0")}</span>
            </div>
        </div>
        <div class="counter__bottom">
            <div class="wrapper counter__bottom_borders">
                <span class="counter_number">{(Number(number)+1).toString().padStart(2, "0")}</span>
            </div>
        </div>
    </div>

</div>

<style lang="scss">
    $shadow: #1A1A24;
    $radius: 5px;
    .counter {
        perspective: 500px;
        position: relative;
        width: 150px; height: 140px;
        &__top, &__bottom {
            left: 0;
            overflow: hidden;
            position: absolute;
            height: 50%; width: 100%;
            span {
                left: 50%;
                font-size: 80px;
                font-weight: 700;
                position: absolute;
            }
            &_borders {
                &::after, &::before {
                    content: "";
                    position: absolute;
                    border-radius: 100%;
                    width: 10px; height: 10px;
                }
            }
        }
        &__top {
            top: 0;
            z-index: 1;
            background-color: #2C2C44;
            border-top-left-radius: $radius;
            border-top-right-radius: $radius;

            span {
                top: 100%;
                color: #D84E71;
                transform: translate(-50%, -50%);
            }

            &_borders {
                &::after, &::before {
                    bottom: 0;
                    background-color: #191C26;
                }
                &::after {
                    right: 0;
                    transform: translate(50%, 50%);
                }
                &::before {
                    left: 0;
                    transform: translate(-50%, 50%);
                }
            }
        }
        &__bottom {
            top: 50%;
            box-shadow: 0 10px $shadow;
            background-color: #34364F;
            border-bottom-left-radius: $radius;
            border-bottom-right-radius: $radius;
            
            span {
                bottom: 100%;
                color: #FB5F86;
                transform: translate(-50%, 50%);
            }

            &_borders {
                &::after, &::before {
                    top: 0;
                    background-color: #191C26;
                }
                &::after {
                    right: 0;
                    transform: translate(50%, -50%);
                }
                &::before {
                    left: 0;
                    transform: translate(-50%, -50%);
                }
            }
        }

        &_legend {
            font-size: 12px;
            position: absolute;
            letter-spacing: 5px;
            top: 100%; left: 50%;
            text-transform: uppercase;
            transform: translate(-50%, 25px);
        }

        @media (max-width: 750px) {
            width: 100px; height: 93px;
            &_legend {
                font-size: 2vw;
            }
            &__top, &__bottom {
                span {
                    font-size: 40px;
                }
            }
        }

        @media (max-width: 375px) {
            flex-grow: 1;
            flex-basis: 0;
            height: 70px;
            min-width: 100px; 
            max-width: 100px; 
            &_legend {
                font-size: 3vw;
            }
        }

        &--actual {
            transform: translateZ(3px);
            .counter__top {
                backface-visibility: hidden;
                transform-origin: center bottom;
                animation: counter-top 3s ease infinite forwards;
            }
            .counter__bottom {
                animation: counter-bottom 3s linear infinite;
            }
            // animation: counter 3s linear infinite forwards;
        }

        &--upsidedown {
            top: 0; left: 0;
            position: absolute;
            transform: rotateZ(180deg) rotateY(180deg) translateZ(2px);
            .counter__bottom {
                transform-origin: center top;
                animation: counter-upside-bottom 3s ease infinite forwards;
            }
            .counter__top {
                display: none;
            }
            // animation: counter-upside 3s ease infinite forwards;
        }
        
        &--next {
            top: 0; left: 0;
            position: absolute;
            transform: translateZ(-10px);
        }
    }

    .wrapper {
        width: 100%;
        height: 100%;
        position: relative;
    }

    @keyframes counter {
        0% {
            transform: translateZ(3px);
        }
        100% {
            transform: translateZ(-3px);
        }
    }

    @keyframes counter-top {
        0% {
            transform: rotateX(0deg);
        }
        40% {
        }
        41% {
        }
        100% {
            transform: rotateX(-180deg);
        }
    }

    @keyframes counter-bottom {
        30% {
            opacity: 1;
        }
        35% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes counter-upside-bottom {
        0% {
            transform: rotateX(0deg);
        }
        100% {
            transform: rotateX(180deg);
        }
    }

    @keyframes counter-upside {
        0% {
            transform: rotateZ(180deg) rotateY(180deg) translateZ(2);
        }
        
        100% {
            transform: rotateZ(180deg) rotateY(0deg) translateZ(40);
        }
    }
</style>