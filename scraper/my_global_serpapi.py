import time
from datetime import datetime, timedelta
import feedparser
from textblob import TextBlob
from requests.exceptions import RetryError, HTTPError
from serpapi import GoogleSearch
import pytz

results = {}

# Fonction pour extraire le nombre de mentions d'un mot clé dans un flux RSS
def count_mentions(url, keyword, tabSentiments):
    mentions_count = 0
    # Charger le flux RSS
    feed = feedparser.parse(url)

    # Parcourir les entrées du flux RSS
    for entry in feed.entries:
        # Vérifier si le mot-clé est présent dans le titre
        if keyword in entry.title.lower():
            mentions_count += 1
            # Analyse de sentiment pour le titre
            blob = TextBlob(entry.title)
            sentiment = blob.sentiment
            tabSentiments.append(sentiment)
        # Vérifier si le mot-clé est présent dans la description (summary)
        elif hasattr(entry, 'summary') and keyword in entry.summary.lower():
            mentions_count += 1
            # Analyse de sentiment pour la description
            blob = TextBlob(entry.summary)
            sentiment = blob.sentiment
            tabSentiments.append(sentiment)

    # Retourner le nombre de mentions
    return mentions_count

# Fonction pour obtenir le nombre de mentions d'un mot clé à partir de Google Trends
def get_google_trends_occurrence(keyword):
    
    # Obtenez le fuseau horaire pour la France
    tz_paris = pytz.timezone('Europe/Paris')

    # Obtenez l'offset horaire actuel (prend en compte l'heure d'été)
    offset_hours = str(tz_paris.utcoffset(datetime.now()).seconds // 3600)
    print(offset_hours)

    params = {
        "engine": "google_trends",
        "tz": offset_hours,
        "q": keyword,
        "geo": "FR",
        "cat": "1138",
        "date": "now 1-H",
        "data_type": "TIMESERIES",
        "api_key": "8a547b124e0c6f4d841e491cdb5b3f42963fc26b8fcfb0dba371b77a7a23bffd"
    }

    search = GoogleSearch(params)
    results = search.get_dict()
    data_google_trends = results['interest_over_time']['timeline_data']
    # Assuming 'data_google_trends' is your list of dictionaries
    keyword_count_google_trends = sum(int(entry['values'][0]['value']) if entry['values'][0]['value'].isdigit() else 0 for entry in data_google_trends)
    print(keyword)
    print(keyword_count_google_trends)

    return keyword_count_google_trends, data_google_trends

def get_data_for_keywords(keywords):
    # Liste des liens RSS
    tabLinks = [
        #! Les Echos => Article Français
        # "https://services.lesechos.fr/rss/les-echos-economie.xml",
        # "https://services.lesechos.fr/rss/les-echos-finance-marches.xml",
        # "https://services.lesechos.fr/rss/les-echos-entreprises.xml",
        # "https://services.lesechos.fr/rss/les-echos-idees.xml",
        # "https://services.lesechos.fr/rss/les-echos-weekend.xml",
        # "https://services.lesechos.fr/rss/les-echos-monde.xml",
        # "https://services.lesechos.fr/rss/les-echos-patrimoine.xml",
        # "https://services.lesechos.fr/rss/les-echos-politique.xml",
        # "https://services.lesechos.fr/rss/les-echos-regions.xml",
        # "https://services.lesechos.fr/rss/les-echos-start-up.xml",
        # "https://services.lesechos.fr/rss/les-echos-tech-medias.xml"

        #! Investing => Article Anglais
        "https://www.investing.com/rss/news_159.rss",

        "https://www.investing.com/rss/market_overview.rss",
        "https://www.investing.com/rss/market_overview_Technical.rss",
        "https://www.investing.com/rss/market_overview_Fundamental.rss",
        "https://www.investing.com/rss/market_overview_Opinion.rss",
        "https://www.investing.com/rss/market_overview_investing_ideas.rss",

        "https://www.investing.com/rss/news_302.rss",

        "https://www.investing.com/rss/forex.rss",
        "https://www.investing.com/rss/forex_Technical.rss",
        "https://www.investing.com/rss/forex_Fundamental.rss",
        "https://www.investing.com/rss/forex_Opinion.rss",
        "https://www.investing.com/rss/forex_Signals.rss",

        "https://www.investing.com/rss/286.rss",
        "https://www.investing.com/rss/290.rss",

        # "https://www.investing.com/rss/stock.rss",
        # "https://www.investing.com/rss/stock_Technical.rss",
        # "https://www.investing.com/rss/stock_Fundamental.rss",
        # "https://www.investing.com/rss/stock_Opinion.rss",
        # "https://www.investing.com/rss/stock_stock_picks.rss",
        # "https://www.investing.com/rss/stock_Stocks.rss",
        # "https://www.investing.com/rss/stock_Indices.rss",
        # "https://www.investing.com/rss/stock_Futures.rss",
        # "https://www.investing.com/rss/stock_Options.rss",

        # "https://www.investing.com/rss/commodities.rss",
        # "https://www.investing.com/rss/commodities_Technical.rss",
        # "https://www.investing.com/rss/commodities_Fundamental.rss",
        # "https://www.investing.com/rss/commodities_Opinion.rss",
        # "https://www.investing.com/rss/commodities_Strategy.rss",
        # "https://www.investing.com/rss/commodities_Metals.rss",
        # "https://www.investing.com/rss/commodities_Energy.rss",
        # "https://www.investing.com/rss/commodities_Agriculture.rss",

        # "https://www.investing.com/rss/bonds.rss",
        # "https://www.investing.com/rss/bonds_Technical.rss",
        # "https://www.investing.com/rss/bonds_Fundamental.rss",
        # "https://www.investing.com/rss/bonds_Opinion.rss",
        # "https://www.investing.com/rss/bonds_Strategy.rss",
        # "https://www.investing.com/rss/bonds_Government.rss",
        # "https://www.investing.com/rss/bonds_Corporate.rss"

        # "https://www.investing.com/rss/news.rss",
        # "https://www.investing.com/rss/news_2.rss",
        # "https://www.investing.com/rss/news_285.rss",
        # "https://www.investing.com/rss/news_301.rss",
        # "https://www.investing.com/rss/news_462.rss",
        # "https://www.investing.com/rss/news_1.rss",
        # "https://www.investing.com/rss/news_477.rss",
        # "https://www.investing.com/rss/news_11.rss",
        # "https://www.investing.com/rss/news_25.rss",
        # "https://www.investing.com/rss/news_95.rss",
        # "https://www.investing.com/rss/news_14.rss",
        # "https://www.investing.com/rss/news_287.rss",

        "https://www.investing.com/rss/central_banks.rss",
    ]

    # Supprimer les doublons de la liste des liens
    tabLinks = list(set(tabLinks))

    # Initialiser la somme totale
    total_mentions = 0
    tab_sentiments = {}

    # Parcourir chaque mot clé
    for keyword in keywords:
        keyword_count_rss = 0
        # Parcourir chaque lien RSS
        for url in tabLinks:
            keyword_count_rss += count_mentions(url, keyword, tab_sentiments.setdefault(keyword, []))

        # Utiliser l'API Google Trends
        keyword_count_google_trends, data_google_trends = get_google_trends_occurrence(keyword)

        # Ajouter le nombre de mentions du mot clé à partir de Google Trends à la somme totale
        total_mentions = keyword_count_rss + keyword_count_google_trends

        # Analyse de sentiment avec TextBlob
        average_polarity = 0
        average_subjectivity = 0
        if tab_sentiments[keyword]:
            average_polarity = sum(sentiment.polarity for sentiment in tab_sentiments[keyword]) / len(tab_sentiments[keyword])
            average_subjectivity = sum(sentiment.subjectivity for sentiment in tab_sentiments[keyword]) / len(tab_sentiments[keyword])

        # Ajouter les résultats à la liste
        results[keyword] = [{
            'mentions': total_mentions,
            'polarity': average_polarity,
            'subjectivity': average_subjectivity,
            'google_trends': data_google_trends  # Convertir DataFrame en dictionnaire
        }]

    return results

def getDatas():
    # Liste des mots clés à analyser
    keywords_to_analyze = ["bitcoin", "gold", "petrol", "s&p 500"]

    results = get_data_for_keywords(keywords_to_analyze)

    # Afficher les résultats
    return results
