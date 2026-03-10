# 🔍 Haloscope - News Credibility Checker

A Chrome extension powered by AI that analyzes news articles in real-time to assess credibility, detect bias, and extract factual claims. Built with Flask backend and Google Gemini AI.

---

## 🌟 Features

- **Real-time Analysis**: Analyze any news article with a single click
- **Credibility Scoring**: Get trust scores based on source reputation and content analysis
- **Bias Detection**: Identify potential bias in news articles
- **Claim Extraction**: Extract and evaluate factual claims from content
- **Source Verification**: Cross-reference with a database of trusted news sources
- **Timeline Analysis**: Track information consistency over time
- **Clean UI**: Simple, intuitive Chrome extension interface

---

## 🛠️ Technologies Used

### Backend
- **Flask** - Python web framework for REST API
- **Google Gemini AI** - AI-powered content analysis
- **BeautifulSoup4** - Web scraping and content extraction
- **SQLite** - Local database for sources and timeline tracking
- **NLTK** - Natural language processing
- **LangDetect** - Language identification

### Frontend
- **Chrome Extension API** (Manifest V3)
- **JavaScript** - Extension logic
- **HTML/CSS** - User interface

---

## 📁 Project Structure

```
Fake News Detection/
├── Backend/
│   ├── Untitled-1.py          # Flask API server
│   ├── sources.db              # Trusted sources database (auto-generated)
│   └── timeline.db             # Timeline tracking database (auto-generated)
│
├── extension/
│   ├── manifest.json           # Extension configuration
│   ├── popup.html              # Extension UI
│   ├── popup.js                # Frontend logic
│   └── background.js           # Background service worker
│
├── README.md                   # This file
└── TITLE.md                    # Detailed setup guide
```

---

## 🚀 Quick Start

### Prerequisites

- Python 3.7+
- Google Chrome browser
- Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

#### 1. Install Python Dependencies

```bash
pip install flask flask-cors beautifulsoup4 requests langdetect nltk
```

#### 2. Configure API Key

Open `Backend/Untitled-1.py` and add your Gemini API key:

```python
self.GEMINI_API_KEY = "your-api-key-here"
```

#### 3. Start Backend Server

```bash
cd "Backend"
python Untitled-1.py
```

You should see:
```
🚀 HALOSCOPE API SERVER STARTING
📍 Server running on: http://127.0.0.1:5000
```

**Keep this terminal window open!**

#### 4. Load Chrome Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **"Load unpacked"**
4. Select the `extension/` folder
5. Pin the extension to your toolbar for easy access

---

## 💡 Usage

1. **Navigate** to any news article in Chrome
2. **Click** the Haloscope extension icon in your toolbar
3. **Click** "Analyze Current Page" button
4. **Wait** 5-10 seconds for AI analysis
5. **Review** the credibility score, bias assessment, and extracted claims

### Best Results With:
- ✅ Reuters, BBC, AP News
- ✅ Wikipedia articles
- ✅ Traditional news outlets
- ✅ Public blogs and opinion pieces

### May Not Work With:
- ❌ Paywalled content
- ❌ Login-required pages
- ❌ Heavy JavaScript-rendered sites
- ❌ Sites that block web scrapers

---

## 🧪 Testing

Try these URLs to test the analyzer:

**High Credibility Sources:**
- https://www.reuters.com
- https://www.bbc.com/news
- https://www.apnews.com

**Informational:**
- https://en.wikipedia.org/wiki/Artificial_intelligence
- https://en.wikipedia.org/wiki/Climate_change

---

## 🔧 Configuration

### Change Backend Port

If port 5000 is in use, modify:

**In `Backend/Untitled-1.py`:**
```python
app.run(host='0.0.0.0', port=5001, debug=True)
```

**In `extension/popup.js`:**
```javascript
const API_URL = 'http://127.0.0.1:5001/analyze';
```

### Add Custom Trusted Sources

Edit the database initialization in `Backend/Untitled-1.py` to add your own trusted sources with custom credibility scores.

---

## 🐛 Troubleshooting

### Connection Refused Error
- ✅ Ensure backend server is running
- ✅ Check for errors in terminal
- ✅ Test health endpoint: http://127.0.0.1:5000/health

### Failed to Extract Content
- ✅ Try a different URL (some sites block scrapers)
- ✅ Wikipedia works best for testing
- ✅ Check if site requires login or has paywall

### Extension Not Showing
- ✅ Verify all files are in `extension/` folder
- ✅ Check `manifest.json` syntax
- ✅ Look for errors in `chrome://extensions/`

### API Key Issues
- ✅ Verify Gemini API key is correct
- ✅ Check API quota limits
- ✅ Ensure billing is enabled (if required)

---

## 🔍 How It Works

1. **Content Extraction**: BeautifulSoup scrapes article text from the URL
2. **Source Verification**: Cross-references domain against trusted sources database
3. **AI Analysis**: Gemini AI evaluates content for bias and credibility
4. **Claim Extraction**: NLP extracts factual claims from the text
5. **Score Calculation**: Combines source reputation + content analysis
6. **Timeline Check**: Validates information consistency over time
7. **Results Display**: Shows comprehensive analysis in extension popup

---

## 🎯 Future Enhancements

- [ ] Analysis history tracking
- [ ] PDF report export
- [ ] Real-time bias notifications
- [ ] Custom scoring algorithms
- [ ] Multi-language support
- [ ] Browser notification system
- [ ] Integration with fact-checking APIs
- [ ] Social media post analysis
- [ ] Collaborative source rating

---

## 🚢 Deployment

### Backend Deployment
Deploy the Flask API to:
- **Heroku** - Simple Python app deployment
- **Railway** - Modern hosting platform
- **Render** - Free tier available
- **Google Cloud Run** - Serverless container platform

### Extension Publishing
1. Package extension as `.zip`
2. Create developer account on Chrome Web Store
3. Submit for review
4. Set pricing (free or paid)

---

## 📝 License

This project is provided as-is for educational and personal use.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 💬 Support


For issues or questions:
- Check the troubleshooting section above
- Review browser console logs (F12)
- Check backend terminal output for errors

---

## ⚠️ Disclaimer

This tool provides credibility analysis based on:
- Source reputation databases
- AI-powered content analysis
- Pattern recognition algorithms

**It should not be considered as:**
- Definitive truth verification
- Replacement for critical thinking
- Professional fact-checking service

Always verify important information through multiple trusted sources.

---

## 🎉 Acknowledgments

- Google Gemini AI for content analysis
- Flask and Python community
- Chrome Extensions documentation


---

**Built with ❤️ for a more informed internet**
