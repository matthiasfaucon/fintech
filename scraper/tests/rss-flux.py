import feedparser

# URL du flux RSS
tabLinks = [
    "https://services.lesechos.fr/rss/les-echos-economie.xml",
    "https://services.lesechos.fr/rss/les-echos-finance-marches.xml",
    "https://services.lesechos.fr/rss/les-echos-entreprises.xml",
    "https://services.lesechos.fr/rss/les-echos-idees.xml",
    "https://services.lesechos.fr/rss/les-echos-weekend.xml",
    "https://services.lesechos.fr/rss/les-echos-monde.xml",
    "https://services.lesechos.fr/rss/les-echos-patrimoine.xml",
    "https://services.lesechos.fr/rss/les-echos-politique.xml",
    "https://services.lesechos.fr/rss/les-echos-regions.xml",
    "https://services.lesechos.fr/rss/les-echos-start-up.xml",
    "https://services.lesechos.fr/rss/les-echos-tech-medias.xml"

    "https://fr.investing.com/rss/news_159.rss",

    "https://fr.investing.com/rss/market_overview.rss",
    "https://fr.investing.com/rss/market_overview_Technical.rss",
    "https://fr.investing.com/rss/market_overview_Fundamental.rss",
    "https://fr.investing.com/rss/market_overview_Opinion.rss",
    "https://fr.investing.com/rss/market_overview_investing_ideas.rss",

    "https://fr.investing.com/rss/news_302.rss",

    "https://fr.investing.com/rss/forex.rss",
    "https://fr.investing.com/rss/forex_Technical.rss",
    "https://fr.investing.com/rss/forex_Fundamental.rss",
    "https://fr.investing.com/rss/forex_Opinion.rss",
    "https://fr.investing.com/rss/forex_Signals.rss",

    "https://fr.investing.com/rss/286.rss",
    "https://fr.investing.com/rss/290.rss",

    "https://fr.investing.com/rss/stock.rss",
    "https://fr.investing.com/rss/stock_Technical.rss",
    "https://fr.investing.com/rss/stock_Fundamental.rss",
    "https://fr.investing.com/rss/stock_Opinion.rss",
    "https://fr.investing.com/rss/stock_stock_picks.rss",
    "https://fr.investing.com/rss/stock_Stocks.rss",
    "https://fr.investing.com/rss/stock_Indices.rss",
    "https://fr.investing.com/rss/stock_Futures.rss",
    "https://fr.investing.com/rss/stock_Options.rss",

    "https://fr.investing.com/rss/commodities.rss",
    "https://fr.investing.com/rss/commodities_Technical.rss",
    "https://fr.investing.com/rss/commodities_Fundamental.rss",
    "https://fr.investing.com/rss/commodities_Opinion.rss",
    "https://fr.investing.com/rss/commodities_Strategy.rss",
    "https://fr.investing.com/rss/commodities_Metals.rss",
    "https://fr.investing.com/rss/commodities_Energy.rss",
    "https://fr.investing.com/rss/commodities_Agriculture.rss",

    "https://fr.investing.com/rss/bonds.rss",
    "https://fr.investing.com/rss/bonds_Technical.rss",
    "https://fr.investing.com/rss/bonds_Fundamental.rss",
    "https://fr.investing.com/rss/bonds_Opinion.rss",
    "https://fr.investing.com/rss/bonds_Strategy.rss",
    "https://fr.investing.com/rss/bonds_Government.rss",
    "https://fr.investing.com/rss/bonds_Corporate.rss"

    "https://fr.investing.com/rss/news.rss",
    "https://fr.investing.com/rss/news_2.rss",
    "https://fr.investing.com/rss/news_285.rss",
    "https://fr.investing.com/rss/news_301.rss",
    "https://fr.investing.com/rss/news_462.rss",
    "https://fr.investing.com/rss/news_1.rss",
    "https://fr.investing.com/rss/news_477.rss",
    "https://fr.investing.com/rss/news_11.rss",
    "https://fr.investing.com/rss/news_25.rss",
    "https://fr.investing.com/rss/news_95.rss",
    "https://fr.investing.com/rss/news_14.rss",
    "https://fr.investing.com/rss/news_287.rss",

    "https://fr.investing.com/rss/central_banks.rss",
]

tabLinks = list(set(tabLinks))
print(len(tabLinks))

bitcoin_count = 0

for url in tabLinks:
    # Charger le flux RSS
    feed = feedparser.parse(url)

    # Parcourir les entrées du flux RSS
    for entry in feed.entries:
        # Vérifier si le mot "bitcoin" est présent dans le titre
        if "bitcoin" in entry.title.lower():
            bitcoin_count += 1
        # Vérifier si le mot "bitcoin" est présent dans la description (summary)
        elif hasattr(entry, 'summary') and "bitcoin" in entry.summary.lower():
            bitcoin_count += 1

    # Afficher le résultat
print(f"Le mot 'bitcoin' est mentionné {bitcoin_count} fois dans le flux RSS.")