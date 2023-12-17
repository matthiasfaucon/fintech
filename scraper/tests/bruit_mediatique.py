from textblob import TextBlob

# Exemple de texte (remplacez cela par votre propre texte)
text = "Amazon"

# Analyse de sentiment
blob = TextBlob(text)
sentiment = blob.sentiment

# Affichage des résultats
print("Texte:", text)
print("Sentiment:", sentiment)
