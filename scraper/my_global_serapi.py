import time
from datetime import datetime, timedelta
import feedparser
from textblob import TextBlob
from requests.exceptions import RetryError, HTTPError
from serpapi import GoogleSearch

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
            print(tabSentiments)

    print(mentions_count)
    # Retourner le nombre de mentions
    return mentions_count

# Fonction pour obtenir le nombre de mentions d'un mot clé à partir de Google Trends
def get_google_trends_occurrence(keyword):
    # Construire la requête pour aujourd'hui
    params = {
        "engine": "google_trends",
        "tz": "-12",
        "q": keyword,
        "geo": "FR",
        "cat": "1138",
        "date": "now 1-H",
        "data_type": "TIMESERIES",
        "api_key": "8b44f3cbcb9de1f0945bf35874036fe5c72cd71cdd932154fef0b890d20eb590"
    }

    search = GoogleSearch(params)
    results = search.get_dict()
    print(results)
    data_google_trends = results['interest_over_time']['timeline_data']
    # Assuming 'data_google_trends' is your list of dictionaries
    keyword_count_google_trends = sum(int(entry['values'][0]['value']) if entry['values'][0]['value'].isdigit() else 0 for entry in data_google_trends)

    return keyword_count_google_trends, data_google_trends

def get_data_for_keywords(keywords):
    # Liste des liens RSS
    tabLinks = [
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

    # Initialiser la somme totale
    total_mentions = 0
    tab_sentiments = {}

    # Parcourir chaque mot clé
    for keyword in keywords:
        print(keyword)
        keyword_count_rss = 0
        # Parcourir chaque lien RSS
        for url in tabLinks:
            keyword_count_rss += count_mentions(url, keyword, tab_sentiments.setdefault(keyword, []))

        # Utiliser l'API Google Trends
        keyword_count_google_trends, data_google_trends = get_google_trends_occurrence(keyword)

        # Ajouter le nombre de mentions du mot clé à partir de Google Trends à la somme totale
        total_mentions = keyword_count_rss + keyword_count_google_trends

        print("Total mentions: " + str(total_mentions))

        # Analyse de sentiment avec TextBlob
        average_polarity = 0
        average_subjectivity = 0
        print(tab_sentiments)
        if tab_sentiments[keyword]:
            average_polarity = sum(sentiment.polarity for sentiment in tab_sentiments[keyword]) / len(tab_sentiments[keyword])
            average_subjectivity = sum(sentiment.subjectivity for sentiment in tab_sentiments[keyword]) / len(tab_sentiments[keyword])

        # Ajouter les résultats à la liste
        if keyword in results:
            results[keyword].append({
                'mentions': total_mentions,
                'polarity': average_polarity,
                'subjectivity': average_subjectivity,
                'google_trends': data_google_trends  # Convertir DataFrame en dictionnaire
            })
        else:
            results[keyword] = [{
                'mentions': total_mentions,
                'polarity': average_polarity,
                'subjectivity': average_subjectivity,
                'google_trends': data_google_trends  # Convertir DataFrame en dictionnaire
            }]

    return results

def getDatas():
    # Liste des mots clés à analyser
    keywords_to_analyze = ["bitcoin", "gold", "petrol"]

    print("coucou")

    # Exécutez la fonction
    results = get_data_for_keywords(keywords_to_analyze)

    # Afficher les résultats
    return results
