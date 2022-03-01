import initialData from "./assets/data.json";
import { Invoice } from "./Invoice";

export const Main = () => {
  return (
    <main>
      <div className="main-content">
        {initialData.map((invoice) => (
          <Invoice key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </main>
  );
};
