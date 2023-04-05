from http.server import BaseHTTPRequestHandler
from datetime import datetime
 
class handler(BaseHTTPRequestHandler):
 
  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    data = { "message": "Hello from Python (api/python.py)", "date": datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
    self.wfile.write(str(data).encode())
    return