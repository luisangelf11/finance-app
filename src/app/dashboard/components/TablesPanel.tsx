"use client"
import Table from '@/components/Table'
import { IDataArray } from '@/interface/data'
import React, {useState, useEffect} from 'react'

export default function TablesPanel() {
    const [expenses, setExpenses] = useState<IDataArray[] | []>([])
    const [income, setIncome] = useState<IDataArray[] | []>([])

    //get items from local storage
    const getExpenses = ()=>{
        const res = localStorage.getItem('expenses')
        let data: IDataArray[] = [];
        if(res) data = JSON.parse(res)
        setExpenses(data)
    }

    const getIncome = ()=>{
        const res = localStorage.getItem('income')
        let data: IDataArray[] = [];
        if(res) data = JSON.parse(res)
        setIncome(data)
    }

    //cicle life
    useEffect(()=>{
        getExpenses()
        getIncome()
    }, [])

  return (
    <section className='flex gap-10 mt-4 w-full p-2 justify-center items-center'>
        <Table title="Expenses" data={expenses} />
        <Table title="Income" data={income} />
    </section>
  )
}
