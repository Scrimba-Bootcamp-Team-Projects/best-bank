// SpendingList component is used to generate the spending list.
// It takes one prop: spendingData.
import SpendingBar from "../SpendingBar/SpendingBar";
import styles from "./SpendingList.module.css";
import { setUsdCurrency } from "../../utilities";

export default function SpendingList({ spendingData }) {
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
        <span className={styles.barText}>
          {setUsdCurrency(categoryObj.spent)}
        </span>
      </SpendingBar>
    );
  });

  return (
    <>
      <div className={styles.barList}>
        {categoryList.length > 0 ? (
          categoryList
        ) : (
          <span className={styles.noSpending}>
            You didn't spend any money! Good Job!!! 💰🤑
          </span>
        )}
      </div>
    </>
  );
}
