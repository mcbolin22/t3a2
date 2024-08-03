import requests
from bs4 import BeautifulSoup

url = "https://www.espn.com.au/nrl/"
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

scores = soup.find_all('div', class_='score')
upcoming_matches = soup.find_all('div', class_='match')

for score in scores:
    home_team = score.find('span', class_='home-team').text
    away_team = score.find('span', class_='away-team').text
    score = score.find('span', class_='score-value').text
    # Process the extracted data

for match in upcoming_matches:
    home_team = match.find('span', class_='home-team').text
    away_team = match.find('span', class_='away-team').text
    date = match.find('span', class_='match-date').text
    # Process the extracted data

NRL_XPATH: "/html/body/div[5]/section[2]/section/div/section[2]/section[1]/div"


