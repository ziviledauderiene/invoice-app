import { ReactComponent as ArrowRight } from "./assets/icon-arrow-right.svg";
import { ReactComponent as Dot } from "./assets/GoPrimitiveDot.svg";

export const Invoice = ({ invoice }) => {
  let formatedDate = "";
  const dateFormat = () => {
    let month = "";
    let monthNumber = invoice.paymentDue.slice(5, 7);
    switch (monthNumber) {
      case "01":
        month = "Jan";
        break;
      case "02":
        month = "Feb";
        break;
      case "03":
        month = "Mar";
        break;
      case "04":
        month = "Apr";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "Jun";
        break;
      case "07":
        month = "Jul";
        break;
      case "08":
        month = "Aug";
        break;
      case "09":
        month = "Sep";
        break;
      case "10":
        month = "Oct";
        break;
      case "11":
        month = "Nov";
        break;
      case "12":
        month = "Dec";
        break;
      default:
    }
    formatedDate =
      invoice.paymentDue.slice(8) +
      " " +
      month +
      " " +
      invoice.paymentDue.slice(0, 4);
  };
  dateFormat();

  let invoiceStatus = "";
  const getInvoiceStatus = () => {
    switch (invoice.status) {
      case "paid":
        invoiceStatus = "paid";
        break;
      case "pending":
        invoiceStatus = "pending";
        break;
      case "draft":
        invoiceStatus = "draft";
        break;
      default:
    }
  };
  getInvoiceStatus();

  return (
    <div className="invoice">
      <p className="invoice-id">
        <span>#</span>
        {invoice.id}
      </p>
      <p className="due-date">Due {formatedDate}</p>
      <p className="client-name">{invoice.clientName}</p>
      <p className="invoice-total">£ {invoice.total.toFixed(2)}</p>
      <div className="status-button">
        <div className={invoiceStatus}>
          <Dot />
          <div>
            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
          </div>
        </div>
      </div>
      <ArrowRight />
    </div>
  );
};
