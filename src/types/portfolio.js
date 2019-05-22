// @flow

import type { BigNumber } from "bignumber.js";
import type { Account } from "./account";
import type { CryptoCurrency, TokenCurrency } from "./currencies";

export type BalanceHistory = Array<{
  date: Date,
  value: BigNumber
}>;

export type BalanceHistoryWithCountervalue = Array<{
  date: Date,
  value: BigNumber,
  countervalue: BigNumber
}>;

export type Portfolio = {
  balanceHistory: BalanceHistory,
  balanceAvailable: boolean,
  availableAccounts: Account[],
  unavailableCurrencies: CryptoCurrency[],
  accounts: Account[],
  range: PortfolioRange,
  histories: BalanceHistoryWithCountervalue[]
};

export type PortfolioRange = "year" | "month" | "week";

export type AssetsDistribution = {
  // if not available, we would not display anything
  isAvailable: boolean,
  // a sorted list of assets with data
  list: Array<{
    currency: CryptoCurrency | TokenCurrency,
    distribution: number, // % of the total (normalized in 0-1)
    amount: BigNumber,
    countervalue: BigNumber // countervalue of the amount that was calculated based of the rate provided
  }>,
  // number of accounts to show first (before the see all)
  showFirst: number
};
