from flask import Flask, jsonify
import my_global_copy

app = Flask(__name__)

# Définir la route API
@app.route('/api/data', methods=['GET'])
def get_api_data():
    # Logique de traitement des données
    data = my_global_copy.getDatas()
    return jsonify({'data': data})
    
if __name__ == '__main__':
    # Exécutez le serveur sur le port 5000 en mode debug
    app.run(debug=True, port=5000)
