<script>
    export let number = "0";
    export let legend = "days";
</script>

<div class="counter">
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

<style lang="scss">
    $shadow: #1A1A24;
    $radius: 5px;
    .counter {
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
    }

    .wrapper {
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>