from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from database import get_circulars

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "NPCI Dashboard API running!"}

@app.get("/search")
def search_circulars(q: str = Query("", min_length=1)):
    results = get_circulars(q)
    return {"results": results}
