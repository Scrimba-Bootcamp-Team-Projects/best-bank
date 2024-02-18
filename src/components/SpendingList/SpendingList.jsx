// SpendingList component is used to display the spending list for each account in the AccountList component.
// It's used in App.js to display the spending list for each account.
// It takes one prop: spendingData.
import SpendingBar from "../SpendingBar/SpendingBar";
import styles from "./SpendingList.module.css";
import { setUsdCurrency } from "../../utilities";

// The component takes a spendingData prop. I put some default values in so I could test and build it.
// Because I'm not sure how we will be rendering this prop. Once we start using it in the
// app, we can remove the default values.
export default function SpendingList({ spendingData = [{category: "Rent", spent: "1450"},{category: "Food", spent: "300"}, {category: "Netflix", spent: "20"}] }) {
    // max is the maximum amount spent in any category
    let max = Math.max(
      ...spendingData.map((categoryObj) => {
        return parseInt(categoryObj.spent);
      })
    );
    // categoryList generates a list of SpendingBar components
    const categoryList = spendingData.map((categoryObj, index) => {
      // percent is the percentage of the amount spent in each category
      let percent = (parseInt(categoryObj.spent) / max) * 100;

      return (
        <SpendingBar
          key={index}
          // this will make the bar look better and clear to compare the spending
          percent={percent > 40 ? percent : (percent += 30)}
        >
          <span className={styles.barText}>{categoryObj.category}</span>
          <span className={styles.barText}>{setUsdCurrency(categoryObj.spent)}</span>
        </SpendingBar>
      );
    });


  return (
    <>
      <div className={styles.barList}>{categoryList}</div>
    </>
  );
}
