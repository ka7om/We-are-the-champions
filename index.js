import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, remove, onValue  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting = {
    databaseURL: "https://we-are-the-champions-1-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const textInDB = ref(database, "text")


const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const UlEl = document.getElementById("ul-el")

const liEl = document.createElement("li")


btnEl.addEventListener("click", function() {
    let inputValue = inputEl.value

    push(textInDB, inputValue)

    clearInput()
})

onValue(textInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())

        clearUlEl()

        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
        }
        
    }
})

function printLi(value) {
    liEl.textContent = `${value}`
    ulEl += ulEl.append(liEl)
}

liEl.addEventListener("dblclick", function() {
    liEl.remove()
})

function clearUlEl() {
    UlEl.innerHTML = ""
}

function clearInput() {
    inputEl.value = ""
}