from flask import Flask, render_template, request
from googletrans import Translator

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("ex.html")

@app.route("/translate", methods=["GET"])
def translate():
    api_key = "AIzaSyAJ_l06YzIg7vLkxKuVyddXdsFTpaBZiCc"
    translator = Translator(service_urls=['translate.google.com'])
    text = request.args.get("text")
    target_language = "ko"

    try:
        translation = translator.translate(text, dest=target_language)
        translated_text = translation.text
        return f"Translation: {translated_text}"
    except Exception as e:
        return f"Error: {e}"

if __name__ == "__main__":
    app.run()