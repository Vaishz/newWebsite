from bs4 import BeautifulSoup
import requests

html_text=requests.get('https://finance.yahoo.com/quote/HDB?p=HDB&.tsrc=fin-srch').text
soup=BeautifulSoup(html_text,'lxml')
prices=soup.find('div',class_='My(6px) Pos(r) smartphone_Mt(6px) W(100%) ')
print(prices)
