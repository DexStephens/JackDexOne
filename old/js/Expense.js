// New Expense Accordion
function addNewExpense() {
    // Get the new expense div
    let popup = document.getElementById('expensepopup');

    // Open Form
    open-popup.classList.add('open-popup');
};

function closeExpensePopUp(){
    let popup = document.getElementById('expensepopup');
    open-popup.classList.remove('open-popup');

    // Create new accordion button
    var btn = document.createElement("button");
    let expenses = document.getElementById("newexpense");
    let new_expense_category = document.getElementById('expensecategory').value;

    // Create new accordion panel
    var panel = document.createElement("div");
    panel.classList.add("panel");
    panel.innerHTML = "<table class='table table-responsive'><thead><tr><th scope='col'>Check</th><th scope='col'>Name</th><th scope='col'>$/Month</th><th scope='col'>Notes</th><th scope='col'>Edit</th><th scope='col'>Delete</th></tr></thead></table>";

    // Create new "ADD" button inside of accordion panel
    var addBtn = document.createElement("button");
    addBtn.innerHTML = 'Add Item' ;
    addBtn.style='float: left';

    // Add event listener to the "Add" button
    addBtn.addEventListener("click", function() {
    // Create form element
    var form = document.createElement("form");
    form.innerHTML = `
        <label>Name:</label><br>
        <input type="text" name="name"><br>
        <label>$/Month:</label><br>
        <input type="text" name="amount"><br>
        <label>Address:</label><br>
        <input type="text" name="address"><br>
        <label>Notes:</label><br>
        <input type="text" name="notes"><br>
        <input type="submit" value="Submit">
        <input type="button" value="Cancel" id="cancel-btn">
    `;
    
    // Style form and append it to the DOM
    form.style.display = "block";
    panel.appendChild(form);
    
    // Add event listener to the cancel button
    document.getElementById("cancel-btn").addEventListener("click", function() {
        form.remove();
    });
    });

    // Create new "Delete" button inside of accordion panel
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = 'Delete Category' ;
    deleteBtn.style='float: right';
    deleteBtn.onclick = function() {
        deleteExpenseElement(this);
    };

    // Append the new accordion, panel, and "Delete" button to the expenses div
    var div = document.createElement('div');
    div.id = 'accordion-parent';
    div.classList.add("table-responsive");
    div.appendChild(btn);
    div.appendChild(panel);
    panel.appendChild(deleteBtn);
    panel.appendChild(addBtn);
    expenses.prepend(div);

    // Accordion Button Info
    btn.id = new_expense_category + '_accordion'
    btn.classList.add("accordion");
    btn.innerHTML = new_expense_category;

    // Add event listener to the accordion button
    btn.addEventListener("click", function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    });
    
    // Create Variable for the Expense Summary
    let summary = document.getElementById('expensesummary')
    let new_row = document.createElement('tr')
    
    // New Row Data and Attributes
    new_row.innerHTML = '<td>' + new_expense_category + '</td>'
    new_row.id = new_expense_category + '_row'

    // Add New Row to Summary Table
    summary.appendChild(new_row)
    };

function deleteExpenseElement(element) {
    // Get the previous sibling element of the element
    var previousSibling = element.parentElement.previousElementSibling.innerHTML;
    let previousSibling_id = previousSibling + '_row';

    // Get Expense Summary ID 
    let summary_row = document.getElementById(previousSibling_id);
    
    // Delete Summary Row
    summary_row.remove();

    // Remove the parent element of the element
    element.parentElement.parentElement.remove();
    };
    

function cancelExpensePopUp() {
    let popup = document.getElementById('expensepopup');
    open-popup.classList.remove('open-popup');
};
