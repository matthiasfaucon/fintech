import time
from pytrends.request import TrendReq
from datetime import datetime, timedelta
import feedparser
from textblob import TextBlob
from requests.exceptions import RetryError, HTTPError

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
    # Construire la requête pour aujourd'hui
    try:
        pytrends = TrendReq(hl='fr-FR', tz=360, timeout=(10, 25), retries=2, backoff_factor=0.1,
                            requests_args={'verify': False})

        # Construction de la requête de tendance d'intérêt au fil du temps
        pytrends.build_payload([keyword], timeframe="now 1-H", geo='')

        # Récupérer les données d'intérêt au fil du temps
        data_google_trends = pytrends.interest_over_time()

        # Récupérer la valeur d'intérêt pour le mot-clé à l'instant actuel
        keyword_interest_google_trends = data_google_trends[keyword].iloc[-1]
        keyword_count_google_trends = sum(data_google_trends[keyword])

    except RetryError as e:
        print(f"Too many requests. Waiting for 1 minute. Error: {e}")
        time.sleep(60)
        return get_google_trends_occurrence(keyword)

    except HTTPError as e:
        print(f"HTTP Error. Error: {e}")
        return 0
    
    return keyword_count_google_trends, data_google_trends

def get_data_for_keywords(keywords):
    # Liste des liens RSS
    tabLinks = [
        #! Articles en français
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

        # "https://www.abcbourse.com/rss/displaynewsrss",
        # "https://www.abcbourse.com/rss/lastanalysisrss",
        # "https://www.abcbourse.com/rss/chroniquesrss",

        #! Articles en anglais
        "https://www.myfxbook.com/rss/forex-community-recent-topics",
        "https://www.myfxbook.com/rss/latest-forex-news",
        "https://www.myfxbook.com/rss/forex-economic-calendar-events",

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
        keyword_count_rss = 0
        # Parcourir chaque lien RSS
        for url in tabLinks:
            keyword_count_rss += count_mentions(url, keyword, tab_sentiments.setdefault(keyword, []))

        # Utiliser l'API Google Trends
        pytrends = TrendReq(hl='fr-FR', tz=360)
        keyword_count_google_trends, data_google_trends = get_google_trends_occurrence(keyword)

        # Ajouter le nombre de mentions du mot clé à partir de Google Trends à la somme totale
        total_mentions = keyword_count_rss + keyword_count_google_trends

        # Analyse de sentiment avec TextBlob
        average_polarity = 0
        average_subjectivity = 0
        print(tab_sentiments)
        if tab_sentiments[keyword]:
            average_polarity = sum(sentiment.polarity for sentiment in tab_sentiments[keyword]) / len(tab_sentiments[keyword])
            average_subjectivity = sum(sentiment.subjectivity for sentiment in tab_sentiments[keyword]) / len(tab_sentiments[keyword])

        # Ajouter les résultats à la liste
        results[keyword] = [{
            'mentions': total_mentions,
            'polarity': average_polarity,
            'subjectivity': average_subjectivity,
            'google_trends': data_google_trends.reset_index().to_dict(orient='records')  # Convertir DataFrame en dictionnaire
        }]

    return results

def getDatas():
    # Liste des mots clés à analyser
    keywords_to_analyze = ["bitcoin", "gold", "petrol"]

    # Exécutez la fonction
    results = get_data_for_keywords(keywords_to_analyze)

    # Afficher les résultats
    return results
