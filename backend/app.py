from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

products = [
    {
        "id": 1,
        "name": "Product 1",
        "description": "Description for Product 1",
        "price": 10.99,
        "image": "images/product1.png",
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "Description for Product 2",
        "price": 20.99,
        "image": "images/product2.jpg",
    },
    {
        "id": 3,
        "name": "Product 3",
        "description": "Description for Product 3",
        "price": 10.99,
        "image": "images/product3.jpg",
    },
    {
        "id": 4,
        "name": "Product 4",
        "description": "Description for Product 4",
        "price": 10.99,
        "image": "images/product4.jpg",
    },
    {
        "id": 5,
        "name": "Product 5",
        "description": "Description for Product 5",
        "price": 10.99,
        "image": "images/product5.jpg",
    },
    {
        "id": 6,
        "name": "Product 6",
        "description": "Description for Product 6",
        "price": 10.99,
        "image": "images/product6.jpg",
    },
    {
        "id": 7,
        "name": "Product 7",
        "description": "Description for Product 7",
        "price": 10.99,
        "image": "images/product7.jpg",
    },
    {
        "id": 8,
        "name": "Product 8",
        "description": "Description for Product 8",
        "price": 10.99,
        "image": "images/product8.jpg",
    },
    {
        "id": 9,
        "name": "Product 9",
        "description": "Description for Product 9",
        "price": 10.99,
        "image": "images/product9.jpg",
    },
    {
        "id": 10,
        "name": "Product 10",
        "description": "Description for Product 10",
        "price": 10.99,
        "image": "images/product10.jpg",
    },
]

def load_users():
    with open('backend/users.json', 'r') as f:
        return json.load(f)

# TODO: write actual app.py with CRUD functionality
# products list goes in app.py

# Create (POST) - add a new user
@app.route('/LoginPage', methods=['POST'])
def loginUser():
    data = request.get_json()
    entered_username = data['username']
    entered_password = data['password']
    users = load_users()
    
    for user in users:
        if user['username'] == entered_username and user['password'] == entered_password:
            return jsonify({"loggedIn": True, "message": "Logged in successfully"})
    
    return jsonify({"loggedIn": False, "message": 'Invalid username or password'})

# Read (GET) - fetch all products or specific product by ID
@app.route('/SignupForm', methods=['GET'])


# PUT (UPDATE) - update a product by ID

# DELETE (DELETE) - delete a product by ID


# run Flask app including following code at end of server.py
if __name__ == "__main__":
    app.run(debug=True)