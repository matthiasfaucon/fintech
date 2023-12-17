import requests

url = ('https://newsapi.org/v2/everything?'
       'q=Amazon&'
       'from=2023-12-01&'
       'sortBy=popularity&'
       'apiKey=d16d94fa461f4c87990ab9a12503fdb5')

response = requests.get(url)

print(response.json())