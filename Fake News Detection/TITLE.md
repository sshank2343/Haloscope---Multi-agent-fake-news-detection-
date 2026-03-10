# 🚀 Haloscope Chrome Extension - Complete Setup

## ⚡ Quick Start (5 Minutes)

### Step 1: Install Required Packages
```bash
pip install flask flask-cors beautifulsoup4 requests langdetect nltk
```

### Step 2: Create Project Folders
```bash
mkdir haloscope_project
cd haloscope_project
mkdir haloscope_backend
mkdir haloscope_extension
```

### Step 3: Copy Files

#### Backend Files (save in `haloscope_backend/`)
1. **backend_api.py** - Flask server (see artifact)

#### Extension Files (save in `haloscope_extension/`)
1. **manifest.json** - Extension configuration
2. **popup.html** - UI interface
3. **popup.js** - Frontend logic
4. **background.js** - Background worker
5. **icon.png** - Extension icon (optional, can skip)

### Step 4: Start Backend Server
```bash
cd haloscope_backend
python backend_api.py
```

You should see:
```
🚀 HALOSCOPE API SERVER STARTING
📍 Server running on: http://127.0.0.1:5000
```

**Keep this terminal window open!**

### Step 5: Load Extension in Chrome

1. Open Chrome and go to: **chrome://extensions/**
2. Toggle **Developer mode** ON (top-right corner)
3. Click **"Load unpacked"**
4. Select your `haloscope_extension/` folder
5. Extension should appear in your extensions list!

### Step 6: Pin Extension
1. Click puzzle icon 🧩 in Chrome toolbar
2. Find "Haloscope"
3. Click pin 📌 to keep it visible

### Step 7: Test It! 🎉

1. Visit any news article (try: https://www.bbc.com/news)
2. Click the Haloscope extension icon
3. Click **"Analyze Current Page"**
4. Wait 5-10 seconds for results!

---

## 📁 Final Folder Structure

```
haloscope_project/
│
├── haloscope_backend/
│   ├── backend_api.py
│   ├── sources.db (created automatically)
│   └── timeline.db (created automatically)
│
└── haloscope_extension/
    ├── manifest.json
    ├── popup.html
    ├── popup.js
    ├── background.js
    └── icon.png (optional)
```

---

## ✅ Checklist

Before testing, verify:

- [ ] Flask installed (`pip show flask`)
- [ ] Backend running (terminal shows "Server running")
- [ ] Extension loaded in Chrome
- [ ] Extension icon visible in toolbar
- [ ] No errors in browser console (F12)

---

## 🧪 Test URLs

Try these websites to test the analyzer:

**High Credibility:**
- https://www.reuters.com
- https://www.bbc.com/news
- https://www.apnews.com

**Wikipedia:**
- https://en.wikipedia.org/wiki/Artificial_intelligence
- https://en.wikipedia.org/wiki/Climate_change

**News Articles:**
- Any article from reputable news sources

---

## 🐛 Troubleshooting

### "Connection refused" error
- ✅ Make sure backend is running: `python backend_api.py`
- ✅ Check terminal for errors
- ✅ Test health endpoint: visit http://127.0.0.1:5000/health in browser

### "Failed to extract content"
- ✅ Some sites block scrapers (try different URL)
- ✅ Wikipedia works best for testing
- ✅ Check if site requires login/paywall

### Extension not showing in Chrome
- ✅ Verify all 4 files are in extension folder
- ✅ Check manifest.json syntax (no trailing commas)
- ✅ Click "Errors" button in chrome://extensions/ to see issues

### Port 5000 already in use
```bash
# Change port in backend_api.py
app.run(host='0.0.0.0', port=5001, debug=True)

# Also update popup.js
const API_URL = 'http://127.0.0.1:5001/analyze';
```

---

## 🎨 Create Extension Icon (Optional)

If you want a custom icon:

1. Create a 128x128 PNG image
2. Save as `icon.png` in extension folder
3. Or use this emoji as PNG: 🔍

Or skip it - Chrome will use a default icon.

---

## 🔍 Debugging Tips

### Check Backend Logs
Watch terminal where backend_api.py is running - you'll see requests and errors

### Check Extension Console
1. Right-click extension icon
2. Select "Inspect popup"
3. Check Console tab for JavaScript errors

### Test Backend Directly
```bash
curl -X POST http://127.0.0.1:5000/analyze \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.bbc.com/news"}'
```

---

## 🚀 Next Steps

### Enhance Your Extension
- Add history of analyzed pages
- Export reports as PDF
- Add more credibility sources
- Custom scoring algorithms
- Browser notifications for low-credibility sites

### Deploy for Others
1. **Backend:** Deploy to Heroku, Railway, or Render
2. **Extension:** Package and submit to Chrome Web Store

---

## 💬 Need Help?

Common issues and solutions:

**Q: Can I analyze pages that require login?**
A: No, the scraper can't access authenticated content

**Q: Why is Wikipedia rated lower than Reuters?**
A: Wikipedia is community-edited, so it gets 0.85 vs Reuters' 0.95

**Q: Can I add my own trusted sources?**
A: Yes! Edit the database initialization in backend_api.py

**Q: Does it work offline?**
A: No, it needs internet to fetch and analyze pages

**Q: Is my data stored?**
A: No, analysis happens in real-time, nothing is saved

---

## 🎉 Success!

If you see results with trust scores and claims, you're done!

Your extension is now analyzing news articles for credibility.

**Pro tip:** Try analyzing different types of sites to see how scores vary:
- Traditional news vs blogs
- Academic papers vs opinion pieces
- Official sources vs aggregators