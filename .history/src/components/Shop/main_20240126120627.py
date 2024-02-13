from bs4 import BeautifulSoup
import requests

html_text=requests.get('https://finance.yahoo.com/quote/HDB?p=HDB&.tsrc=fin-srch').text
soup=BeautifulSoup(html_text,'lxml')
prices=soup.find('fin-streamer',class_='Fw(b) Fz(36px) Mb(-4px) D(ib)')
print(prices)
