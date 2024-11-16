"use client";
import { IDataArray } from "@/interface/data";
import React, { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  title: string;
  typeForm: "expenses" | "income";
};

interface IForm {
  amount: string;
  title: string;
}

export default function MyForm({ title, typeForm }: Props) {
  //Initial state
  const initialState: IForm = {
    amount: "",
    title: "",
  };
  const [form, setForm] = useState<IForm>(initialState);

  //Change event
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  //Create new expenses
  const createNewExpense = () => {
    const res = localStorage.getItem("expenses");
    let data: IDataArray[] = [];
    //it's null data
    if (res) data = JSON.parse(res);
    //generate new
    const today = new Date();
    data.push({
      amonut: parseFloat(form.amount),
      title: form.title,
      date: today.toJSON(),
    });
    localStorage.setItem("expenses", JSON.stringify(data));
    //clear form
    setForm(initialState);
  };

  //Create new income
  const createNewIncome = () => {
    const res = localStorage.getItem("income");
    let data: IDataArray[] = [];
    //It's null res
    if (res) data = JSON.parse(res);
    //generate new
    const today = new Date();
    data.push({
      amonut: parseFloat(form.amount),
      title: form.title,
      date: today.toJSON(),
    });
    localStorage.setItem("income", JSON.stringify(data));
    //clear form
    setForm(initialState);
  };

  //Submit event
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (typeForm === "expenses") createNewExpense();
    else createNewIncome();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-white text-stone-900 w-[400px] p-4 flex flex-col gap-2 justify-center items-center rounded-md"
    >
      <h2 className="text-xl uppercase font-semibold">{title}</h2>
      <label
        htmlFor="title"
        className="w-[80%] text-xs font-bold text-left uppercase"
      >
        Title:
      </label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Insert a title"
        value={form.title}
        onChange={handleChange}
        required
        className="outline-none w-[80%] text-xs p-2 border rounded-sm focus:border-2 focus:border-blue-500 transition-all ease-in-out"
      />
      <label
        htmlFor="amount"
        className="w-[80%] text-xs font-bold text-left uppercase"
      >
        Amonut:
      </label>
      <input
        type="number"
        name="amount"
        id="amount"
        placeholder="Insert your amount"
        value={form.amount}
        onChange={handleChange}
        required
        className="outline-none w-[80%] text-xs p-2 border rounded-sm focus:border-2 focus:border-blue-500 transition-all ease-in-out"
      />
      <button className="p-2 uppercase text-xs font-semibold bg-yellow-600 w-[80%] rounded-sm text-white transition-all ease-in-out hover:bg-yellow-500">
        Save
      </button>
    </form>
  );
}
