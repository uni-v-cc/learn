---
sidebar_position: 1
---

# ⚙️ Custom Marketplace

If you have your own store, you might want to integrate with Uni-VCC, but quickly find lack of support inside [Marketplaces](https://uni-vcc.app/dash/marketplaces) tab.

However, if you are a developer, you are in luck! This post defines a standard of custom license checking endpoints.

:::danger Heads-up!
You must be able to add API endpoints to your backend, and must support HTTPS protocol.
:::

The endpoint below will be put into the product link tab in the distributable dashboard, where you normally link default supported platforms.

## Endpoint

What you need:
- Reachable domain with HTTPS enabled.
- Server host that will process the incoming HTTPS requests.
- Optionally, a CloudFlare firewall for DoS protection.
- Be able to exchange with valid JSON payloads and query your database.

## ⏫ Request
Uni-VCC will send an **`HTTP POST`** request to your endpoint over **https** protocol:

- Headers:
  - `Content-Type`: `application/json`
  - `Accept`: `application/json`
  - `User-Agent`: `Uni-VCC App 1.1.0`
  - `Accept-Charset`: `utf-8`
- JSON Object Body (UTF-8):
```json
{
    "license": "USER-LICENSE-KEY",
    "variant": "CREATOR_DEFINED_VARIANT",
    "language": "en-US",
    "distro": "com.yourpackage.distro",
    "uids": {
        "creator": "product creator uid",
        "product": "product uid",
        "distro": "distributable package uid",
        "package": "package uid"
    }
}
```

:::tip
The "language" is a string representation of IETF BCP 47 language tag (for now it's only en-US).

If you don't support a given language, your response must be localized in en-US locale.
:::

:::danger
Make sure your server **never** inserts any of the parameters into an SQL function.
Use `?` parameters to avoid potential SQL injection attack vector.

Example:
```sql
SELECT * FROM MyLicenses WHERE LicenseKey = ? LIMIT 1;
```
And then pass the license key as a parameter (index 1) to your statement.
:::

## 🔁 Response

Your endpoint must respond with:

### 🎯 **HTTP 200**
Respond when the license key is found, and maybe valid.
- Headers:
  - `Content-Type`: `application/json`
  - `Content-Length`: *2 < N < 2048*
- JSON Object Body (UTF-8, under 2048 bytes):
```json
{
    "valid": true/false,

    // Optionally, if 'valid' is false:
    "reason": "This license key violated ToS"
}
```

JSON property 'valid' must tell Uni-VCC if this license key is active (thus, valid) or not.

Generally this should return **true** unless the license key was suspended / terminated.

If your server returns **false**, Uni-VCC will tell the user that the license key is not valid without providing any information.

Optionally, you can provide `reason` property to provide a user-readable reason as to why the license key is not valid.

### ⚠️ **HTTP 4xx**

Respond when the license key does not exist or there is any other issue that user should know of.
- Headers:
  - `Content-Type`: `application/json`
  - `Content-Length`: *2 < N < 2048*
- JSON Object Body (UTF-8, under 2048 bytes):
```json
{
    "error": "There was a database error. Please try again in a few minutes."
}
```

The error property will be displayed to the user.

### ❗ **HTTP 5xx and above**

This class of responses generally shouldn't be used unless your server fails to perform a job.

In this case, anything the server responds with will be discarded and the user will see a general error message.