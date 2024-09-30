from flask import Flask, render_template, request, jsonify
app = Flask(__name__)
# Route for the home page
@app.route('/')
def home():
    return render_template('index.html')
# Route for the Programs page
@app.route('/programs')
def programs():
    return render_template('programs.html')
@app.route('/submit-newsletter', methods=['POST'])
def submit_newsletter():
    data = request.get_json()
    email = data.get('email')
    print (f"Received email for newsletter subscription: (email)")
    return jsonify({'status': 'success', 'message': 'Subscription successful'})
    return render_template('dash.html', status_data=status_data)
if __name__ == "__main__":
    app.run(debug=True)