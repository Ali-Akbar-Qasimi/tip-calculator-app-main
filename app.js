let billAmount = document.querySelector('#bill')
let peopleAmount = document.querySelector('#people')
let total = document.querySelector('.total-price')
let tipTotal = document.querySelector('.tip-price')
let customTip = document.querySelector('#custom')

let tips = document.querySelectorAll('.tip')

let resetBTN = document.querySelector('.reset-btn')

billAmount.addEventListener('input',calculate)
peopleAmount.addEventListener('input',calculate)
customTip.addEventListener('input',()=>{
    selectedTip = customTip.value
    calculate()
})
customTip.addEventListener('click',()=>{
    for(let i = 0 ; i < tips.length ; i++){
        tips[i].classList.remove('active')
    }
})

let tipAmount = 0

let selectedTip = 0

tips.forEach(tip =>{
    tip.addEventListener('click',()=>{
        for(let i = 0 ; i < tips.length ; i++){
            tips[i].classList.remove('active')
        }
        customTip.value = ''
        selectedTip = tip.dataset.tip
        if(tip.classList.contains('active')){
            tip.classList.remove()
            selectedTip = 0
        }
        tip.classList.add('active')
        calculate()
    })
})

function calculate(){
    tipAmount = parseInt(selectedTip / 100 * billAmount.value / peopleAmount.value)
    total.textContent = '$' + parseInt(billAmount.value / peopleAmount.value + tipAmount)
    tipTotal.textContent = '$' + tipAmount
}

resetBTN.addEventListener('click',reset)
function reset(){
    selectedTip = 0
    tipAmount = 0
    total.textContent = '$0.00'
    tipTotal.textContent = "$0.00"
    billAmount.value = ''
    peopleAmount.value = ''
    for(let i = 0 ; i < tips.length ; i++){
        tips[i].classList.remove('active')
    }
    customTip.value = ''
}