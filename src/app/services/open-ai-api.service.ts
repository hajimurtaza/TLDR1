import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviornment';

@Injectable({
  providedIn: 'root'
})
export class OpenAiApiService {

  private apiUrl = environment.apiUrl; // Update with your Node.js server URL

  constructor(private http: HttpClient) { }

  public sendMessage(message: string) {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZTczM2Y2MmItMmMwOC00MWEzLWI4MTItZmY0Y2JlNDQ4Y2NmIiwidHlwZSI6ImFwaV90b2tlbiJ9.vB_P2T2xDT473-fuublEFv7xgSEwYOoi7lUnB-H7_tQ`)
    }
    var body = {
      providers: "alephalpha",
      text: message,
      language: "en",
      fallback_providers: "",
      output_sentences:1
    }

    return this.http.post<any>("https://api.edenai.run/v2/text/summarize", body , header );
    
    
    // return this.http.get(url, header)
  }
}
