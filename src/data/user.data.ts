const AppleStock = {
  id: 1,
  symbol: "AAPL",
  name: "Apple Inc",
  marketValuePerShare: 154.51,
};

const TeslaStock = {
  id: 2,
  symbol: "TSLA",
  name: "Tesla Inc",
  marketValuePerShare: 800.04,
};

const FacebookStock = {
  id: 3,
  symbol: "FB",
  name: "Meta Platforms Inc - Class A",
  marketValuePerShare: 197.65,
};

const UserStock1 = {
  id: 1,
  sub: "google-oauth2|106608343535113226462",
  symbol: "AAPL",
  entryValuePerShare: 151.23,
  numberOfShares: 10,
  totalValueOfShares: 1545.1,
  firstBought: "2022-04-10T18:30:00.000Z",
  lastBought: "2022-04-10T18:30:00.000Z",
  details: AppleStock,
};

const UserStock2 = {
  id: 2,
  sub: "google-oauth2|106608343535113226462",
  symbol: "TSLA",
  entryValuePerShare: 800,
  numberOfShares: 5,
  totalValueOfShares: 4000.4,
  firstBought: "2022-01-12T12:21:43.000Z",
  lastBought: "2022-01-14T10:20:10.000Z",
  details: TeslaStock,
};

const UserStock3 = {
  id: 3,
  sub: "google-oauth2|106608343535113226462",
  symbol: "FB",
  entryValuePerShare: 192.5,
  numberOfShares: 1,
  totalValueOfShares: 197.65,
  firstBought: "2022-05-06T17:50:00.000Z",
  lastBought: "2022-05-06T17:50:00.000Z",
  details: FacebookStock,
};

const InvestmentValues = [
  {
    id: 1,
    sub: "google-oauth2|106608343535113226462",
    dateTime: "2022-04-10T18:30:00.000Z",
    value: 1512.3,
  },
  {
    id: 2,
    sub: "google-oauth2|106608343535113226462",
    dateTime: "2022-01-12T12:21:43.000Z",
    value: 2314.5,
  },
  {
    id: 3,
    sub: "google-oauth2|106608343535113226462",
    dateTime: "2022-01-14T10:20:10.000Z",
    value: 5517.5,
  },
  {
    id: 4,
    sub: "google-oauth2|106608343535113226462",
    dateTime: "2022-05-06T17:50:00.000Z",
    value: 5710,
  },
  {
    id: 5,
    sub: "google-oauth2|106608343535113226462",
    dateTime: "2022-05-11T14:00:00.000Z",
    value: 5743.15,
  },
];

const UserData = {
  id: 1,
  sub: "google-oauth2|106608343535113226462",
  totalInvestmentValue: 5743.15,
  investmentValues: InvestmentValues,
  stocks: [UserStock1, UserStock2, UserStock3],
  cryptos: null,
};

export default UserData