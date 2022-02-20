import React from "react";

export const Header = () => {
  return (
    <header>
      <div>
        <h1>Invoices</h1>
        <p>There are {7} total invoices</p>
      </div>

      <div className="dropdown">
        <button>
          <p>Filter by status</p>
          <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4.228 4.228L9.456 1"
              stroke="#7C5DFA"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div className="dropdown-content">
          <div>
            <input type="checkbox" id="draft" />
            <label htmlFor="draft">Draft</label>
          </div>
          <div>
            <input type="checkbox" id="pending" />
            <label htmlFor="pending">Pending</label>
          </div>
          <div>
            <input type="checkbox" id="paid" />
            <label htmlFor="paid">Paid</label>
          </div>
        </div>
      </div>

      <button>
        <div>
          <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
              fill="#7C5DFA"
              fillRule="nonzero"
            />
          </svg>
        </div>
        <p>New Invoice</p>
      </button>
    </header>
  );
};
