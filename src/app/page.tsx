"use client";
import Image from "next/image";
import FinanceIMG from "@/assets/Solutions_Finance_Theme-1.png";
import MyForm from "@/components/MyForm";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [expensive, setExpensive] = useState<boolean>(false);
  const [income, setIncome] = useState<boolean>(false);

  const closeExpensive = () => setExpensive(false);
  const closeIncome = () => setIncome(false);

  const openExpensive = () => setExpensive(true);
  const openIncome = () => setIncome(true);

  return (
    <div className="w-full h-[500px] flex justify-center items-center flex-col">
      <section className="flex w-full justify-center items-center gap-4 mt-2">
        <Image
          src={FinanceIMG}
          alt="finance"
          className="w-[550px] object-cover"
          priority
        />
        <article className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-xl uppercase font-semibold">
            Keep track of your expenses and income!
          </h2>
          <p className="text-sm w-[250px] p-2 text-center">
            With our app you will keep track of all the entries and exits of
            your money.In a simple and fast way, with the best privacy in your
            browser.
          </p>
          <div className="w-full flex gap-4 justify-center items-center">
            <button
              className="bg-white text-stone-900 p-2 rounded-2xl font-semibold text-xs uppercase transition-all ease-in-out hover:bg-transparent hover:text-white hover:border flex justify-center items-center gap-2"
              onClick={openExpensive}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
              Expenses
            </button>
            <button
              className="border text-white p-2 rounded-2xl font-semibold text-xs uppercase transition-all ease-in-out hover:bg-white hover:text-stone-900 hover:border-none flex justify-center items-center gap-2"
              onClick={openIncome}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
              Income
            </button>
          </div>
        </article>
      </section>
      {expensive && (
        <Modal onClose={closeExpensive}>
          <MyForm title="Expenses Form" typeForm="expenses" />
        </Modal>
      )}
      {income && (
        <Modal onClose={closeIncome}>
          <MyForm title="Income Form" typeForm="income" />
        </Modal>
      )}
    </div>
  );
}
