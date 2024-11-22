import { IDataArray } from "@/interface/data";
import { getEasyDate } from "easy-datetime-ya";
import React from "react";

type Props = {
  data: IDataArray[];
  title: "Income" | "Expenses";
};

export default function Table({ data, title }: Props) {
  const clearLocalStorage = () => {
    localStorage.removeItem(title.toLowerCase());
    window.location.reload()
  };
  return (
    <section className="flex flex-col justify-center items-center">
    <table className="w-[90%] sm:w-[400px] p-4">
      <thead className="border-b">
        <tr className="uppercase text-sm font-semibold text-center">
          <th className="p-2">Title</th>
          <th className="p-2">Amount</th>
          <th className="p-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((el, index) => (
            <tr
              key={index}
              className="text-xs text-center border-b border-dashed"
            >
              <td className="p-4">{el.title}</td>
              <td>{el.amonut.toFixed(2)}</td>
              <td>{getEasyDate(new Date(el.date))}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={3}
              className="p-2 border-b border-dashed text-center text-xs uppercase font-semibold"
            >
              There are not data
            </td>
          </tr>
        )}
      </tbody>
      <tfoot className="text-center w-full text-sm uppercase font-bold text-yellow-300">
        <tr>
          <td colSpan={3} className="p-2">
            {title}
          </td>
        </tr>
      </tfoot>
    </table>
                <button
                className="bg-red-600 p-2 rounded-md text-white transition-all ease-in-out hover:bg-red-500 cursor-pointer text-xs uppercase font-bold mt-2"
                onClick={clearLocalStorage}
              >
                Clear
              </button>
    </section>
  );
}
