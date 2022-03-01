import React from "react";
import { ReactComponent as ArrowDown } from "./assets/icon-arrow-down.svg";
import { ReactComponent as PlusIcon } from "./assets/icon-plus.svg";

export const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="invoices">
          <h1>Invoices</h1>
          <p>There are {7} total invoices</p>
        </div>

        <div className="buttons">
          <div className="dropdown">
            <button className="filter-button">
              <p>Filter by status</p>
              <ArrowDown />
            </button>
            <div className="dropdown-content">
              <div>
                <input type="checkbox" id="draft" value="draft" />
                <label htmlFor="draft">Draft</label>
              </div>
              <div>
                <input type="checkbox" id="pending" value="pending" />
                <label htmlFor="pending">Pending</label>
              </div>
              <div>
                <input type="checkbox" id="paid" value="paid" />
                <label htmlFor="paid">Paid</label>
              </div>
            </div>
          </div>

          <button className="new-invoice-button">
            <PlusIcon />
            <p>New Invoice</p>
          </button>
        </div>
      </div>
    </header>
  );
};
