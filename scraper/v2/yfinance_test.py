import yfinance as yf

msft = yf.Ticker("MSFT")

# get all stock info
print("Stock Info:")
print(msft.info)

# get historical market data
print("\nHistorical Market Data:")
hist = msft.history(period="1mo")
print(hist)

# show meta information about the history (requires history() to be called first)
print("\nHistory Metadata:")
print(msft.history_metadata)

# ... (ajoute des instructions print pour d'autres données selon tes besoins)
