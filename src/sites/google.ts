import * as puppeteer from 'puppeteer'
import * as readlineSync from 'readline-sync'

export class Google {
  async cotacaoMoeda() {
    const browser = await puppeteer.launch({ headless: true })
    const moedaInput =
      readlineSync.question('Informe uma moeda base (dolar): ') || 'dolar'
    const moeda2Input =
      readlineSync.question('Informe uma moeda desejada (real): ') || 'real'
    // const valorInput = readlineSync.question('Informe o valor (1) ') || '1'
    const page = await browser.newPage()
    const url = `https://www.google.com/search?sxsrf=ALeKk02uvGgL2rRLBRPAW8lk5XDz7n_nXA%3A1587082659263&ei=o_WYXvjWD7HF5OUP5qWN-AY&q=${moedaInput}+para+${moeda2Input}&oq=${moedaInput}+para+${moeda2Input}&gs_lcp=CgZwc3ktYWIQAzIHCAAQRhCCAjICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECAAQRzoECCMQJzoECAAQQzoFCAAQgwFQy_JxWN6HcmDZj3JoAHAEeACAAZ0CiAGrHZIBBDItMTWYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwi4tInRl-7oAhWxIrkGHeZSA28Q4dUDCAs&uact=5`
    await page.goto(url, { timeout: 0, waitUntil: 'load' })

    //await page.screenshot({path: 'example.png'});
    const resultado = await page.evaluate(() => {
      return {
        valorMoedaFinal: document
          .querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc')
          ?.getAttribute('value'),
      }
    })
    console.log(
      `o valor de 1 ${moedaInput} em ${moeda2Input} é ${resultado.valorMoedaFinal}`
    )
    await browser.close()
  }
}
