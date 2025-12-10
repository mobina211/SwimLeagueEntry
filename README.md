# SwimLeagueEntry

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### google app script

```javascript
function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);

    const personal = payload.personal || {};
    const registration = payload.registration || {};
    const uploads = payload.uploads || {};

    const ss = SpreadsheetApp.getActive();

    // ===============================
    // 🔥 تشخیص شیت بر اساس سن
    // ===============================
    const age = Number(personal.age || registration.age); // هرجا سن ارسال میشه

    const sheetName = getSheetNameByAge(age);
    const sheet = ss.getSheetByName(sheetName);

    if (!sheet) throw new Error("Sheet not found for age: " + age);

    const ts = payload.timestamp || new Date().toISOString();

    // ===============================
    // ذخیره تصاویر در درایو
    // ===============================
    function saveImageToDrive(dataUrl, filenamePrefix) {
      if (!dataUrl) return "";
      const m = dataUrl.match(/^data:(image\/[a-zA-Z+.-]+);base64,(.+)$/);
      if (!m) return "";
      const contentType = m[1];
      const b64 = m[2];
      const bytes = Utilities.base64Decode(b64);
      const blob = Utilities.newBlob(bytes, contentType, filenamePrefix + "-" + new Date().getTime());
      const file = DriveApp.createFile(blob);
      try {
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      } catch (shareErr) {}
      return file.getUrl();
    }

    const insuranceUrl = saveImageToDrive(uploads.insurance, "insurance");
    const idcardUrl = saveImageToDrive(uploads.idcard, "idcard");
    const receiptUrl = saveImageToDrive(uploads.receipt, "receipt");

    // ===============================
    // ذخیره در شیت مناسب
    // ===============================
    sheet.appendRow([
      ts,
      personal.name || "",
      personal.nationalCode || "",
      age || "",
      registration.eventTitle || "",
      registration.raceName || "",
      registration.fee || "",
      insuranceUrl,
      idcardUrl,
      receiptUrl,
      JSON.stringify(registration)
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}


/**
 * ===============================
 * 📌 انتخاب شیت صحیح بر اساس سن
 * ===============================
 */
function getSheetNameByAge(age) {
  if (!age) return "Unknown";

  if (age === 5 || age === 6 || age === 7) return "5-6-7";
  if (age === 8) return "8";
  if (age === 9) return "9";
  if (age === 10) return "10";
  if (age === 11) return "11";
  if (age === 12) return "12";
  if (age === 13 || age === 14) return "13-14";
  if (age === 15 || age === 16) return "15-16";
  if (age === 17 || age === 18) return "17-18";

  return "Unknown"; // اگر سن خارج از محدوده بود
}

```
