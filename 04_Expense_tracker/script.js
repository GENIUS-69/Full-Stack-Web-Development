document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById("expense-form")
    const expenseNameInput = document.getElementById("expense-name")
    const expenseAmountInput = document.getElementById("expense-amount")
    const expenseList = document.getElementById("expense-list")
    const totalAmountDislay = document.getElementById("total-amount")

    let expenses = JSON.parse(localStorage.getItem('expenses')) || []
    let totalAmount = calculateTotal()

    renderExpenses();

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const name = expenseNameInput.value.trim()
        const amount = parseFloat(expenseAmountInput.value.trim())

        // Fix: Correct validation logic
        if (name !== "" && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name: name,
                amount: amount
            }
            expenses.push(newExpense);
            saveExpensesToLocal();
            renderExpenses();
            updateTotal();

            //clearInput
            expenseNameInput.value = ""
            expenseAmountInput.value = ""
        }
    });

    function calculateTotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0)
    }

    function saveExpensesToLocal() {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }

    function updateTotal(){
        totalAmount=calculateTotal()
        totalAmountDislay.textContent=totalAmount.toFixed(2);
    }

    function renderExpenses(){
        expenseList.innerHTML=""
        expenses.forEach(expense=>{
            const li =document.createElement("li")
            li.innerHTML=`
            ${expense.name} - $${expense.amount}
            <button data-id="${expense.id}">Delete</button>
            `
            expenseList.appendChild(li)
        })
    }

    expenseList.addEventListener('click',(e)=>{
        // Fix: tagName should be uppercase and check for 'BUTTON'
        if (e.target.tagName === 'BUTTON') {
            const expenseId = parseInt(e.target.getAttribute("data-id"));
            expenses = expenses.filter((expense)=> expense.id !== expenseId);

            saveExpensesToLocal();
            renderExpenses();
            updateTotal();
        }
    })
})