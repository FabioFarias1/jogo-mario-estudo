const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const gameovertext = document.querySelector('.game-over-text')
const start = document.querySelector('.start')
const maiorP = document.querySelector('#mponto')
const result = document.querySelector('.resultado')
const result_points = document.querySelector('#spanpoints')
var elemento = document.querySelector('#ele')

var score = 0
var id = 0

//var vetor_pontos = []

clouds.style = 'animation-play-state :paused;'
pipe.style = 'animation-play-state :paused;'

start.addEventListener('click', function startButton() {

    start.src = ''

    clouds.style = 'animation-play-state :start;'
    pipe.style = 'animation-play-state :start;'

    const jump = () => {
        mario.classList.add('jump')

        setTimeout(() => {

            mario.classList.remove('jump')

        }, 500)
    }

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {

            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`

            mario.src = 'img/game-over.png'
            mario.style.width = '70px'
            mario.style.marginLeft = '50px'

            clouds.style = 'animation-play-state :paused;'

            gameovertext.classList.remove('game-over-text')
            gameovertext.classList.add('game-over-text-over')

            id++
            console.log(id)

            const res = setInterval(() => {
                gameovertext.classList.add('game-over-text')
                result.style.display = 'flex'
                result_points.innerHTML = score
            }, 1000)


            setInterval(() => {
                clearInterval(res)
                result.style.display = 'none'
                start.src = 'img/start.png'

            }, 5000)


            if (id == 1) {
                start.addEventListener('click', () => {
                    location.reload()
                })
            }
            clearInterval(loop)
        }
    }, 10)

    const b = setInterval(() => {
        elemento.innerHTML = score++
        console.log(score)
        if (id !== 0) {
            score--
            clearInterval(b)
            //vetor_pontos.push(score)
            //console.log(vetor_pontos)
            //maiorP.innerHTML = vetor_pontos
        }
    }, 300)




    document.addEventListener('keydown', jump)


})


