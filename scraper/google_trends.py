import time
from pytrends.request import TrendReq
from datetime import datetime, timedelta

pytrends = TrendReq(hl='fr-FR', tz=360)
kw_list = ["Python", "Data Science"]

try:
    # Construire la requête pour aujourd'hui
    today = datetime.today().strftime('%Y-%m-%d')
    yesterday = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')

    pytrends.build_payload(kw_list, timeframe="now 1-H", geo='')
    data = pytrends.interest_over_time()
    print(data)

except Exception as e:
    if "429" in str(e):
        print("Too many requests. Waiting for 1 minute.")
        time.sleep(60)
        pytrends.build_payload(kw_list, timeframe="now 1-H", geo='')
        data = pytrends.interest_over_time()
        print(data)
    else:
        print(f"An error occurred: {e}")


