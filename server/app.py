import os
import hashlib
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import sqlite3

app = Flask(__name__)
CORS(app)
bcrypt = Bcrypt(app)

def hash_email(email: str) -> str:
    return hashlib.sha256(email.strip().lower().encode('utf-8')).hexdigest()

def init_db():
    os.makedirs("db", exist_ok=True)
    conn = sqlite3.connect('db/users.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            session_id TEXT,
            dir_name TEXT
        )
    ''')
    conn.commit()
    conn.close()

@app.route("/enter", methods=["POST"])
def enter():
    try:
        data = request.form
        raw_email = data.get("email", "")
        password = data.get("password", "")
        session_id = data.get("session_id", "")
        hashed_email = hash_email(raw_email)
        conn = sqlite3.connect("db/users.db")
        cursor = conn.cursor()
        cursor.execute("SELECT password FROM users WHERE email = ?", (hashed_email,))
        result = cursor.fetchone()
        if result is None:
            return jsonify({"message": "Пользователь не зарегистрирован", "flag": False}), 404
        stored_password = result[0]
        if bcrypt.check_password_hash(stored_password, password):
            cursor.execute("UPDATE users SET session_id = ? WHERE email = ?", (session_id, hashed_email))
            conn.commit()
            return jsonify({"message": "Успешный вход", "flag": True}), 200
        else:
            return jsonify({"message": "Неверный пароль", "flag": False}), 401
    except Exception:
        return jsonify({"message": "server error", "flag": False}), 500
    finally:
        conn.close()

@app.route("/registration", methods=["POST"])
def registration():
    try:
        data = request.form
        raw_email = data.get("email", "")
        password = data.get("password", "")
        session_id = data.get("session_id", "")
        hashed_email = hash_email(raw_email)
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        conn = sqlite3.connect("db/users.db")
        cursor = conn.cursor()
        cursor.execute("SELECT 1 FROM users WHERE email = ?", (hashed_email,))
        result = cursor.fetchone()
        if result is None:
            cursor.execute('''
                INSERT INTO users (email, password, session_id, dir_name)
                VALUES (?, ?, ?, ?)
            ''', (hashed_email, hashed_password, session_id, hashed_email))
            conn.commit()
            os.makedirs(f"users_files/{hashed_email}", exist_ok=True)
            return jsonify({"message": "Вы успешно зарегистрированы", "flag": True}), 200
        else:
            return jsonify({"message": "Пользователь уже зарегистрирован", "flag": False}), 409
    except Exception:
        return jsonify({"message": "server error", "flag": False}), 500
    finally:
        conn.close()

@app.route("/guest", methods=["POST"])
def guest():
    try:
        data = request.form
        session_id = data.get("session_id", "")
        if not session_id:
            return jsonify({"message": "session_id обязателен", "flag": False}), 400
        default_email = f"guest_{session_id}@example.com"
        default_password = "guest"
        hashed_password = bcrypt.generate_password_hash(default_password).decode('utf-8')
        conn = sqlite3.connect("db/users.db")
        cursor = conn.cursor()
        cursor.execute("SELECT 1 FROM users WHERE session_id = ?", (session_id,))
        result = cursor.fetchone()
        if result is None:
            cursor.execute('''
                INSERT INTO users (email, password, session_id, dir_name)
                VALUES (?, ?, ?, ?)
            ''', (default_email, hashed_password, session_id, session_id))
            conn.commit()
            os.makedirs(f"users_files/{session_id}", exist_ok=True)
            return jsonify({"message": "Гостевой аккаунт создан", "flag": True}), 200
        else:
            return jsonify({"message": "Сессия уже существует", "flag": False}), 409
    except Exception:
        return jsonify({"message": "server error", "flag": False}), 500
    finally:
        conn.close()

def main():
    app.run(port=10000, host="0.0.0.0", debug=True)

if __name__ == "__main__":
    os.makedirs("users_files", exist_ok=True)
    init_db()
    main()