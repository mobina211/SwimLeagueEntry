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
    const ss = SpreadsheetApp.getActive();
    const sheet = ss.getSheetByName("FormData") || ss.getSheets()[0];

    const ts = payload.timestamp || new Date().toISOString();
    const personal = payload.personal || {};
    const registration = payload.registration || {};
    const uploads = payload.uploads || {};

    function saveImageToDrive(dataUrl, filenamePrefix) {
      if (!dataUrl) return "";
      const m = dataUrl.match(/^data:(image\/[a-zA-Z+.-]+);base64,(.+)$/);
      if (!m) return "";
      const contentType = m[1];
      const b64 = m[2];
      const bytes = Utilities.base64Decode(b64);
      const blob = Utilities.newBlob(bytes, contentType, filenamePrefix + "-" + new Date().getTime());
      const file = DriveApp.createFile(blob);
      // make link viewable by anyone with link:
      try {
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      } catch (shareErr) {
      }
      return file.getUrl();
    }

    const insuranceUrl = saveImageToDrive(uploads.insurance, "insurance");
    const idcardUrl = saveImageToDrive(uploads.idcard, "idcard");
    const receiptUrl = saveImageToDrive(uploads.receipt, "receipt");
    


    // columns: timestamp, name, nationalCode, eventTitle, raceName, fee, insuranceUrl, idcardUrl, receiptUrl, rawRegistrationJSON
    sheet.appendRow([
      ts,
      personal.name || "",
      personal.fatherName || "",
      personal.nationalCode || "",
      personal.schoolName || "",
      personal.coachName || "",
      personal.birthYear || "",
      personal.phone || "",
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
```
