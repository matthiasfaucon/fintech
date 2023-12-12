from flask import Flask, jsonify

app = Flask(__name__)

# Définir la route API
@app.route('/api/data', methods=['GET'])
def get_api_data():
    # Logique de traitement des données
    data = {'message': 'Bienvenue sur la route API en GET !'}
    return jsonify(data)

if __name__ == '__main__':
    # Exécutez le serveur sur le port 5000 en mode debug
    app.run(debug=True, port=5000)
