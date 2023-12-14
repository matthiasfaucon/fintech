from flask import Flask, jsonify
from flask_cors import CORS
import my_global_serapi

app = Flask(__name__)
CORS(app)

# Définir la route API
@app.route('/api/data', methods=['GET'])
def get_api_data():
    # Logique de traitement des données
    data = my_global_serapi.getDatas()
    return jsonify({'data': data})
    
if __name__ == '__main__':
    # Exécutez le serveur sur le port 5000 en mode debug
    app.run(port=5000)
