export default {
  TESTNET: process.env.REACT_APP_TESTNET === "true",
  FACTORY_AA: process.env.REACT_APP_FACTORY_AA,
  TOKEN_REGISTRY: process.env.REACT_APP_TOKEN_REGISTRY,
  SIMPLESWAP_API_KEY: process.env.REACT_APP_SIMPLESWAP_API_KEY,
  BUFFER_URL: process.env.REACT_APP_BUFFER_URL,
  GA_ID: process.env.REACT_APP_GA,
  reserves: {
    base: {
      name: "GBYTE",
      decimals: 9,
      oracle: process.env.REACT_APP_RESERVE_ORACLE,
      feed_name: process.env.REACT_APP_RESERVE_FEED_NAME,
      feedCurrency: "USD",
    },
    [process.env.REACT_APP_OUSD_RESERVE_ASSET]: {
      name: "OUSD",
      decimals: 4,
    },
  },
  interestRecipients: [
    { name: "Obyte Foundation", address: "FCXZXQR353XI4FIPQL6U4G2EQJL4CCU2" },
    {
      name: "Estonian Cryptocurrency Association",
      address: "VJDEB7JEBHJWW6DPTLYYUBDAVOYKZYB4",
    },
    {
      name: "PolloPollo",
      address: "UB6CSL6DSZPMACGZDEUKE4RLVWNXUPAJ",
    },
  ],
  pegged: {
    // for landing page
    USD: {
      stableName: "OUSD",
      interestName: "IUSD",
      growthName: "GRD",
      percent: 16,
      address: "26XAPPPTTYRIOSYNCUV3NS2H57X5LZLJ",
    },
    BTC: {
      stableName: "OBIT",
      interestName: "IBIT",
      growthName: "GRB",
      percent: 11,
      address: "Z7GNZCFDEWFKYOO6OIAZN7GH7DEKDHKA",
    },
    GOLD: {
      stableName: "OAU",
      interestName: "IAU",
      growthName: "GRAU",
      percent: 8,
      address: "UCWEMOXEYFUDDBJLHIHZ3NIAX3QD2YFD",
    },
  },
};
