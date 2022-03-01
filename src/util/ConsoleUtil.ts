import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (prompt: any) => {
  return new Promise((resolve, reject) => {
    rl.question(prompt, resolve)
  })
}

export default question;