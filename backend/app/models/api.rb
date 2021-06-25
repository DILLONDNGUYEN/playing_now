# require 'pry'
require 'net/http'
require 'json'

class Api 
    attr_reader :url, :token
    def initialize(url) #replace only the token with yours
        @token = "BQCtoFGvU9B5QVtzXR4TZI4DsrPCMDP6pJTzgWIuTpqCoM2W_k3ZRd_zf3l8Rcb3g7J3bSprKUn7rMYy1mM4-mbUF8440P0HFBfuF3XDc6wrWd9np2aLmFggoI8m0AoMn_3NcIL0lysw"     
        @url=url
    end

    def get_info 
        uri=URI(url)    
        new_req = Net::HTTP::Get.new(uri)
        new_req['Authorization'] = "Bearer #{token}" 
        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = (uri.scheme == "https")
        response = http.request(new_req)
        return JSON(response.body)
    end

    def make_songs 
      get_info["tracks"].each do |t|
               
        title=t["name"]
        album_name = t['album']['name']
        popularity= t["popularity"]
        duration= t["duration_ms"]
        artists= t["artists"].map{|a| a['name']}.join(", ")
        # binding.pry
            Song.find_or_create_by(title: title, duration: duration, popularity: popularity, artists: artists, album_name: album_name)
        end
    end
end
# RUN THE FILE MANUALLY INSIDE THE RAILS CONSOLE
api = Api.new("https://api.spotify.com/v1/tracks?ids=3p2AAdoIgkuhoMLvWV10I9%2C10vyyepEcYPL7AD3m1TIoZ%2C2wtu98VfwtbCaEZ5eyhapV%2C4X0cCyJGd7XCCqVg8yEnU0%2C1PuJuMAkJ0qemOt6gxUQre%2C4L4ILWdhar79Iz3U7U5NVL%2C0Z5JTLnZVLcd83gmTZFM7u%2C38Oh09tTLn9covfXohA6jv%2C6SpViDXuXKTkEjjAadifHd%2C6EoAOLWwvspnwBnnajl535%2C0jd2DUOlAwxd12xv3B1cuk%2C2jKQ3Ue8AFWiA7vXl8EVRF%2C7Jr2Vk4ucuVvRP6cxMN9KD%2C7vhYud0viPBMa3oT79OJWS%2C1PHv6GHmSfjxfh1GdIFeUT%2C4y9phzUr1NTWL0svsJ0J4O%2C7jXpT1oYyn2GrZ12rs2zMd%2C7hLkDalB7aeSf9C7lNx3tL%2C0kqU88MM0db5pweiGvQJco%2C5N1TjHHPqNC42xyctpHsAo%2C5lCxw6AwRXriR8LlONMgZU%2C6nvPJAevTXcnyMpGEzJDBz%2C2h28nLnjUFMgVqZ43vbJoh%2C2RPwwY7Tjeole8DLxTTn9x%2C7cD9b8vreLPBS7YciYnn69%2C3xorPFIW9WaAsu2nBmJjag%2C4Pu0LxzUuRjbss267gLtaY%2C0t9qCCY7taZcx3LSz0PW9F%2C7GJZub0IUYXMQlNQyRUteg%2C664AkZ4BMCDfER8P7LEkfh%2C0yXD8BJamvaQvu7Ut3nHMB%2C0ZvXgpmQhnGOLEgM6wxDOA%2C3UN5yPcQWVqYukYBl2PNmr%2C6GcmZciRohvqC8ZUZYj4YI")
api.make_songs


##tracks##
## 3p2AAdoIgkuhoMLvWV10I9
## 10vyyepEcYPL7AD3m1TIoZ
## 2wtu98VfwtbCaEZ5eyhapV
## 4X0cCyJGd7XCCqVg8yEnU0
## 1PuJuMAkJ0qemOt6gxUQre
## 4L4ILWdhar79Iz3U7U5NVL
## 0Z5JTLnZVLcd83gmTZFM7u
## %2C38Oh09tTLn9covfXohA6jv
## %2C6SpViDXuXKTkEjjAadifHd
## %2C6EoAOLWwvspnwBnnajl535
## %2C0jd2DUOlAwxd12xv3B1cuk
## %2C2jKQ3Ue8AFWiA7vXl8EVRF
## %2C7Jr2Vk4ucuVvRP6cxMN9KD
## %2C7vhYud0viPBMa3oT79OJWS
## %2C1PHv6GHmSfjxfh1GdIFeUT
## %2C4y9phzUr1NTWL0svsJ0J4O
## %2C7jXpT1oYyn2GrZ12rs2zMd
## %2C7hLkDalB7aeSf9C7lNx3tL
## %2C0kqU88MM0db5pweiGvQJco
## %2C5N1TjHHPqNC42xyctpHsAo
## %2C5lCxw6AwRXriR8LlONMgZU
## %2C6nvPJAevTXcnyMpGEzJDBz
## %2C2h28nLnjUFMgVqZ43vbJoh
## %2C2RPwwY7Tjeole8DLxTTn9x
## %2C7cD9b8vreLPBS7YciYnn69
## %2C3xorPFIW9WaAsu2nBmJjag
## %2C4Pu0LxzUuRjbss267gLtaY
## %2C0t9qCCY7taZcx3LSz0PW9F
## %2C7GJZub0IUYXMQlNQyRUteg
## %2C664AkZ4BMCDfER8P7LEkfh
## %2C0yXD8BJamvaQvu7Ut3nHMB
## %2C0ZvXgpmQhnGOLEgM6wxDOA
## %2C3UN5yPcQWVqYukYBl2PNmr
## %2C6GcmZciRohvqC8ZUZYj4YI