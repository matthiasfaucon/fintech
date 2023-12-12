from flask import Flask, jsonify
from pytrends.request import TrendReq
from datetime import datetime, timedelta
import feedparser

app = Flask(__name__)

# Fonction pour extraire le nombre de mentions du mot "bitcoin" dans un flux RSS
def count_bitcoin_mentions(url):
    bitcoin_count = 0
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
    return bitcoin_count

# Fonction pour obtenir le nombre de mentions de "bitcoin" à partir de Google Trends
def get_google_trends_occurrence(words):
    # Construire la requête pour aujourd'hui
    pytrends.build_payload(words, timeframe="now 1-H", geo='')
    data = pytrends.interest_over_time()
    # Récupérer la valeur d'intérêt pour "bitcoin" à l'instant actuel
    bitcoin_interest_google_trends = data["bitcoin"].iloc[-1]
    bitcoin_count_google_trends = sum(data["bitcoin"])

    print(f"Le mot 'bitcoin' est mentionné {bitcoin_interest_google_trends} fois dans Google Trends.")
    print(data)
    return bitcoin_count_google_trends

# Liste des liens RSS
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

# Supprimer les doublons de la liste des liens
tabLinks = list(set(tabLinks))

# Afficher le nombre total de liens RSS
print(f"Nombre total de liens RSS : {len(tabLinks)}")

# Initialiser la somme totale
total_mentions = 0

# Définir une route pour l'API
@app.route('/api/bitcoin_mentions', methods=['GET'])
def get_bitcoin_mentions():
    # Initialiser la somme totale
    total_mentions = 0

    # Parcourir chaque lien RSS
    for url in tabLinks:
        bitcoin_count_rss = count_bitcoin_mentions(url)
        # Ajouter le nombre de mentions de "bitcoin" dans le flux RSS à la somme totale
        total_mentions += bitcoin_count_rss

    # Utiliser l'API Google Trends
    pytrends = TrendReq(hl='fr-FR', tz=360)
    kw_list = ["bitcoin"]
    bitcoin_count_google_trends = get_google_trends_occurrence(kw_list)

    # Ajouter le nombre de mentions de "bitcoin" à partir de Google Trends à la somme totale
    total_mentions += bitcoin_count_google_trends

    # Retourner les résultats au format JSON
    return jsonify({"total_mentions": total_mentions})

if __name__ == '__main__':
    app.run(debug=True, port = 5000)
