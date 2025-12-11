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
    const raw = e.postData && e.postData.contents ? e.postData.contents : null;
    if (!raw) throw new Error("No post data");

    const payload = JSON.parse(raw);

    const personal = payload.personal || {};
    const reg = payload.registration || {};
    const uploads = payload.uploads || {};

    const ss = SpreadsheetApp.getActive();

    // تعیین شیت بر اساس سن (محاسبه‌ی سن از birthYear در صورت نیاز)
    const age = Number(
      personal.age ||
      (personal.birthYear ? (new Date().getFullYear() - Number(personal.birthYear)) : null)
    );

    const sheetName = getSheetNameByAge(age);
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) throw new Error("Sheet not found for age: " + age);

    const ts = payload.timestamp || new Date().toISOString();

    // helper: ذخیره تصاویر به درایو
    function saveImage(dataUrl, prefix) {
      if (!dataUrl) return "";
      const m = dataUrl.match(/^data:(image\/[a-zA-Z+.-]+);base64,(.+)$/);
      if (!m) return "";
      const contentType = m[1];
      const b64 = m[2];
      const bytes = Utilities.base64Decode(b64);
      const blob = Utilities.newBlob(bytes, contentType, prefix + "-" + Date.now());
      const file = DriveApp.createFile(blob);
      try {
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      } catch (err) {}
      return file.getUrl();
    }

    const insuranceUrl = saveImage(uploads.insurance, "insurance");
    const idcardUrl = saveImage(uploads.idcard, "idcard");
    const receiptUrl = saveImage(uploads.receipt, "receipt");

    // مقاوم‌سازی استخراج "ranks/majors"
    function normalizeMajors(candidate) {
      if (!candidate && candidate !== 0) return [];
      // اگر آرایه است
      if (Array.isArray(candidate)) {
        // ممکن است آرایه از اشیاء باشد [{code:'sine', title:'سینه'}, 'posht']
        return candidate.map(item => {
          if (!item && item !== 0) return "";
          if (typeof item === "string") return item;
          if (typeof item === "object") {
            // تلاش برای گرفتن کد یا عنوان
            return item.code || item.value || item.title || JSON.stringify(item);
          }
          return String(item);
        }).filter(Boolean);
      }

      // اگر رشته باشد: ممکن است JSON string باشد یا کاما جدا
      if (typeof candidate === "string") {
        const s = candidate.trim();
        // تلاش برای parse کردن JSON
        if ((s.startsWith("[") && s.endsWith("]")) || (s.startsWith("{") && s.endsWith("}"))) {
          try {
            const p = JSON.parse(s);
            return normalizeMajors(p);
          } catch (err) {
            // not JSON, ادامه
          }
        }
        // اگر با ویرگول فارسی یا لاتین جدا شده
        const parts = s.split(/\s*[,،]\s*/).map(x => x.trim()).filter(Boolean);
        if (parts.length > 1) return parts;
        // در غیر اینصورت یک رشته منفرد است
        return [s];
      }

      // اگر شیء منفرد باشد
      if (typeof candidate === "object") {
        // تلاش برای گرفتن فیلدهای معمول
        if (candidate.code || candidate.title) {
          return [candidate.code || candidate.title];
        }
        // fallback: stringify
        return [JSON.stringify(candidate)];
      }

      // fallback: تبدیل به رشته
      return [String(candidate)];
    }

    // منابع مختلف را بررسی می‌کنیم (اولویت به registration.majors)
    let detectedMajors = [];
    const possiblePaths = [
      reg.majors,
      reg.selectedMajors,
      reg.majorTitles,
      payload.majors,
      payload.selectedMajors,
      payload.personal && payload.personal.majors,
      payload.personal && payload.personal.major,
      payload.selectedMajors
    ];

    for (let i = 0; i < possiblePaths.length; i++) {
      const v = possiblePaths[i];
      const arr = normalizeMajors(v);
      if (arr && arr.length) {
        detectedMajors = arr;
        break;
      }
    }

    // final string
    const majorsString = (Array.isArray(detectedMajors) ? detectedMajors : []).join("، ");

    // همچنین عنوان فارسی اگر فرستاده شده را جدا کنیم (majorTitles)
    let detectedMajorTitles = [];
    if (reg.majorTitles) detectedMajorTitles = normalizeMajors(reg.majorTitles);
    else if (payload.majorTitles) detectedMajorTitles = normalizeMajors(payload.majorTitles);
    else if (payload.personal && payload.personal.majorTitle) detectedMajorTitles = [payload.personal.majorTitle];

    const majorTitlesString = Array.isArray(detectedMajorTitles) ? detectedMajorTitles.join("، ") : "";
    const trackingCode = payload.trackingCode || reg.trackingCode || "";

    // برای دیباگ (اختیاری) — ردیفی در شیت PayloadDebug می‌نویسد
    try {
      const dbgName = "PayloadDebug";
      let dbgSheet = ss.getSheetByName(dbgName);
      if (!dbgSheet) dbgSheet = ss.insertSheet(dbgName);
      // نگه داشتن فقط چند ستون مختصر (timestamp, nationalCode, majorsDetected, rawSummary)
      dbgSheet.appendRow([
        new Date().toISOString(),
        personal.nationalCode || "",
        majorsString,
        majorTitlesString,
        // خلاصه کوتاهی از registration (غیر از فایل‌ها)
        JSON.stringify({
          regSummary: {
            majors: reg.majors,
            majorTitles: reg.majorTitles,
            totalFee: reg.totalFee
          }
        })
      ]);
    } catch (dbgErr) {
      // ignore debug failures
    }

    // نوشتن نهایی در شیت مربوط به رده سنی
    sheet.appendRow([
      personal.name || "",
      personal.nationalCode || "",
      personal.fatherName || "",
      personal.schoolName || "",
      personal.swimSchoolName || "",
      personal.coachName || "",
      personal.phone || "",
      personal.birthYear || "",
      payload.trackingCode || "",     // ← اینجا کد رهگیری اضافه شد
      majorTitlesString,    // عناوین فارسی اگر ارسال شده
      idcardUrl,
      insuranceUrl,
      receiptUrl,
      reg.totalFee || "",
      "در دست بررسی",
      payload.description || reg.description || ""
    ]);

    // پاسخ با اطلاعاتِ تشخیص داده شده برای بررسی در کلاینت
    return ContentService
      .createTextOutput(JSON.stringify({
        ok: true,
        majorsDetected: detectedMajors,
        majorsString: majorsString,
        majorTitles: detectedMajorTitles
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

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
  return "Unknown";
}
