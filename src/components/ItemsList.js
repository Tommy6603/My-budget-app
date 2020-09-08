import React from 'react';
import { IncomeItem } from './IncomeItem';
import { ExpenseItem } from './ExpenseItem';

export const ItemsList = ({ deleteIncome, deleteExpense, incomeItems, expenseItems }) => {

  return (
    <div className="list-container">
      <h3>収入一覧</h3>
        <ul className="list">
          {incomeItems.map((incomeItem) => (
            <IncomeItem 
              deleteIncome={deleteIncome}
              incomeText={incomeItem.text}
              incomeAmount={incomeItem.amount}
              incomeItem={incomeItem}
            />
          ))}
        </ul>
      <h3>支出一覧</h3>
      <ul className="list">
          {expenseItems.map((expenseItem) => (
            <ExpenseItem
              deleteExpense={deleteExpense}
              expenseText={expenseItem.text}
              expenseAmount={expenseItem.amount}
              expenseItem={expenseItem}
            />
          ))}
        </ul>
    </div>
  )
}
