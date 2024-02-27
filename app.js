let sigintCounter = 0

const reset = () => {
    sigintCounter = 0
}

process.on("SIGINT", () => {
    sigintCounter++

    console.log('Just Received SIGINT.')

    if (sigintCounter >= 2) {
        console.log('Exiting due to multiple SIGINT.')
        process.exit(0)
    }
})

setInterval(reset, 3000)