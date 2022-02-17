let nicksBlue = []
let nicksRed = []
let nome2 = ''
let firstplayerBlue = '1'
let firstplayerRed = '1'

const interval = setInterval(() => {
    let tabela1 = document.getElementsByClassName('bfy-table')[0]
    let tabela2 = document.getElementsByClassName('bfy-table')[1]

    if (tabela1 && tabela2) {
        let playersBlue = tabela1.querySelectorAll('td.player-in-game-name')
        let playersRed = tabela2.querySelectorAll('td.player-in-game-name')
        let nome1 = ''

        if ((firstplayerBlue != playersBlue[0].textContent) && (firstplayerRed != playersRed[0].textContent)) {
            firstplayerBlue = playersBlue[0].textContent
            firstplayerRed = playersRed[0].textContent
            for (let j = 0; j < playersBlue.length; j++) {

                nome1 = playersBlue[j].textContent

                for (let i = 0; i < nome1.length; i++) {
                    if (/\w|á|à|â|ã|é|è|ê|í|ï|ó|ô|õ|ö|ú|ç|ñ/gi.test(nome1[i])) {
                        nome2 += nome1[i]
                    }
                }

                nicksBlue.push(nome2.replace(/\C$/, ''))
                nome2 = ''
            }

            for (let j = 0; j < playersRed.length; j++) {

                nome1 = playersRed[j].textContent

                for (let i = 0; i < nome1.length; i++) {
                    if (/\w|á|à|â|ã|é|è|ê|í|ï|ó|ô|õ|ö|ú|ç|ñ/gi.test(nome1[i])) {
                        nome2 += nome1[i]
                    }
                }

                nicksRed.push(nome2.replace(/\C$/, ''))
                nome2 = ''
            }

            console.log(nicksBlue)
            console.log(nicksRed)

            let linkBlue = `https://br.op.gg/multi/query=${nicksBlue[0]}`
            let linkRed = `https://br.op.gg/multi/query=${nicksRed[0]}`

            for (let pos = 1; pos < nicksBlue.length; pos++) {
                linkBlue += `%2C${nicksBlue[pos]}`
            }
            for (let pos = 1; pos < nicksRed.length; pos++) {
                linkRed += `%2C${nicksRed[pos]}`
            }

            nicksBlue = []
            nicksRed = []

            //window.open(linkBlue)
            //window.open(linkRed)
        }

    }
}, 2000)