from bs4 import BeautifulSoup
import requests

html_text=requests.get('https://finance.yahoo.com/quote/HDB?p=HDB&.tsrc=fin-srch').text
soup=BeautifulSoup(html_text,'lxml')