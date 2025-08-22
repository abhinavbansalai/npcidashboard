import sqlite3

def get_connection():
    conn = sqlite3.connect("circulars.db")
    conn.row_factory = sqlite3.Row
    return conn

def get_circulars(query: str):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        "SELECT title, date, url, snippet FROM circulars WHERE title LIKE ? OR content LIKE ? LIMIT 20",
        (f"%{query}%", f"%{query}%"),
    )
    rows = cur.fetchall()
    conn.close()
    return [dict(r) for r in rows]
