import urllib.request, urllib.error, urllib.parse

url = 'http://localhost/poker/sng.php'

response = urllib.request.urlopen(url)
webContent = response.read()

#print(webContent)

f = open('sng.html', 'wb')
f.write(webContent)
f.close


