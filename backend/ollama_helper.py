import requests

def query_ollama(prompt):
    res = requests.post("http://localhost:11434/api/generate", json={
        "model": "mistral",
        "prompt": prompt
    })
    return res.json()["response"]
